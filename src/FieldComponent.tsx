import { TextField } from "@mui/material";
import { Controller,useFormContext } from "react-hook-form";
interface PropTypes{
    index:number,
    field:any
}
export const FieldComponent = ({index,field}:PropTypes) => {
    const {control,setValue} = useFormContext()
  return (
    <div>
      <div key={index}>
        <label htmlFor={`field-${index}`}>Field {index + 1}:</label>
        <Controller
          render={({ field }) => <TextField {...field} onBlur={(e)=>{setValue(`fields.${index}.value`,e.target.value)}}/>}
          control={control}
          name={`fields.${index}.value`}
          defaultValue={field.value}
          rules={{ required: true }}
        />
      </div>
    </div>
  );
};
