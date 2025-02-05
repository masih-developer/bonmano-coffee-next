import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User;
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
