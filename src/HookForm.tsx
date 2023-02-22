import React, { useEffect, useState } from "react";
import {
  useForm,
  useFieldArray,
  Controller,
  FormProvider,
} from "react-hook-form";
import { FieldComponent } from "./FieldComponent";
import FieldsWrapper from "./FieldsWrapper";
import { DevTool } from "@hookform/devtools";
import { GWWWrapper } from "./GWWWrapper";

interface Field {
  value: string;
}

interface FormValues {
  fields: Field[];
}


export const HookForm: React.FC = () => {
  const methods = useForm<FormValues>();

  const { control, handleSubmit, register, getValues } = methods;

  const onSubmit = () => {
    console.log("getValues--->", getValues());
  };



  return (
    <FormProvider {...methods}>
      <DevTool control={control} placement="top-left" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrapper />
        <button onClick={()=>onSubmit()}>click</button>
      </form>
    </FormProvider>
  );
};
