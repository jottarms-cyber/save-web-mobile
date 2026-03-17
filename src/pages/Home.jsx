import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";
import BottomSheet from "../components/BottomSheet";
import { filterProducts } from "../utils/filterProducts";
import { getData } from "../services/storage";
import logo from "../assets/logo.png";

export default function Home({ goImport }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      const data = await getData();
      setProducts(data);
    }

    loadProducts();
  }, []);

  const results = filterProducts(products, query);

  return (
    <div>
      <div
        className="top-banner"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <img src={logo} alt="Logo" style={{ width: "42px", height: "42px" }} />
        <div className="top-banner-title">SAVEweb MOBILE</div>
      </div>

      <div className="sub-banner">
        ▪ CONSULTA MERCADORIAS POR DESCRIÇÃO
      </div>

      <SearchBar query={query} setQuery={setQuery} />

      <ProductTable
        data={results}
        query={query}
        onSelect={setSelected}
      />

      {selected && (
        <BottomSheet
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          onClick={goImport}
          style={{
            background: "#f15a00",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "10px"
          }}
        >
          Importar Planilha
        </button>
      </div>

      <div className="footer-brand">
        JOÃO PAULO - FILIAL 172 CASCAVEL
      </div>
    </div>
  );
}
