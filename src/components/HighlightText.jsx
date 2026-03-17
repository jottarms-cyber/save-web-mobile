function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export default function HighlightText({ text, query }) {
  const safeText = String(text || "");
  const safeQuery = String(query || "").trim();

  if (!safeQuery) return safeText;

  const parts = safeText.split(
    new RegExp(`(${escapeRegExp(safeQuery)})`, "gi")
  );

  return parts.map((part, i) =>
    part.toLowerCase() === safeQuery.toLowerCase() ? (
      <span key={i} style={{ color: "green", fontWeight: "bold" }}>
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
