import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
interface PropTypes {
  ColIndex: number;
  rowIndex: number;
  field: any;
  type: any;
  shiftItem: any;
}
export const FieldComponent = ({
  rowIndex,
  ColIndex,
  field,
  type,
  shiftItem,
}: PropTypes) => {
  debugger
  const { control, setValue } = useFormContext();
  // console.log('rendr',`${rowIndex}.${ColIndex}`)
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
                  `${type}.${rowIndex}.${ColIndex}.value`,
                  e.target.value
                );
              }}
            />
          )}
          control={control}
          name={`${type}.${rowIndex}.${ColIndex}.value`}
          defaultValue={field?.shiftItem?.newVal}
          rules={{ required: true }}
        />
      </div>
    </div>
  );
};
