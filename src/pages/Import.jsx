import { saveData } from "../services/storage";

export default function Import({ goHome }) {
  function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const text = reader.result;
      const lines = text.split("\n");

      const data = lines.map((line) => {
        const [codigo, descricao] = line.split(",");
        return { codigo, descricao };
      });

      saveData(data);
      alert("Importado com sucesso!");
      goHome();
    };

    reader.readAsText(file);
  }

  return (
    <div>
      <h2>Importar Planilha</h2>
      <input type="file" onChange={handleFile} />
      <button onClick={goHome}>Voltar</button>
    </div>
  );
}
