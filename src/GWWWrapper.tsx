import React from "react";
import { useFieldArray,useFormContext,useController } from "react-hook-form";
import { FieldComponent } from "./FieldComponent";

const defaultValues =[
    { value: "GWWWrapper field 1" },
    { value: "GWWWrapper field 2" },
    { value: "GWWWrapper field 3" }
  ]
  interface FieldValues{
    value:string
  }

export const GWWWrapper = () => {
    const {control} = useFormContext();
    // const control = useController({
    //     defaultValue: {
    //         fields: defaultValues
    //     },
    //     name: "fields"
    // })
    const { fields, append, remove: removeField,replace } = useFieldArray({
        control,
        name: "GWWWrapperfields",
      });
    
    React.useEffect(()=>{
        replace(defaultValues)
    },[replace,defaultValues])
  return (
    <div>
        {/* {fields.map((field, index) => (
        <FieldComponent type={`GWWWrapperfields`} index={index} field={field}/>
      ))} */}
      {/* <button type="button" onClick={()=>onSubmit()}>Submit</button> */}
      {/* <button type="button" onClick={() => append(initialFields)}>CLick here</button> */}
    </div>
  )
}