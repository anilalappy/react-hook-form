import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { FieldComponent } from "./FieldComponent";
interface PropTypes {
  rowIndex: number;
  skillSetItemDetails: any;
  type: any;
}
export const FieldWrapperTwo = ({ rowIndex, skillSetItemDetails, type }: PropTypes) => {
  return (
    <div>
      {skillSetItemDetails.shiftDetails.map((shiftItemDetails: any, index: any) => {
        return (
          <div key={Math.random().toString()}>
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
