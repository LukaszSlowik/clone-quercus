"use client";
import SectionWrapper from "@/app/components/section-wrapper";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import MyPresentationPopup from "@/app/components/my-popup/my-presentation-popup";
import { FormValues, schemaCareers } from "@/lib/validations";
import InputForm from "@/app/components/ui/input-form";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
type Props = {};

const CareersForm = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(schemaCareers),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: FormValues) => {
    console.log(data);
    setOpen(true);
  };

  return (
    <div id="form" className="scroll-m-20 bg-[#dbe7ee]">
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <SectionWrapper>
        <form onSubmit={handleSubmit(onSubmit)} className="py-14">
          {errors.phone?.message}
          <div className="grid grid-cols-1 gap-4  sm:grid-cols-2">
            <InputForm
              register={register}
              errors={errors}
              name="firstName"
              label="First Name"
            />
            <InputForm
              register={register}
              errors={errors}
              name="lastName"
              label="Last Name"
            />
            <InputForm
              register={register}
              errors={errors}
              name="email"
              type="email"
              label="Email"
            />
            <div>
              <label>
                <span className="block text-left font-light uppercase text-[#41484d] ">
                  Phone Number
                </span>
              </label>
              <div className="mt-1">
                <Controller
                  control={control}
                  name="phone"
                  render={({ field: { ref, ...field } }) => (
                    <PhoneInput
                      placeholder="Enter phone number"
                      {...field}
                      inputProps={{
                        ref,
                        required: true,
                      }}
                      country="pl"
                      enableSearch={true}
                      disableSearchIcon={true}
                      buttonClass="text-black flex text-left "
                      inputClass="PhoneInput"
                      inputStyle={{
                        height: "2.8rem",
                        width: "100%",
                      }}
                    />
                  )}
                />
                {errors.phone && (
                  <p className="mx-2 pt-1 text-left text-xs text-red-500">
                    {errors.phone!.message}
                  </p>
                )}
              </div>
            </div>

            <InputForm
              register={register}
              errors={errors}
              name="password"
              type="password"
              label="Password"
            />
            <InputForm
              register={register}
              errors={errors}
              name="confirmPassword"
              type="password"
              label="Confirm Password"
            />
          </div>
          <div className="mt-5 flex items-center gap-2 border">
            <div className="mt-1 ">
              <input type="checkbox" id="privacy" {...register("privacy")} />
            </div>
            <label
              htmlFor="privacy"
              className=" border text-left text-sm  font-light "
            >
              By clicking the "Register" button, you agree to the terms of our
              <span className=" text-q-orange cursor-pointer font-normal hover:brightness-75">
                {` `}Privacy Policy
              </span>{" "}
              *
            </label>
          </div>
          <button className=" bg-q-orange mt-10 w-fit rounded-2xl px-6 py-4  uppercase text-white hover:shadow-2xl hover:brightness-75">
            Register
          </button>
        </form>
      </SectionWrapper>
    </div>
  );
};

export default CareersForm;
