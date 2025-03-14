"use server";

import prisma from "@/lib/db";
import { createUser } from "@/lib/user";
import { registerSchema } from "@/validators/auth";
import { redirect } from "next/navigation";
import { FieldPath, Message } from "react-hook-form";
import { z } from "zod";

type PrevState = {
  validationErrors?: {
    name: FieldPath<z.infer<typeof registerSchema>>;
    message: Message;
  }[];
  dbError?: { statusCode: number; message: string };
};

export async function registerUserAction(
  prevState: PrevState,
  formData: FormData,
): Promise<PrevState> {
  const parsedUser = registerSchema.safeParse(Object.fromEntries(formData));
  // if has an error
  if (!parsedUser.success) {
    return {
      validationErrors: Object.entries(
        parsedUser.error.formErrors.fieldErrors,
      ).map((value) => ({
        name: value[0] as FieldPath<z.infer<typeof registerSchema>>,
        message: value[1][0],
      })),
    };
  }
  // if success user information data
  const result = await createUser(parsedUser.data);

  if (result.error) {
    return { dbError: result.error };
  }

  redirect("/");
}
