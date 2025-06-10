import prisma from "@/lib/prisma";

import { columns } from "./columns";
import { DataTable } from "./data-table";

async function UsersPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string | undefined; row: string | undefined }>;
}) {
  const { page, row } = await searchParams;

  const getUsersCount = await prisma.user.count();
  const users = await prisma.user.findMany();

  return (
    <div>
      <DataTable data={users} columns={columns} pageCount={getUsersCount} />
    </div>
  );
}
export default UsersPage;
