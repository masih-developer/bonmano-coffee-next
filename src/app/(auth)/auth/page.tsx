"use client";

import { use, useState } from "react";

import CheckOtpForm from "./CheckOtpForm";
import SendOtpForm from "./SendOtpForm";

type SearchParams = Promise<Record<"callbackUrl" | "error", string>>;

export default function AuthPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = use(searchParams);
  const [step, setStep] = useState(1);

  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {step === 1 ? (
        <SendOtpForm setStep={setStep} />
      ) : (
        <CheckOtpForm callbackUrl={sp.callbackUrl} error={sp.error} />
      )}
    </main>
  );
}
