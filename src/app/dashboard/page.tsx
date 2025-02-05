"use client";
import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data, status } = useSession();

  if (status === "authenticated") {
    console.log(data.user);
  }
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
