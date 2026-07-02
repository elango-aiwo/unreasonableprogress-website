import type { ApplicationInput } from "@/lib/apply/schema";

/**
 * MOCKED — SPEC §8.1/§8.6 calls for an encrypted, append-only Postgres/KV store.
 * No database credentials exist yet (ratified in docs/DECISIONS.md). This in-memory
 * stand-in preserves the same interface so a real store is a drop-in swap:
 * replace the body of `storeApplication` with an insert into the real store.
 */

interface StoredApplication extends ApplicationInput {
  id: string;
  receivedAt: string;
}

const submissions: StoredApplication[] = [];

function generateReferenceCode(seed: number): string {
  const code = (seed * 2654435761) % 0xffffff;
  return `UP-${code.toString(16).toUpperCase().padStart(6, "0")}`;
}

export async function storeApplication(input: ApplicationInput): Promise<{ id: string }> {
  const id = generateReferenceCode(submissions.length + 1);
  const record: StoredApplication = { ...input, id, receivedAt: new Date().toISOString() };
  submissions.push(record);
  console.log(`[mock:store] application ${id} recorded (${submissions.length} total this server lifetime)`);
  return { id };
}
