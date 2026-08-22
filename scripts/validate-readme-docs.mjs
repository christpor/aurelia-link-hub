import { access, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (relativePath) => readFile(path.join(root, relativePath), "utf8");
const errors = [];

const exactKeys = (value, keys, location) => {
  const actual = Object.keys(value).sort();
  const expected = [...keys].sort();
  if (actual.join("|") !== expected.join("|")) {
    errors.push(`${location} has unexpected or missing properties`);
  }
};

const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

const readme = await read("README.md");
const evidence = JSON.parse(await read("docs/readme/README-evidence.json"));
const architecture = JSON.parse(await read("docs/readme/README-architecture-decision.json"));
const artifact = JSON.parse(await read("docs/readme/README-authoring-artifact.json"));
const report = JSON.parse(await read("docs/readme/README-validation-report.json"));

exactKeys(evidence, ["request_id", "entries"], "README-evidence.json");
assert(Array.isArray(evidence.entries) && evidence.entries.length > 0, "Evidence ledger must contain entries");
for (const [index, entry] of evidence.entries.entries()) {
  exactKeys(entry, ["claim_id", "kind", "text", "source_refs", "provenance_state", "materiality", "status", "limitation"], `evidence entry ${index}`);
  assert(entry.source_refs.length > 0, `Evidence entry ${entry.claim_id} is missing source references`);
  assert(!(entry.kind === "command" && entry.provenance_state === "pending-verification"), `Command ${entry.claim_id} cannot be pending verification`);
}

exactKeys(architecture, ["project_archetype", "primary_reader_job", "opening_mechanism", "proof_vehicle", "first_success_format", "information_depth_boundary", "visual_route", "section_order", "evidence_ids"], "README-architecture-decision.json");
assert(architecture.visual_route === "none", "README visual route must remain none without an asset manifest");
assert(Array.isArray(architecture.evidence_ids) && architecture.evidence_ids.length > 0, "Architecture decision must reference evidence");

exactKeys(report, ["status", "passed_checks", "failed_checks", "pending_review", "planned_mutations"], "README-validation-report.json");
assert(artifact.request?.readme_target === "README.md" && artifact.request?.write_approval === true, "Authoring artifact must record the approved README write target");

const markdownLinkPattern = /(?<!!)(?:\[[^\]]+\])\(([^)]+)\)/g;
for (const match of readme.matchAll(markdownLinkPattern)) {
  const target = match[1].split("#", 1)[0].trim();
  if (!target || /^(https?:|mailto:|tel:)/.test(target)) continue;
  try {
    await access(path.resolve(root, target));
  } catch {
    errors.push(`README relative link does not resolve: ${target}`);
  }
}

assert(!readme.includes("/manus-storage/"), "README must not reference project-managed asset paths");
assert(!/(api[_-]?key|access[_-]?token|secret|password)\s*[:=]/i.test(readme), "README contains a secret-like assignment");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("README evidence structure and repository-relative links are valid.");
