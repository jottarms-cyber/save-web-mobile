import ProductRow from "./ProductRow";

export default function ProductTable({ data, query, onSelect }) {
  return (
    <table style={{ width: "100%", marginTop: "10px" }}>
      <thead>
        <tr>
          <th>Código</th>
          <th>Descrição Mercadoria</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <ProductRow
            key={i}
            item={item}
            query={query}
            onClick={() => onSelect(item)}
          />
        ))}
      </tbody>
    </table>
  );
}
