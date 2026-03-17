import { saveData } from "../services/storage";

function normalizeHeader(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function mapRowsToProducts(rows) {
  if (!rows || rows.length < 2) return [];

  const headers = rows[0].map(normalizeHeader);

  const codigoIndex = headers.findIndex((h) => h === "codigo" || h === "código");
  const descricaoIndex = headers.findIndex((h) => h === "descricao" || h === "descrição");

  if (codigoIndex === -1 || descricaoIndex === -1) {
    throw new Error('A planilha precisa ter as colunas "codigo" e "descricao".');
  }

  return rows
    .slice(1)
    .map((row) => ({
      codigo: String(row[codigoIndex] ?? "").trim(),
      descricao: String(row[descricaoIndex] ?? "").trim(),
    }))
    .filter((item) => item.codigo && item.descricao);
}

export default function Import({ goHome }) {
  async function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();

    try {
      if (fileName.endsWith(".csv")) {
        const text = await file.text();
        const lines = text
          .split(/\r?\n/)
          .filter(Boolean)
          .map((line) => line.split(","));

        const products = mapRowsToProducts(lines);
        saveData(products);
        alert(`Importação concluída! ${products.length} produtos carregados.`);
        goHome();
        return;
      }

      if (fileName.endsWith(".xlsx")) {
        const XLSX = await import("xlsx");
        const buffer = await file.arrayBuffer();
        const workbook = XLSX.read(buffer, { type: "array" });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const products = mapRowsToProducts(rows);
        saveData(products);
        alert(`Importação concluída! ${products.length} produtos carregados.`);
        goHome();
        return;
      }

      alert("Envie um arquivo CSV ou XLSX.");
    } catch (error) {
      alert(error.message || "Erro ao importar a planilha.");
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Importar Planilha</h2>

      <input
        type="file"
        accept=".csv,.xlsx"
        onChange={handleFile}
      />

      <p style={{ marginTop: "12px", color: "#555" }}>
        A planilha deve conter as colunas: codigo e descricao.
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={goHome}
          style={{
            background: "#f15a00",
            color: "white",
            border: "none",
            padding: "10px 16px",
            borderRadius: "10px"
          }}
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
