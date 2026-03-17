import HighlightText from "./HighlightText";

export default function ProductRow({ item, query, onClick }) {
  return (
    <tr
      onClick={onClick}
      style={{
        cursor: "pointer",
        background: "#fff"
      }}
    >
      <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
        <HighlightText text={item.codigo} query={query} />
      </td>

      <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
        <HighlightText text={item.descricao} query={query} />
      </td>
    </tr>
  );
}
