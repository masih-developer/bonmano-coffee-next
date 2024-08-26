"use client";

import { useSession } from "next-auth/react";

export default function AboutPage() {
  const { data: session } = useSession();
  console.log(session);
  return <div>AboutPage</div>;
}
