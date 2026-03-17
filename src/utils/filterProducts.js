export function filterProducts(data, query) {
  if (!query) return data;

  return data.filter(
    (item) =>
      item.codigo.includes(query) ||
      item.descricao.toLowerCase().includes(query.toLowerCase())
  );
}
