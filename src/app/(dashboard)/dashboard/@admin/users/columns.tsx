"use client";

import type { User } from "@prisma/client";
import type { CellContext, ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

interface UserEntity extends Omit<User, "createdAt" | "id" | "updatedAt"> {}

const defaultCell =
  (key: keyof UserEntity) => (props: CellContext<UserEntity, unknown>) =>
    props.row.getValue(key) ?? "-";

export const columns: ColumnDef<UserEntity>[] = [
  {
    accessorKey: "firstname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          نام
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: defaultCell("firstname"),
  },
  {
    accessorKey: "lastname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          نام خانوادگی
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: defaultCell("lastname"),
  },
  {
    accessorKey: "username",
    header: "نام کاربری",
    cell: defaultCell("username"),
  },
  {
    accessorKey: "email",
    header: "ایمیل",
    cell: defaultCell("email"),
  },
  {
    accessorKey: "phone",
    header: "تلفن همراه",
    cell: defaultCell("phone"),
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          نقش
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: defaultCell("role"),
  },
  {
    accessorKey: "actions",
    header: "عملیات",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0" variant="ghost">
              <span className="sr-only">باز کردن منو</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>حذف کاربر</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>مسدود کردن کاربر</DropdownMenuItem>
            <DropdownMenuItem>ترفیع کاربر</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              عذل کاربر
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
