import React from "react";
import { useFieldArray,useFormContext,useController } from "react-hook-form";
import { FieldComponent } from "./FieldComponent";

const defaultValues =[
    { value: "field 1" },
    { value: "field 2" },
    { value: "field 3" }
  ]
  interface FieldValues{
    value:string
  }

const FieldsWrapper = () => {
    const {control} = useFormContext();
    // const control = useController({
    //     defaultValue: {
    //         fields: defaultValues
    //     },
    //     name: "fields"
    // })
    const { fields, append, remove: removeField,replace } = useFieldArray({
        control,
        name: "fields",
      });
    
    React.useEffect(()=>{
        replace(defaultValues)
    },[replace,defaultValues])
  return (
    <div>
        {fields.map((field, index) => (
        <FieldComponent index={index} field={field}/>
      ))}
      {/* <button type="button" onClick={()=>onSubmit()}>Submit</button> */}
      {/* <button type="button" onClick={() => append(initialFields)}>CLick here</button> */}
    </div>
  )
}
export default FieldsWrapper