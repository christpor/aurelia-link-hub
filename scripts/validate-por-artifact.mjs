import { readFile } from "node:fs/promises";

const artifactPath = new URL("../docs/por-review-artifact.json", import.meta.url);
const artifact = JSON.parse(await readFile(artifactPath, "utf8"));

const requiredTopLevel = [
  "request_id",
  "context_brief",
  "route_state_matrix",
  "interaction_visual_audit",
  "completion_decision",
];
const routeStatuses = new Set([
  "implemented_verified",
  "implemented_unverified",
  "missing",
  "blocked",
  "not_applicable",
  "approved_exclusion",
]);
const auditResults = new Set(["pass", "fail", "not_applicable", "not_verified"]);
const severities = new Set(["none", "low", "medium", "high", "critical"]);
const decisions = new Set(["ready", "needs_review", "blocked"]);

const errors = [];
for (const key of requiredTopLevel) {
  if (!(key in artifact)) errors.push(`Missing top-level property: ${key}`);
}

for (const [index, row] of artifact.route_state_matrix.entries()) {
  for (const key of ["item", "kind", "purpose", "discovery_source", "status", "evidence", "approved_exclusion_reason"]) {
    if (!(key in row)) errors.push(`Route row ${index} is missing ${key}`);
  }
  if (!routeStatuses.has(row.status)) errors.push(`Route row ${index} has invalid status: ${row.status}`);
}

for (const [index, row] of artifact.interaction_visual_audit.entries()) {
  for (const key of ["screen_or_control", "viewport_or_device", "state_exercised", "result", "evidence", "severity", "next_action"]) {
    if (!(key in row)) errors.push(`Audit row ${index} is missing ${key}`);
  }
  if (!auditResults.has(row.result)) errors.push(`Audit row ${index} has invalid result: ${row.result}`);
  if (!severities.has(row.severity)) errors.push(`Audit row ${index} has invalid severity: ${row.severity}`);
}

if (!decisions.has(artifact.completion_decision?.status)) {
  errors.push(`Invalid completion decision: ${artifact.completion_decision?.status}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("POR artifact structure is valid.");
