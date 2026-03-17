return (
  <div>

    {/* TOPO LARANJA */}
    <div className="header">
      <span style={{ fontSize: "22px" }}>SAVEweb MOBILE</span>
    </div>

    {/* TEXTO */}
    <div style={{
      background: "#f15a00",
      color: "white",
      padding: "8px",
      fontWeight: "bold"
    }}>
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

    {/* RODAPÉ */}
    <div style={{
      textAlign: "center",
      marginTop: "20px",
      color: "#0b3d2e",
      fontWeight: "bold"
    }}>
      JOÃO PAULO - FILIAL 172 CASCAVEL
    </div>

  </div>
);
