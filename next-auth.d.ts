import { user as PrismaUser } from "@prisma/client";
import { DefaultSession, DefaultUser, ISODateString } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User;
    expires: ISODateString;
  }

  interface User extends PrismaUser {}
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    role: string;
  }
}
