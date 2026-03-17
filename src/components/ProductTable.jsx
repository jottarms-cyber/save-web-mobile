import ProductRow from "./ProductRow";

export default function ProductTable({ data, query, onSelect }) {
  return (
    <table
      style={{
        width: "95%",
        margin: "10px auto",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid #ccc"
      }}
    >
      <thead>
        <tr style={{ background: "#eee" }}>
          <th style={{ padding: "10px" }}>Código</th>
          <th style={{ padding: "10px" }}>Descrição Mercadoria</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <ProductRow
            key={`${item.codigo}-${i}`}
            item={item}
            query={query}
            onClick={() => onSelect(item)}
          />
        ))}
      </tbody>
    </table>
  );
}
