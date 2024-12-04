"use client";

import { TextInputProps, TextInput, Label, CustomFlowbiteTheme } from "flowbite-react";
import { Controller, Control, useFormState } from "react-hook-form"; 

interface ITextInputControllerProps {
  controllerProps: { name: string };
  control?: Control<any> | undefined;
  inputProps: TextInputProps;
  label: string;
}

const inputTheme: CustomFlowbiteTheme["textInput"] = { 
  field: {
    base: "relative w-full",
    input: {
      base: "block w-full overflow-hidden rounded-lg border-slate-300 disabled:cursor-not-allowed disabled:opacity-50",
      sizes: {
        sm: "sm:text-xs",
        md: "text-sm",
        lg: "sm:text-base",
      },
      colors: {
        gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
        failure:
          "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
        warning:
          "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
        success:
          "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500",
      },
    },
  },
};

export function TextInputController(props: ITextInputControllerProps) {
  const { controllerProps, control, inputProps, label } = props;
  const { errors } = useFormState();

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={inputProps.id} value={label} />
      </div>
      <Controller
        {...controllerProps}
        control={control}
        render={({ field }) => {
          return (
            <TextInput
              theme={inputTheme}
              {...field}
              {...props.inputProps}
              color={
                errors[controllerProps.name] && errors[controllerProps.name]
                  ? "failure"
                  : ""
              }
              helperText={
                errors[controllerProps.name] &&
                (errors[controllerProps.name]?.message as string)
              }
            />
          );
        }}
      />
    </div>
  );
}
