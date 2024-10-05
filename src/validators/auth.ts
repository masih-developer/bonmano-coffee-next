import { z } from "zod";
import ErrMsg from "./utils";

export const authSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(1, ErrMsg.required("شماره تلفن همراه"))
    .regex(/^09\d{9}$/, "شماره تلفن همراه باید با 09 شروع شود و 11 رقم باشد."),
});
