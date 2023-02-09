import React from "react";
import { useFieldArray,useFormContext,useController } from "react-hook-form";
import { FieldComponent } from "./FieldComponent";
import { FieldWrapperTwo } from "./FieldWrapperTwo";

const defaultValues =[
    { value: "field 1",shiftArr:[{newVal:"10",shift:"s10"},{newVal:"10",shift:"s20"},{newVal:"10",shift:"s30"}] },
    { value: "field 2",shiftArr:[{newVal:"20",shift:"s10"},{newVal:"20",shift:"s20"},{newVal:"20",shift:"s30"}] },
    { value: "field 3" ,shiftArr:[{newVal:"30",shift:"s10"},{newVal:"30",shift:"s20"},{newVal:"30",shift:"s30"}]}
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
        // <FieldComponent type={`fields`} index={index} field={field}/>
        <div key={Math.random().toString()}>
        <FieldWrapperTwo type={`fields`} rowIndex={index} field={field}/>
        </div>

      ))}
    </div>
  )
}
export default FieldsWrapper