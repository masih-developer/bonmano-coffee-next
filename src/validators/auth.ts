import { z } from "zod";
import ErrMsg from "./utils";

export const sendOtpSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(1, ErrMsg.required("شماره تلفن همراه"))
    .regex(/^09\d{9}$/, "شماره تلفن همراه باید با 09 شروع شود و 11 رقم باشد."),
});

export const checkOtpSchema = z.object({
  phone: sendOtpSchema.shape.phone,
  code: z.string().regex(/^\d{6}$/, "کد ارسالی می بایست 6 رقم باشد."),
});
