import type { z } from "zod";

import { cn } from "@/lib/utils";
import { checkOtpSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

interface CheckOtpFormProps {
  callbackUrl: string;
  error: string;
}

export default function CheckOtpForm({
  callbackUrl,
  error,
}: CheckOtpFormProps) {
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof checkOtpSchema>>({
    defaultValues: { code: "", phone: "09397900270" },
    resolver: zodResolver(checkOtpSchema),
  });

  const submitFormHandler = async (values: z.infer<typeof checkOtpSchema>) => {
    try {
      await signIn("credentials", {
        phone: values.phone,
        code: values.code,
        callbackUrl,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      className="flex w-full max-w-[400px] flex-col gap-y-5 rounded-lg p-5 shadow-md"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      <div className="flex flex-col gap-y-2">
        <label className={cn(errors.code && "text-danger")} htmlFor="code">
          کد تایید:
        </label>
        <input
          id="code"
          type="text"
          {...register("code")}
          placeholder="کد ۶ رقمی ارسال‌شده را وارد کنید"
          className={cn(
            "h-12 rounded-lg border p-2 outline-hidden placeholder:text-sm",
            {
              "border-danger": errors.code,
              "border-gray-400": !errors.code,
            },
          )}
        />
        {errors.code && (
          <span className="text-danger text-sm">{errors.code.message}</span>
        )}
      </div>
      <button className="bg-primary h-12 rounded-lg text-white" type="submit">
        {isSubmitting ? "درحال بررسی..." : "ورود"}
      </button>
    </form>
  );
}
