import React, { useState } from "react";

const MultipleInputs = () => {
  const [inputs, setInputs] = useState([
    { type: "text", value: "" },
    { type: "email", value: "" },
    { type: "password", value: "" },
  ]);
  console.log("🚀 ~ file: MultipleInputs.tsx:9 ~ MultipleInputs ~ inputs", inputs)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  };

  return (
    <>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {inputs.map((input, index) => (
        <div style={{width:'250px',display: "flex",padding:'15px'}}>
          <label>Input {index+1}</label>
          <input
            key={index}
            type={input.type}
            value={input.value}
            onChange={(e) => handleInputChange(e, index)}
          />
        </div>
      ))}
    </div>
    <div>
    </div>
    </>
  );
};

export default MultipleInputs;
