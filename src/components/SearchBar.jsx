export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Digite o código ou descrição"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "10px",
        border: "1px solid #ccc",
        marginTop: "10px"
      }}
    />
  );
}
