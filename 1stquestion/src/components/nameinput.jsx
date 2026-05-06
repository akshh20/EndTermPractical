import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Your Name</h2>

      <input
        type="text"
        placeholder="akshat jain"
        value={name}
        onChange={(e) =>
           setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <h3 style={{ marginTop: "20px" }}>
        Your Name: {name}
      </h3>
    </div>
  );
}

export default NameInput;