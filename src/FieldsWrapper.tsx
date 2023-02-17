import React from "react";
import { useFieldArray, useFormContext, useController } from "react-hook-form";
import { FieldComponent } from "./FieldComponent";
import { FieldWrapperTwo } from "./FieldWrapperTwo";

const defaultValues = [
  {
    value: "field 1",
    shiftArr: [
      { newVal: "10", shift: "s10" },
      { newVal: "10", shift: "s20" },
      { newVal: "10", shift: "s30" },
    ],
  },
  {
    value: "field 2",
    shiftArr: [
      { newVal: "20", shift: "s10" },
      { newVal: "20", shift: "s20" },
      { newVal: "20", shift: "s30" },
    ],
  },
  {
    value: "field 3",
    shiftArr: [
      { newVal: "30", shift: "s10" },
      { newVal: "30", shift: "s20" },
      { newVal: "30", shift: "s30" },
    ],
  },
];
// const shiftSelected = ["10","12"]
const selectedShiftDetails = [
  {
    shiftName: "10",
    dropwDownOptions: [100, 200, 300],
    inputDetails: { value: 300, shiftName: "10", isOcbr: false },
  },
  {
    shiftName: "12",
    dropwDownOptions: [500, 600, 700],
    inputDetails: { value: 700, shiftName: "12", isOcbr: false },
  },
];
const disciplineArray = ["RN,ICU", "DOC,BURN"];

const arr = disciplineArray.map((skillSet) => {
  return {
    skillSet: skillSet,
    shiftDetails: selectedShiftDetails,
  };
});
console.log("🚀 ~ file: FieldsWrapper.tsx:23 ~ arr ~ arr", arr);

interface FieldValues {
  value: string;
}

const FieldsWrapper = () => {
  const { control, reset, setValue } = useFormContext();
  // const control = useController({
  //     defaultValue: {
  //         fields: defaultValues
  //     },
  //     name: "fields"
  // })
  const {
    fields,
    append,
    remove: removeField,
    replace,
  } = useFieldArray({
    control,
    name: "fields",
  });

  React.useEffect(() => {
    setValue("fields", arr);
    // replace(defaultValues)
  }, []);
  return (
    <div>
      {fields.map((skillSetItemDetails, index) => (
        // <FieldComponent type={`fields`} index={index} field={field}/>
        <div key={Math.random().toString()}>
          <FieldWrapperTwo
            type={`fields`}
            rowIndex={index}
            skillSetItemDetails={skillSetItemDetails}
          />
        </div>
      ))}
    </div>
  );
};
export default FieldsWrapper;
