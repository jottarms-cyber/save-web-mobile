import HighlightText from "./HighlightText";

export default function ProductRow({ item, query, onClick }) {
  return (
    <tr onClick={onClick} style={{ cursor: "pointer" }}>
      <td>
        <HighlightText text={item.codigo} query={query} />
      </td>
      <td>
        <HighlightText text={item.descricao} query={query} />
      </td>
    </tr>
  );
}
