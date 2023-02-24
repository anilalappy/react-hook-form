import React from "react";
import { useFieldArray, useFormContext, useController } from "react-hook-form";
import { FieldComponent } from "./FieldComponent";
import { FieldWrapperTwo } from "./FieldWrapperTwo";

const selectedShiftDetails = [
  {
    shiftName: "10",
    dropwDownOptions: [100, 200, 300],
    // inputDetails: { value: 300, shiftName: "10", isOcbr: false },
  },
  {
    shiftName: "12",
    dropwDownOptions: [500, 600, 700],
    inputDetails: { value: 700, shiftName: "12", isOcbr: false },
  },
  {
    shiftName: "12",
    dropwDownOptions: [500, 600, 700],
    inputDetails: { value: 700, shiftName: "12", isOcbr: false },
  },
  {
    shiftName: "12",
    dropwDownOptions: [500, 600, 700],
    inputDetails: { value: 700, shiftName: "12", isOcbr: false },
  }
];
const disciplineArray = ["RN,ICU", "DOC,BURN","PED,CHILD"];

const arr = disciplineArray.map((skillSet) => {
  return {
    skillSet: skillSet,
    shiftDetails: selectedShiftDetails,
  };
});

interface FieldValues {
  value: string;
}

const FieldsWrapper = () => {


  const {  setValue } = useFormContext();


  const {
    fields:skillsetArray,
  } = useFieldArray({
    name: "billRates",
  });

  React.useEffect(() => {
    setValue("billRates", arr);
  }, []);

  return (
    <div>
      {skillsetArray.map((skillSetItemDetails, index) => (
        <div key={Math.random().toString()}>
          <FieldWrapperTwo
            type={`billRates`}
            rowIndex={index}
            skillSetItemDetails={skillSetItemDetails}
          />
        </div>
      ))}
    </div>
  );
};
export default FieldsWrapper;
