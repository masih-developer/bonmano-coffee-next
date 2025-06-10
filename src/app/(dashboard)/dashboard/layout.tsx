import { getServerSession } from "next-auth";

import authOptions from "../../api/auth/[...nextauth]/options";

export default async function DashboardLayout({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return session?.user.role === "USER" ? user : admin;
}
