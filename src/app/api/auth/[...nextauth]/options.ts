import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth", error: "/auth" },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "user@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const isExistUser = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!isExistUser) {
          return null;
        }

        const passwordMatch = await compare(
          credentials.password,
          isExistUser.password
        );

        if (!passwordMatch) {
          throw new Error(
            encodeURIComponent("ایمیل یا رمز عبور وارد شده صحیح نمی باشد.")
          );
        }

        return {
          id: isExistUser.id,
          name: `${isExistUser.first_name} ${isExistUser.last_name}`,
          email: isExistUser.email,
          role: isExistUser.role,
        };
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
