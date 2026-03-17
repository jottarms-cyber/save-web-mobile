import { useState, useEffect } from "react";
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
    getData().then(setProducts);
  }, []);

  const results = filterProducts(products, query);

  return (
    <div>

      {/* TOPO COM LOGO */}
      <div className="top-banner" style={{
        display: "flex",
        alignItems: "center",
        gap: "10px"
      }}>
        <img src={logo} alt="logo" style={{ width: "40px" }} />
        <div className="top-banner-title">SAVEweb MOBILE</div>
      </div>

      {/* TEXTO */}
      <div className="sub-banner">
        ▪ CONSULTA MERCADORIAS POR DESCRIÇÃO
      </div>

      {/* BUSCA */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* TABELA */}
      <ProductTable
        data={results}
        query={query}
        onSelect={setSelected}
      />

      {/* DETALHE */}
      {selected && (
        <BottomSheet
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}

      {/* BOTÃO IMPORTAR */}
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

      {/* RODAPÉ */}
      <div className="footer-brand">
        JOÃO PAULO - FILIAL 172 CASCAVEL
      </div>

    </div>
  );
}
