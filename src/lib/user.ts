import { registerSchema } from "@/validators/auth";
import { Prisma } from "@prisma/client";
import { z } from "zod";
import prisma from "./db";

export async function createUser(user: Prisma.UserCreateInput): Promise<{
  error?: { statusCode: number; message: string };
  user?: Prisma.UserCreateInput;
}> {
  const isExistUser = await prisma.user.findFirst({
    where: {
      OR: [
        { username: user.username },
        { email: user.email },
        { phone: user.phone },
      ],
    },
  });
  if (isExistUser) {
    return {
      error: {
        statusCode: 409,
        message: "این ایمیل، نام کاربری و یا شماره تلفن قبلا ثبت نام کرده است.",
      },
    };
  }
  const res = await prisma.user.create({ data: user });

  return { user: res };
}
