export default function BottomSheet({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="sheet">
      <h2 style={{ color: "#f15a00", marginTop: 0 }}>{product.codigo}</h2>
      <p>{product.descricao}</p>

      <button
        onClick={onClose}
        style={{
          marginTop: "20px",
          padding: "10px 14px",
          border: "none",
          background: "#f15a00",
          color: "white",
          borderRadius: "10px"
        }}
      >
        Voltar
      </button>
    </div>
  );
}
