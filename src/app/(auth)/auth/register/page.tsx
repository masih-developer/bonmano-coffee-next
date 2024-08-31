"use client";
import { registerUserAction } from "@/actions/auth";
import { cn } from "@/lib/utils";
import { registerSchema } from "@/validators/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function RegisterPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<z.infer<typeof registerSchema>>({
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });
  const [formState, formAction] = useFormState(registerUserAction, {});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState?.validationErrors) {
      clearErrors();
      formState.validationErrors.forEach((err) => {
        setError(err.name, { message: err.message });
      });
    }
  }, [clearErrors, formState.validationErrors, setError]);

  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <form
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit(() => formRef?.current?.submit())}
        className="rounded-lg p-5 shadow-md max-w-[400px] w-full flex flex-col gap-y-5"
      >
        {formState.dbError && (
          <div className="bg-danger/15 p-2 text-sm rounded-md text-danger">
            <p className="relative pr-3 before:absolute before:content-[''] before:size-[5px] before:rounded-full before:bg-danger before:right-0 before:top-0 before:bottom-0 before:m-auto">
              {formState.dbError.message}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-y-2">
          <label
            className={cn(errors.first_name && "text-danger")}
            htmlFor="firstname"
          >
            نام:
          </label>
          <input
            type="text"
            id="firstname"
            {...register("first_name")}
            className={cn(
              "outline-none border p-2 rounded-lg h-12 placeholder:text-sm",
              {
                "border-danger": errors.first_name,
                "border-gray-400": !errors.first_name,
              }
            )}
            placeholder="نام"
          />
          {errors.first_name && (
            <span className="text-sm text-danger">
              {errors.first_name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            className={cn(errors.last_name && "text-danger")}
            htmlFor="lastname"
          >
            نام خانوادگی:
          </label>
          <input
            type="text"
            id="lastname"
            {...register("last_name")}
            className={cn(
              "outline-none border p-2 rounded-lg h-12 placeholder:text-sm",
              {
                "border-danger": errors.last_name,
                "border-gray-400": !errors.last_name,
              }
            )}
            placeholder="نام خانوادگی"
          />
          {errors.last_name && (
            <span className="text-sm text-danger">
              {errors.last_name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label
            className={cn(errors.username && "text-danger")}
            htmlFor="username"
          >
            نام کاربری:
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className={cn(
              "outline-none border p-2 rounded-lg h-12 placeholder:text-sm",
              {
                "border-danger": errors.username,
                "border-gray-400": !errors.username,
              }
            )}
            placeholder="نام کاربری"
          />
          {errors.username && (
            <span className="text-sm text-danger">
              {errors.username.message}
            </span>
          )}
        </div>
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
            <span className="text-sm text-danger">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className={cn(errors.phone && "text-danger")} htmlFor="phone">
            شماره تلفن:
          </label>
          <input
            type="text"
            id="phone"
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
        <button type="submit" className="bg-primary h-10 rounded-lg text-white">
          ثبت نام
        </button>
      </form>
    </main>
  );
}
