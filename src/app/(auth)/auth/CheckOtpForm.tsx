import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { checkOtpSchema } from "@/validators/auth";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="rounded-lg p-5 shadow-md max-w-[400px] w-full flex flex-col gap-y-5"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      <div className="flex flex-col gap-y-2">
        <label className={cn(errors.code && "text-danger")} htmlFor="code">
          کد تایید:
        </label>
        <input
          type="text"
          id="code"
          {...register("code")}
          className={cn(
            "outline-none border p-2 rounded-lg h-12 placeholder:text-sm",
            {
              "border-danger": errors.code,
              "border-gray-400": !errors.code,
            }
          )}
          placeholder="کد ۶ رقمی ارسال‌شده را وارد کنید"
        />
        {errors.code && (
          <span className="text-sm text-danger">{errors.code.message}</span>
        )}
      </div>
      <button type="submit" className="bg-primary h-12 rounded-lg text-white">
        {isSubmitting ? "درحال بررسی..." : "ورود"}
      </button>
    </form>
  );
}
