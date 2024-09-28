import AuthForm from "./AuthForm";

interface LoginPageProps {
  params?: string;
  searchParams?: Record<"callbackUrl" | "error", string>;
}

export default function AuthPage({ searchParams }: LoginPageProps) {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <AuthForm
        callbackUrl={searchParams?.callbackUrl || "/"}
        error={searchParams?.error || ""}
      />
    </main>
  );
}
