"use client";

import { useState } from "react";

import CheckOtpForm from "./CheckOtpForm";
import SendOtpForm from "./SendOtpForm";

// interface FormWrapperProps {
//   searchParams: Record<"callbackUrl" | "error", string>;
// }

function FormWrapper() {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");

  return step === 1 ? (
    <SendOtpForm setStep={setStep} setPhone={setPhone} />
  ) : (
    <CheckOtpForm phone={phone} />
  );
}
export default FormWrapper;
