import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
interface PropTypes {
  ColIndex: number;
  rowIndex: number;
  shiftItemDetails: any;
  type: any;
  skillSetItemDetails: any;
}
export const FieldComponent = ({
  rowIndex,
  ColIndex,
  type,
}: PropTypes) => {
  const { control, setValue,getValues } = useFormContext();
  const [value01, setvalue01] = useState("")
  console.log('name',`${type}.${rowIndex}.${ColIndex}.inputDetails.value`);
  
  React.useEffect(()=>{
    if(getValues('billRates')[rowIndex].shiftDetails[ColIndex]?.inputDetails?.value){
      setvalue01(getValues('billRates')[rowIndex].shiftDetails[ColIndex]?.inputDetails?.value)
      setValue(
        `${type}.${rowIndex}.${ColIndex}.inputDetails`,
        getValues('billRates')[rowIndex].shiftDetails[ColIndex]?.inputDetails
      );
      console.log('render-compo',getValues('billRates')[rowIndex].shiftDetails[ColIndex]?.inputDetails?.value);
      
    }else{
      setvalue01('9999')  ///Maximum value from dropdown is set here
      setValue(
        `${type}.${rowIndex}.${ColIndex}.inputDetails`,
        {value:9999,shiftName: "10", isOcbr: false}
      );
    }
  },[])
  return (
    <div>
      <div key={`${rowIndex}.${ColIndex}`}>
        <label htmlFor={`${type}-${ColIndex}`}>
          Field --{type} {rowIndex +1} {ColIndex + 1}:
        </label>
        <Controller
          render={({ field }) => (
            <TextField
            // {...field}
            value={value01}
              onChange={e=>setvalue01(e.target.value)}
              onBlur={(e) => {
                setValue(
                  `${type}.${rowIndex}.${ColIndex}`,
                  {...getValues('billRates')[rowIndex].shiftDetails[ColIndex],inputDetails:{value:e.target.value,shiftName: "10", isOcbr: false}}
                )
              }}
            />
          )}
          control={control}
          name={`${type}.${rowIndex}.${ColIndex}.inputDetails.value`}
          // defaultValue={getValues('billRates')[rowIndex].shiftDetails[ColIndex].inputDetails.value}
          rules={{ required: true }}
        />
      </div>
    </div>
  );
};
