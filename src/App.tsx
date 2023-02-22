import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MultipleInputs from "./MultipleInputs";
import { HookForm } from "./HookForm";
import { useForm } from "react-hook-form";
// import { HookFormFieldArray } from "./HookFromFieldArray";

function App() {
  const {getValues} = useForm()
  const onSubmit = () => {
    console.log("getValues--->",getValues());
  };
  //say hello to me
  return (
    <div className="App">
      {/* <MultipleInputs /> */}
      <HookForm/>
      {/* <HookFormFieldArray/> */}
      {/* <button type="button" onClick={()=>onSubmit()}>Submit</button> */}
    </div>
  );
}

export default App;
