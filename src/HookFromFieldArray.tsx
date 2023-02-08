import { TextField, Button } from "@mui/material";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
// import { TextField, Button } from "@material-ui/core";

interface Field {
  name: string;
  email: string;
}

export const HookFormFieldArray = () => {
  const { register, control } = useForm<{ fields: Field[] }>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields"
  });
  console.log("🚀 ~ file: HookFromFieldArray.tsx:17 ~ HookFormFieldArray ~ fields", fields)

  const initialFields = [
    { name: "", email: "" },
    { name: "", email: "" },
    { name: "", email: "" }
  ];

  return (
    <form>
      {fields.map((field, index) => (
        <div key={field.id}>
          <TextField
            label="Name"
            name={`fields[${index}].name`}
            defaultValue={field.name}
            inputRef={register}
          />
          <TextField
            label="Email"
            type="email"
            name={`fields[${index}].email`}
            defaultValue={field.email}
            inputRef={register}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={() => remove(index)}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={() => append(initialFields)}
      >
        Add fields
      </Button>
    </form>
  );
};

