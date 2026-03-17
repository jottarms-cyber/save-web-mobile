import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";
import BottomSheet from "../components/BottomSheet";
import { filterProducts } from "../utils/filterProducts";
import { getData } from "../services/storage";

export default function Home({ goImport }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getData().then(setProducts);
  }, []);

  const results = filterProducts(products, query);

  return (
    <div>
      <h2>Save Web MOBILE</h2>

      <SearchBar query={query} setQuery={setQuery} />

      <ProductTable data={results} query={query} onSelect={setSelected} />

      {selected && (
        <BottomSheet product={selected} onClose={() => setSelected(null)} />
      )}

      <button onClick={goImport}>Importar Planilha</button>
    </div>
  );
}
