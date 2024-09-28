"use client";

import { cn } from "@/lib/utils";
import { loginSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

interface AuthFormProps {
  callbackUrl: string;
  error: string;
}

export default function AuthForm({ callbackUrl, error }: AuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginSchema>>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(loginSchema),
  });

  const submitFormHandler = async (values: z.infer<typeof loginSchema>) => {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      callbackUrl,
    });
  };

  return (
    <form
      className="rounded-lg p-5 shadow-md max-w-[400px] w-full flex flex-col gap-y-5"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      {!!error && <p className="text-danger">{error}</p>}
      <div className="flex flex-col gap-y-2">
        <label className={cn(errors.email && "text-danger")} htmlFor="email">
          ایمیل:
        </label>
        <input
          type="text"
          id="email"
          {...register("email")}
          className={cn(
            "outline-none border p-2 rounded-lg h-12 placeholder:text-smsm",
            {
              "border-danger": errors.email,
              "border-gray-400": !errors.email,
            }
          )}
          placeholder="example@example.com"
        />
        {errors.email && (
          <span className="text-sm text-danger">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-y-2">
        <label
          className={cn(errors.password && "text-danger")}
          htmlFor="password"
        >
          رمز عبور:
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          className={cn(
            "outline-none border p-2 rounded-lg h-12 placeholder:text-sm",
            {
              "border-danger": errors.password,
              "border-gray-400": !errors.password,
            }
          )}
          placeholder="رمز عبور"
        />
        {errors.password && (
          <span className="text-sm text-danger">{errors.password.message}</span>
        )}
      </div>
      <button type="submit" className="bg-primary h-12 rounded-lg text-white">
        {isSubmitting ? "در حال ورود..." : "ورود"}
      </button>
    </form>
  );
}
