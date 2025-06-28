import './ShowLinks.css'
export default function ShowLinks({ type, text }) {
  const color = type === "ok" ? "#2e865f" : "#c62828"; 
  return (
    <p style={{ marginTop: "0.8rem", fontWeight: 600, color }} className="op">{text}</p>
  );
}
