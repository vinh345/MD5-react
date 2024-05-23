import React, { useState } from "react";

export default function CounText() {
  const [count, setCount] = useState("");

 const handleInput = (e) => {
    setCount(e.target.value);   
  };

  const charTextCount = count.length;
  return (
    <div>
      <h2> Bạn đã nhập {charTextCount} kí tự</h2>
      <textarea
        id="w3review"
        name="w3review"
        rows="4"
        cols="50"
        onChange={handleInput}
        value={count}
      ></textarea>
    </div>
  );
}
