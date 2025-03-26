import type { AuthOptions } from "next-auth";

import prisma from "@/lib/prisma";
import { checkOtpSchema } from "@/validators/auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth", error: "/auth" },
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone",
          placeholder: "Enter Phone Number...",
          type: "text",
        },
        code: { label: "Code", placeholder: "Enter Code...", type: "text" },
      },
      async authorize(credentials) {
        // Validate credentials
        const parsed = checkOtpSchema.safeParse(credentials);
        if (!parsed.success) {
          throw new Error(encodeURIComponent(parsed.error.errors[0].message));
        }

        const { phone, code } = parsed.data;

        // Find valid OTP
        const otp = await prisma.otp.findFirst({
          where: {
            phone,
            code,
            expires_at: { gt: new Date() },
            is_used: false,
          },
        });

        if (!otp) {
          throw new Error(encodeURIComponent("OTP has expired!"));
        }

        // Update OTP status and upsert user
        const [, user] = await prisma.$transaction([
          prisma.otp.update({
            where: { id: otp.id },
            data: { is_used: true },
          }),
          prisma.user.upsert({
            where: { phone },
            update: {},
            create: { phone },
          }),
        ]);

        return { id: user.id, role: user.role };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (user) {
        token.id = +user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      session.user = { id: token.id, role: token.role };
      return session;
    },
  },
};

export default authOptions;
