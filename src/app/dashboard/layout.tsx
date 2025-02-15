import { getServerSession } from "next-auth";

export default async function DashboardLayout({
  admin,
  user,
}: {
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const session = await getServerSession();

  return session?.user.role === "USER" ? user : admin;
}
