import authOptions from "@/app/api/auth/[...nextauth]/options";
import UserIcon from "@/assets/icons/websima/user.svg";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function TopBar() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });

  if (!user) {
    redirect("/auth");
  }

  return (
    <nav className="bg-background flex w-full flex-wrap justify-between gap-4 rounded-2xl p-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2.5">
        <span className="bg-primary-light1 flex items-center justify-center rounded-lg p-2">
          <UserIcon className="fill-primary size-6" />
        </span>
        <span className="mr-2.5">
          {!user.firstname || !user.lastname
            ? user.phone
            : `${user.firstname} ${user.lastname}`}
        </span>
        <span className="bg-primary block h-9 w-px"></span>
        <span className="text-muted-foreground text-sm">
          {user.role === "ADMIN" ? "مدیر" : "مشتری"}
        </span>
      </div>
      <div className="flex w-fit items-center overflow-hidden rounded-lg">
        <span className="bg-primary-light1 px-2.5 py-1.5">۱۷ فروردین ۱۴۰۴</span>
        <span className="bg-primary text-background px-1.5 py-2">امروز</span>
      </div>
    </nav>
  );
}
