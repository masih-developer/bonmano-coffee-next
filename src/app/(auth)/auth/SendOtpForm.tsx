"use client";

import type { z } from "zod";

import { cn } from "@/lib/utils";
import { sendOtpSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface AuthFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function SendOtpForm({ setStep }: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof sendOtpSchema>>({
    defaultValues: { phone: "" },
    resolver: zodResolver(sendOtpSchema),
  });

  const submitFormHandler = async (values: z.infer<typeof sendOtpSchema>) => {
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values.phone),
      });
      const data = await res.json();
      console.log(data);
      setStep(2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex w-full max-w-[400px] flex-col gap-y-5 rounded-lg p-5 shadow-md"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      {/* {!!error && <p className="text-danger">{error}</p>}l */}
      <div className="flex flex-col gap-y-2">
        <label className={cn(errors.phone && "text-danger")} htmlFor="phone">
          شماره تلفن همراه:
        </label>
        <input
          id="phone"
          type="text"
          {...register("phone")}
          placeholder="09XXXXXXXXX"
          className={cn(
            "h-12 rounded-lg border p-2 outline-none placeholder:text-sm",
            {
              "border-danger": errors.phone,
              "border-gray-400": !errors.phone,
            },
          )}
        />
        {errors.phone && (
          <span className="text-sm text-danger">{errors.phone.message}</span>
        )}
      </div>
      <button className="h-12 rounded-lg bg-primary text-white" type="submit">
        {isSubmitting ? "ارسال کد.." : "ارسال کد"}
      </button>
    </form>
  );
}
