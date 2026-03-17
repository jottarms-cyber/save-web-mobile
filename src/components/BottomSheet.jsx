export default function BottomSheet({ product, onClose }) {
  if (!product) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "50%",
      background: "white",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      padding: "20px",
      boxShadow: "0 -2px 10px rgba(0,0,0,0.3)"
    }}>
      <h2 style={{ color: "#f15a00" }}>{product.codigo}</h2>
      <p>{product.descricao}</p>

      <button
        onClick={onClose}
        style={{
          marginTop: "20px",
          padding: "10px",
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
