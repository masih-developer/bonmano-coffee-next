import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import { compare } from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/auth/login", error: "/auth/login" },
  adapter: PrismaAdapter(prisma),
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
          id: isExistUser.id.toString(),
          name: `${isExistUser.first_name} ${isExistUser.last_name}`,
          username: isExistUser.username,
          email: isExistUser.email,
        };
      },
    }),
  ],
};

export default authOptions;
