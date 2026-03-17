export default function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Digite o código ou descrição"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search"
    />
  );
}
