import React, { useState } from 'react';
import { useForm, useFieldArray, Controller ,FormProvider} from "react-hook-form";
import { FieldComponent } from './FieldComponent';
import FieldsWrapper from './FieldsWrapper';

interface Field {
  value: string;
}

interface FormValues {
  fields: Field[];
}

export const HookForm: React.FC = () => {
  const methods = useForm<FormValues>();
  
    

  
 const  { control, handleSubmit, register ,getValues} = methods


  const onSubmit = () => {
    console.log("getValues--->",getValues());
  };

  return (
    <FormProvider {...methods}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <FieldsWrapper/>
    </form>
    </FormProvider>
  );
};

