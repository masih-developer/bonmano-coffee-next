import LoginForm from "./LoginForm";

interface LoginPageProps {
  params?: string;
  searchParams?: Record<"callbackUrl" | "error", string>;
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      <LoginForm
        callbackUrl={searchParams?.callbackUrl || "/"}
        error={searchParams?.error || ""}
      />
      .
    </main>
  );
}
