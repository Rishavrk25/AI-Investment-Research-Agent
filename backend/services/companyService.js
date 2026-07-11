
const WIKIDATA_API = "https://www.wikidata.org/w/api.php";

// Step 1: find the Wikidata entity ID for a company name
const findEntityId = async (companyName) => {
  const url = `${WIKIDATA_API}?action=wbsearchentities&search=${encodeURIComponent(companyName)}&language=en&format=json&origin=*`;
  const res = await fetch(url);
  const data = await res.json();
  return data.search?.[0]?.id;
};

// Step 2: resolve a Wikidata ID (like Q1420) into its readable label
const resolveLabel = async (id) => {
  const url = `${WIKIDATA_API}?action=wbgetentities&ids=${id}&props=labels&languages=en&format=json&origin=*`;
  const res = await fetch(url);
  const data = await res.json();
  return data.entities?.[id]?.labels?.en?.value || null;
};
// Helper: pick the best claim from an array of Wikidata claims
const getCurrentClaim = (claimArray) => {
  if (!claimArray || claimArray.length === 0) return null;

  // 1. Prefer claims explicitly marked as "preferred" rank
  const preferred = claimArray.find((c) => c.rank === "preferred");
  if (preferred) return preferred;

  // 2. Otherwise, prefer claims with no "end time" qualifier (P582) — meaning still active
  const current = claimArray.find((c) => !c.qualifiers?.P582);
  if (current) return current;

  // 3. Fallback: just take the first one
  return claimArray[0];
};
export const getCompanyInfo = async (companyName) => {
  const entityId = await findEntityId(companyName);
  if (!entityId) throw new Error(`No Wikidata entry found for "${companyName}"`);

  const entityUrl = `${WIKIDATA_API}?action=wbgetentities&ids=${entityId}&props=claims|labels&languages=en&format=json&origin=*`;
  const res = await fetch(entityUrl);
  const data = await res.json();
  const entity = data.entities[entityId];

  const claims = entity.claims;

  const industryClaim = getCurrentClaim(claims?.P452);
  const ceoClaim = getCurrentClaim(claims?.P169);

  const industryId = industryClaim?.mainsnak?.datavalue?.value?.id;
  const ceoId = ceoClaim?.mainsnak?.datavalue?.value?.id;

  const [industry, ceo] = await Promise.all([
    industryId ? resolveLabel(industryId) : null,
    ceoId ? resolveLabel(ceoId) : null,
  ]);

  return {
    name: entity.labels?.en?.value || companyName,
    industry,
    ceo,
  };
};