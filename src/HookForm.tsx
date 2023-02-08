import React, { useState } from 'react';
import { useForm, useFieldArray, Controller ,FormProvider} from "react-hook-form";
import { FieldComponent } from './FieldComponent';

interface Field {
  value: string;
}

interface FormValues {
  fields: Field[];
}

export const HookForm: React.FC = () => {
  const methods = useForm<FormValues>();
  
    
   const initialFields =[
        { value: "field 1" },
        { value: "field 2" },
        { value: "field 3" }
      ]
    
  
 const  { control, handleSubmit, register ,getValues} = methods
  const { fields, append, remove: removeField } = useFieldArray({
    control,
    name: "fields"
  });

  const onSubmit = () => {
    console.log("getValues--->",getValues());
  };

  return (
    <FormProvider {...methods}>
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <FieldComponent index={index} field={field}/>
      ))}
      {/* <button type="button" onClick={()=>onSubmit()}>Submit</button> */}
      <button type="button" onClick={() => append(initialFields)}>CLick here</button>
    </form>
    </FormProvider>
  );
};

