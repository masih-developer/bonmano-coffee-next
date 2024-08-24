import { z } from "zod";
import ErrMsg from "./utils";

export const registerSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, ErrMsg.required("نام"))
    .max(50, ErrMsg.max("نام", 50)),
  last_name: z
    .string()
    .trim()
    .min(1, ErrMsg.required("فامیلی"))
    .max(50, ErrMsg.max("فامیلی", 50)),
  username: z
    .string()
    .min(4, ErrMsg.min("نام کاربری", 4))
    .max(30, ErrMsg.max("نام کاربری", 30))
    .regex(/^[a-z]/, ErrMsg.startWith("نام کاربری", "حروف کوچک انگلیسی"))
    .regex(
      /^[a-z][a-z0-9_-]*$/,
      "نام کاربری باید شامل حروف کوچک انگلیسی، اعداد، _ و - باشد."
    )
    .regex(/^(?!.*\s).+$/, "نام کاربری نباید شامل فضای خالی باشد."),

  email: z.string().trim().email(ErrMsg.incorrect("ایمیل")),
  password: z
    .string()
    .trim()
    .min(1, ErrMsg.required("رمز عبور"))
    .min(8, ErrMsg.min("رمز عبور", 8))
    .max(30, ErrMsg.max("رمز عبور", 30)),
  phone: z
    .string()
    .trim()
    .min(1, ErrMsg.required("شماره تلفن همراه"))
    .regex(/^09\d{9}$/, "شماره تلفن همراه باید با 09 شروع شود و 11 رقم باشد."),
});
