"use client";
import React, { useId } from "react";
import { FormValues, schemaCareers } from "@/lib/validations";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { cn } from "@/lib/utils";
type Props = {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  name: keyof FormValues;
  type?: string;
  label?: string;
};

const InputForm = ({ register, errors, name, type = "text", label }: Props) => {
  const inputID = useId();
  return (
    <div>
      <label
        htmlFor={inputID}
        className="block text-left font-light uppercase text-[#41484d] "
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={inputID}
          type={type}
          {...register(name)}
          className={cn(
            `mb-1 block w-full rounded-md border-gray-300 px-3 py-3
                  shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D90FE] focus-visible:ring-offset-2
                 sm:text-sm`,
            errors.firstName && " ring-2 ring-red-500",
          )}
        />

        {errors[name] && (
          <p className="mx-2 text-left text-xs text-red-500">
            {errors[name]!.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputForm;
