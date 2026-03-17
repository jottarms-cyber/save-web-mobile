export async function getData() {
  const saved = localStorage.getItem("products");
  if (saved) return JSON.parse(saved);

  const data = [
    { codigo: "12345", descricao: "EXEMPLO PRODUTO 1" },
    { codigo: "67890", descricao: "EXEMPLO PRODUTO 2" }
  ];

  localStorage.setItem("products", JSON.stringify(data));
  return data;
}

export function saveData(data) {
  localStorage.setItem("products", JSON.stringify(data));
}
