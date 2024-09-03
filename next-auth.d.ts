import { User as PrismaUser } from "@prisma/client";
import { DefaultSession, DefaultUser, ISODateString } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      role: string;
    } & DefaultSession["user"];
    expires: ISODateString;
  }

  interface User {
    id: number;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;
    role: string;
  }
}
