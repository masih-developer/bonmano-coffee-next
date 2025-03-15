"use client";

import { useState } from "react";

import CheckOtpForm from "./CheckOtpForm";
import SendOtpForm from "./SendOtpForm";

interface LoginPageProps {
  params?: string;
  searchParams?: Record<"callbackUrl" | "error", string>;
}

export default function AuthPage({ searchParams }: LoginPageProps) {
  const [step, setStep] = useState(1);
  return (
    <main className="flex min-h-screen w-full items-center justify-center">
      {step === 1 ? (
        <SendOtpForm setStep={setStep} />
      ) : (
        <CheckOtpForm
          callbackUrl={searchParams?.callbackUrl ?? "/"}
          error={searchParams?.error ?? ""}
        />
      )}
    </main>
  );
}
