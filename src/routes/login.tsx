"use client";

import { createFileRoute, Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        setError(data.message ?? "E-mail ou senha inválidos.");
        return;
      }

      // Sucesso: atualiza a sessão no contexto e vai para a área logada.
      await router.invalidate();
      navigate({ to: "/dashboard" });
    } catch {
      setError("Não foi possível conectar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12">
      {/* Fundo com brilho, no mesmo estilo do hero */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-royal/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-navy/10 blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Voltar */}
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o início
        </Link>

        <div className="card-elevated p-8 md:p-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-navy to-royal text-sm font-bold text-primary-foreground">
              3A
            </span>
            <span className="text-sm font-semibold tracking-tight">
              Simulador{" "}
              <span className="font-normal text-muted-foreground">Método 3A</span>
            </span>
          </div>

          {/* Cabeçalho */}
          <div className="mt-8">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Acesse sua conta
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Entre para continuar simulando e fechando mais vendas.
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {/* E-mail */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                E-mail
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@empresa.com"
                  className="w-full rounded-xl border border-border bg-surface-elevated py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-royal/50 focus:ring-2 focus:ring-ring/40"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <div className="mb-1.5 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-foreground"
                >
                  Senha
                </label>
                <a
                  href="#"
                  className="text-xs font-medium text-royal hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-border bg-surface-elevated py-3 pl-11 pr-11 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-royal/50 focus:ring-2 focus:ring-ring/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Lembrar */}
            <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-border text-royal accent-[var(--royal)]"
              />
              Manter-me conectado
            </label>

            {/* Mensagem de erro */}
            {error && (
              <div
                role="alert"
                className="rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
              >
                {error}
              </div>
            )}

            {/* Botão de envio */}
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.22_0.055_260/0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_oklch(0.45_0.2_262/0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Entrando..." : "Entrar"}
              {!submitting && (
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              )}
            </button>
          </form>

          {/* Rodapé do card */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Ainda não tem uma conta?{" "}
            <a href="/#planos" className="font-medium text-royal hover:underline">
              Ver planos
            </a>
          </p>
        </div>

        {/* Selo de confiança */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-growth" />
          Conexão segura · criptografia ponta a ponta
        </div>
      </div>
    </div>
  );
}
