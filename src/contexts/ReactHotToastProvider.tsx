"use client";
import { Toaster } from "react-hot-toast";

export default function ReactHotToastProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
