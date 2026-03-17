export default function BottomSheet({ product, onClose }) {
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
      <button onClick={onClose}>Voltar</button>

      <h1 style={{ color: "green", fontSize: "30px" }}>
        {product.codigo}
      </h1>

      <p>{product.descricao}</p>
    </div>
  );
}
