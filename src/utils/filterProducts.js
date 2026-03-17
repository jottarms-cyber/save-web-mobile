export function filterProducts(data, query) {
  if (!query) return data;

  const term = String(query).trim().toLowerCase();

  return data.filter((item) => {
    const codigo = String(item.codigo || "").toLowerCase();
    const descricao = String(item.descricao || "").toLowerCase();

    return codigo.includes(term) || descricao.includes(term);
  });
}
