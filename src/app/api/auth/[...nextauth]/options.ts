import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { checkOtpSchema } from "@/validators/auth";

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth", error: "/auth" },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone",
          placeholder: "enter Phone Number...",
          type: "text",
        },
        code: {
          label: "Code",
          placeholder: "enter code...",
          type: "text",
        },
      },
      async authorize(credentials) {
        const isValidCredentials = checkOtpSchema.safeParse({ ...credentials });

        if (!isValidCredentials.success) {
          throw new Error(
            encodeURIComponent(isValidCredentials.error.errors[0].message)
          );
        }

        const { phone, code } = isValidCredentials.data;

        const otp = await prisma.otp.findFirst({
          where: {
            phone,
            code,
            expires_at: { gt: new Date() },
            is_used: false,
          },
        });

        if (!otp) {
          throw new Error(encodeURIComponent("کد ارسالی منقضی شده است!"));
        }

        await prisma.otp.update({
          where: { id: otp.id },
          data: { is_used: true },
        });

        const user = await prisma.user.upsert({
          where: { phone },
          update: {},
          create: { phone },
        });

        return user;
      },
    }),
  ],
  callbacks: {
    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },

    jwt({ token, user }) {
      if (user) {
        token.id = +user.id;
        token.role = user.role;
      }
      return token;
    },
  },
};

export default authOptions;
