import {
  createFileRoute,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import { Check, LogOut } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  // Área logada: só quem tem sessão vê os planos. Sem sessão → login.
  beforeLoad: ({ context }) => {
    if (!context.user) {
      throw redirect({ to: "/login" });
    }
  },
  component: DashboardPage,
});

type Plan = {
  name: string;
  price: string;
  cycle: string;
  desc: string;
  features: string[];
  users: string;
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "bronze",
    price: "R$ 25",
    cycle: "/mês",
    desc: "Para consultores que querem começar hoje.",
    features: [
      "Simulações ilimitadas",
      "Geração de PDF",
      "Suporte por e-mail",
      "Atualizações contínuas",
    ],
    users: "Até 3 usuários",
  },
  {
    name: "silver",
    price: "R$ 49",
    cycle: "/mês",
    desc: "Para equipes em crescimento.",
    features: [
      "Simulações ilimitadas",
      "Geração de PDF",
      "Suporte por e-mail",
      "Atualizações contínuas",
    ],
    users: "Até 7 usuários",
  },
  {
    name: "gold",
    price: "R$ 99",
    cycle: "/mês",
    desc: "Para escritórios consolidados.",
    features: [
      "Simulações ilimitadas",
      "Geração de PDF",
      "Suporte por e-mail",
      "Atualizações contínuas",
    ],
    users: "Até 10 usuários",
    highlight: true,
  },
  {
    name: "platinum",
    price: "R$ 199",
    cycle: "/mês",
    desc: "Para operações sem limites.",
    features: [
      "Simulações ilimitadas",
      "Geração de PDF",
      "Suporte por e-mail",
      "Atualizações contínuas",
    ],
    users: "Usuários ilimitados",
  },
];

/**
 * Área logada — exibe os planos disponíveis (bronze, silver, gold, platinum)
 * para o usuário escolher/contratar.
 */
function DashboardPage() {
  const router = useRouter();

  async function handleLogout() {
    // Encerra a sessão (limpa o Cookie HTTPOnly) e volta para a home,
    // onde a navbar volta a mostrar "Entrar / Cadastrar".
    await fetch("/api/auth/logout", { method: "POST" });
    await router.invalidate();
    router.navigate({ to: "/" });
  }

  return (
    <div className="min-h-screen bg-background px-4 py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Escolha o plano ideal para você.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Cancele quando quiser. Sem taxa de setup. Sem letras miúdas.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated ${
                p.highlight
                  ? "border-royal bg-surface-elevated ring-1 ring-royal"
                  : "border-border bg-surface-elevated"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Mais popular
                </div>
              )}
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider opacity-80">
                  {p.name}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-sm opacity-70">{p.cycle}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-2 text-xs font-semibold text-royal">
                  {p.users}
                </div>
              </div>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-royal" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated"
                >
                  Comprar Agora
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center text-xs text-muted-foreground hover:text-royal"
                >
                  Solicitar Demonstração
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-royal"
          >
            <LogOut className="h-4 w-4" />
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}
