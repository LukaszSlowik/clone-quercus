"use client";
import React from "react";
import MyPresentationPopup from "./my-popup/my-presentation-popup";

type Props = {};

const SignIn = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <MyPresentationPopup open={open} setOpen={setOpen} />
      <div className="border-q-purple hover:bg-q-purple rounded-md border px-2 py-3 hover:text-white">
        <button onClick={() => setOpen(true)}>SIGN IN</button>
      </div>
    </>
  );
};

export default SignIn;
