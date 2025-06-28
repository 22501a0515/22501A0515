import { useState } from "react";
import ShowLinks from "./ShowLinks";

export default function Compress() {
  const [url, setUrl]     = useState("");
  const [status, setStatus] = useState({ type: "", text: "" }); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { new URL(url); } catch {
      return setStatus({ type: "err", text: " invalid url" });
    }

    setStatus({ type: "", text: "" });

    try {
      const res  = await fetch("http://localhost:5000/check", {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body   : JSON.stringify({ url }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "server error");

      setStatus({ type: "ok", text: data.message }); 
    } catch (err) {
      setStatus({ type: "err", text: ` ${err.message}` });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="in">Enter URL</label>
        <input
          id="in"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com"
          required
          autoFocus
        />
        <button type="submit">Shorten</button>
      </form>

     
      {status.text && <ShowLinks type={status.type} text={status.text} />}
    </>
  );
}
