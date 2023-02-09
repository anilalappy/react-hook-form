import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FieldComponent } from "./FieldComponent";
interface PropTypes {
  rowIndex: number;
  field: any;
  type: any;
}
export const FieldWrapperTwo = ({ rowIndex, field, type }: PropTypes) => {
  const { control, setValue } = useFormContext();
  let c = 0;
  return (
    <div>
      {field.shiftArr.map((shiftItem: any, index: any) => {
        debugger
        c += 1;
        console.log(
          "🚀 ~ file: FieldWrapperTwo.tsx:15 ~ {field.shiftArr.map ~ shiftItem",
          Math.random().toString()
        );

        return (
          <div key={Math.random().toString()}>
            {/* // <FieldComponent type={`fields`} index={index} field={field} /> */}
            <FieldComponent
              type={`fields`}
              field={field}
              shiftItem={shiftItem}
              rowIndex={rowIndex}
              ColIndex={index}
            />
          </div>
        );
      })}
    </div>
  );
};
