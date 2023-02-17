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

 export  const billRatesArray = [
    {
      skillSet: "RN, ICU, Burn ICU",
      shiftDetails: [
        {
          shiftName: "8",
          shiftRatesArray: [
            {
              value: "95.00",
              index: 0,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "8",
              shiftID: 1,
            },
            {
              min: {
                value: "",
              },
              max: {
                value: "",
              },
              index: 1,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "8",
              shiftID: 1,
            },
          ],
        },
        {
          shiftName: "11.5",
          shiftRatesArray: [
            {
              value: "95.00",
              index: 0,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "11.5",
              shiftID: 5,
            },
            {
              min: {
                value: "",
              },
              max: {
                value: "",
              },
              index: 1,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "11.5",
              shiftID: 5,
            },
          ],
        },
        {
          shiftName: "12",
          shiftRatesArray: [
            {
              value: "95.00",
              index: 0,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "12",
              shiftID: 3,
            },
            {
              min: {
                value: "",
              },
              max: {
                value: "",
              },
              index: 1,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "12",
              shiftID: 3,
            },
          ],
        },
      ],
    },
    {
      skillSet: "2RN2, 2ICU3, 2Burn ICU3",
      shiftDetails: [
        {
          shiftName: "8",
          shiftRatesArray: [
            {
              value: "95.00",
              index: 0,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "8",
              shiftID: 1,
            },
            {
              min: {
                value: "",
              },
              max: {
                value: "",
              },
              index: 1,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "8",
              shiftID: 1,
            },
          ],
        },
        {
          shiftName: "11.5",
          shiftRatesArray: [
            {
              value: "95.00",
              index: 0,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "11.5",
              shiftID: 5,
            },
            {
              min: {
                value: "",
              },
              max: {
                value: "",
              },
              index: 1,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "11.5",
              shiftID: 5,
            },
          ],
        },
        {
          shiftName: "12",
          shiftRatesArray: [
            {
              value: "95.00",
              index: 0,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "12",
              shiftID: 3,
            },
            {
              min: {
                value: "",
              },
              max: {
                value: "",
              },
              index: 1,
              disciplineId: 1,
              specialtyId: 1,
              subSpecialtyId: 4,
              shift: "12",
              shiftID: 3,
            },
          ],
        },
      ],
    },
  ];

export const HookForm: React.FC = () => {
  const methods = useForm<FormValues>();

  const { control, handleSubmit, register, getValues } = methods;

  useEffect(() => {
    onSubmit();
  });
  const onSubmit = () => {
    console.log("getValues--->", getValues());
  };

  //-----------------------


  const defaultValues = [
    { column1: "default value 1-1", column2: "default value 1-2" },
    { column1: "default value 2-1", column2: "default value 2-2" },
    { column1: "default value 3-1", column2: "default value 3-2" },
  ];
  useEffect(() => {
    const defArr = [];
    const defaultValues = billRatesArray.map((skillSet, rowIndex) => {
      const updatedShiftDetails = skillSet.shiftDetails.map(
        (col, colIndex) => ({ ...col, ["colName"]: `Column${colIndex + 1}` })
      );
      // skillSet.shiftDetails.map((shiftItem,columnIndex)=>{
      // const row = updatedShiftDetails.reduce((acc, shiftDetails) => {
      //   acc[shiftDetails.colName] = `default value for ${shiftDetails.colName}`;
      //   return acc;
      // }, {});


      // })
      skillSet.shiftDetails = updatedShiftDetails;
      return skillSet;
    });
    // console.log("🚀 ~ file: HookForm.tsx:237 ~ defaultValues ~ defaultValues", defaultValues)
  });

  return (
    <FormProvider {...methods}>
      <DevTool control={control} placement="top-left" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldsWrapper />
        {/* <GWWWrapper /> */}
        <button onClick={()=>onSubmit()}>click</button>
      </form>
    </FormProvider>
  );
};
