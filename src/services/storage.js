export async function getData() {
  const saved = localStorage.getItem("products");
  if (saved) return JSON.parse(saved);

  return [];
}

export function saveData(data) {
  localStorage.setItem("products", JSON.stringify(data));
}

export function clearData() {
  localStorage.removeItem("products");
}
