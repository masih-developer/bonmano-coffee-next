"use client";
import { signOut } from "next-auth/react";
import authOptions from "../api/auth/[...nextauth]/options";

export default function DashboardPage() {
  return (
    <main>
      <h1>hello world!</h1>
      <button
        onClick={async () => {
          await signOut({ redirect: true });
        }}
      >
        LogOut
      </button>
    </main>
  );
}
