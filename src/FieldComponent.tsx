import { TextField } from "@mui/material";
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
  shiftItemDetails,
  type,
  skillSetItemDetails,
}: PropTypes) => {
  const { control, setValue,getValues } = useFormContext();
  // console.log('rendr',`${rowIndex}.${ColIndex}`)
  console.log("🚀 ~ file: FieldComponent.tsx:17 ~ skillSetItemDetails", getValues('fields')[rowIndex].shiftDetails[ColIndex].inputDetails)
  return (
    <div>
      <div key={`${rowIndex}.${ColIndex}`}>
        <label htmlFor={`${type}-${ColIndex}`}>
          
          Field --{type} {ColIndex + 1}:
        </label>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              onBlur={(e) => {
                setValue(
                  `${type}.${rowIndex}.${ColIndex}.inputDetails`,
                  {value:e.target.value,shiftName: "10", isOcbr: false}
                );
              }}
            />
          )}
          control={control}
          name={`${type}.${rowIndex}.${ColIndex}.inputDetails.value`}
          defaultValue={getValues('fields')[rowIndex].shiftDetails[ColIndex].inputDetails.value}
          rules={{ required: true }}
        />
      </div>
    </div>
  );
};
