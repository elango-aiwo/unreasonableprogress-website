/**
 * Static-export build (npm run build:static) — produces a fully static site in out/.
 *
 * Two pieces of the app cannot run on a static host, so this script sidesteps
 * them for the duration of the build and restores everything afterwards:
 *  1. app/og — the dynamic OG-image route (needs a server). Temporarily renamed
 *     to app/_og so Next excludes it.
 *  2. app/apply/actions.ts — a server action. Its "use server" directive is
 *     temporarily stripped so the (mocked, in-memory) submission logic runs in
 *     the browser instead; the demo apply flow still works end-to-end.
 */
import { execSync } from "node:child_process";
import { existsSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = join(import.meta.dirname, "..");
const ogDir = join(root, "app", "og");
const ogHidden = join(root, "app", "_og");
const actionsPath = join(root, "app", "apply", "actions.ts");

const originalActions = readFileSync(actionsPath, "utf8");
const restore = () => {
  if (existsSync(ogHidden)) renameSync(ogHidden, ogDir);
  writeFileSync(actionsPath, originalActions);
};

try {
  renameSync(ogDir, ogHidden);
  writeFileSync(
    actionsPath,
    originalActions.replace(
      `"use server";`,
      `// "use server" stripped for static export — mocked services run client-side.`
    )
  );

  execSync("npm run check:copy", { cwd: root, stdio: "inherit" });
  execSync("npx next build", {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, STATIC_EXPORT: "1" },
  });

  // GitHub Pages serves via Jekyll by default, which drops _next/ — disable it.
  writeFileSync(join(root, "out", ".nojekyll"), "");
  console.log("\nStatic site written to out/");
} finally {
  restore();
}
