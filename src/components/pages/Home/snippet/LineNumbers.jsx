export default function LineNumbers({ total }) {
  return (
    <div
      style={{
        padding: "1.5rem 0.5rem 1.5rem 1rem",
        color: "#606366",
        textAlign: "right",
        userSelect: "none",
        borderRight: "1px solid #333",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      {Array.from({ length: total }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  );
}
