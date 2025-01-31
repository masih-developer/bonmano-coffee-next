"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { authSchema } from "@/validators/auth";

interface AuthFormProps {
  // callbackUrl: string;
  // error: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function SendOtpForm({ setStep }: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof authSchema>>({
    defaultValues: { phone: "" },
    resolver: zodResolver(authSchema),
  });

  const submitFormHandler = async (values: z.infer<typeof authSchema>) => {
    // await signIn("credentials", {
    //   phone: values.phone,
    //   callbackUrl,
    // });
    const res = await fetch("/api/auth/sendOtp");
    const data = await res.json();
    console.log(data);
  };

  return (
    <form
      className="rounded-lg p-5 shadow-md max-w-[400px] w-full flex flex-col gap-y-5"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      {/* {!!error && <p className="text-danger">{error}</p>}l */}
      <div className="flex flex-col gap-y-2">
        <label className={cn(errors.phone && "text-danger")} htmlFor="phone">
          شماره تلفن همراه:
        </label>
        <input
          type="text"
          id="password"
          {...register("phone")}
          className={cn(
            "outline-none border p-2 rounded-lg h-12 placeholder:text-sm",
            {
              "border-danger": errors.phone,
              "border-gray-400": !errors.phone,
            }
          )}
          placeholder="09XXXXXXXXX"
        />
        {errors.phone && (
          <span className="text-sm text-danger">{errors.phone.message}</span>
        )}
      </div>
      <button type="submit" className="bg-primary h-12 rounded-lg text-white">
        {isSubmitting ? "ارسال کد.." : "ارسال کد"}
      </button>
    </form>
  );
}
