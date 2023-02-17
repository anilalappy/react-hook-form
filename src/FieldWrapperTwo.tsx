import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FieldComponent } from "./FieldComponent";
interface PropTypes {
  rowIndex: number;
  skillSetItemDetails: any;
  type: any;
}
export const FieldWrapperTwo = ({ rowIndex, skillSetItemDetails, type }: PropTypes) => {
  const { control, setValue } = useFormContext();
  let c = 0;
  return (
    <div>
      {skillSetItemDetails.shiftDetails.map((shiftItemDetails: any, index: any) => {
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
              skillSetItemDetails={skillSetItemDetails}
              shiftItemDetails={shiftItemDetails}
              rowIndex={rowIndex}
              ColIndex={index}
            />
          </div>
        );
      })}
    </div>
  );
};
