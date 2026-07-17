import {
  createFileRoute,
  Link,
  redirect,
  useRouteContext,
  useRouter,
} from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  ArrowRight,
  Play,
  TrendingUp,
  Building2,
  PiggyBank,
  Sparkles,
  ShieldCheck,
  Zap,
  FileText,
  Gauge,
  LineChart,
  Layers,
  Clock,
  Users,
  BadgeCheck,
  Star,
  Check,
  ChevronDown,
  Briefcase,
  UserRound,
  HandCoins,
  Building,
  Wallet,
  Presentation,
  MousePointerClick,
  Instagram,
  MessageCircle,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import devicesMockup from "@/assets/devices-mockup.jpg";
import type { PublicUser } from "@/types/auth";

export const Route = createFileRoute("/")({
  // A home é apenas para visitantes. Quem já está logado vai direto aos planos.
  beforeLoad: ({ context }) => {
    if (context.user) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: LandingPage,
});

/* ---------- helpers ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-royal" />
      {children}
    </div>
  );
}

function PrimaryButton({
  children,
  variant = "primary",
  className = "",
  href,
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  href?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles =
    variant === "primary"
      ? "bg-navy text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.22_0.055_260/0.4)] hover:shadow-[0_18px_40px_-14px_oklch(0.45_0.2_262/0.55)] hover:-translate-y-0.5"
      : variant === "secondary"
        ? "bg-surface-elevated text-foreground border border-border hover:border-royal/40 hover:-translate-y-0.5"
        : "text-foreground hover:text-royal";
  return (
    <a href={href} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  const links = [
    { label: "Método", href: "#metodo" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Planos", href: "#planos" },
    { label: "FAQ", href: "#faq" },
  ];
  // Sessão resolvida no contexto do router (SSR + cliente), sem consultar banco.
  const { user } = useRouteContext({ from: "__root__" });
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-navy to-royal text-primary-foreground text-sm font-bold">
            3A
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Simulador <span className="text-muted-foreground font-normal">Método 3A</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <PrimaryButton variant="ghost" className="hidden sm:inline-flex" href="/login">
                Entrar
              </PrimaryButton>
              <PrimaryButton href="/cadastro" className="text-xs sm:text-sm">
                Cadastrar
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </PrimaryButton>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

/** Menu do usuário logado — substitui "Entrar / Cadastrar" quando há sessão. */
function UserMenu({ user }: { user: PublicUser }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const firstName = user.name.split(" ")[0] || user.name;

  async function handleLogout() {
    setOpen(false);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      // Recarrega a sessão do contexto e volta para a home deslogado.
      await router.invalidate();
      router.navigate({ to: "/" });
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-2 text-sm font-semibold text-foreground transition-all hover:border-royal/40"
      >
        <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-navy to-royal text-xs font-bold text-primary-foreground">
          {firstName.charAt(0).toUpperCase()}
        </span>
        <span className="hidden sm:inline">Olá, {firstName}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          {/* Camada para fechar ao clicar fora */}
          <div
            className="fixed inset-0 z-40"
            aria-hidden
            onClick={() => setOpen(false)}
          />
          <div
            role="menu"
            className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-lg"
          >
            <div className="border-b border-border/60 px-4 py-3">
              <p className="text-sm font-semibold text-foreground">{user.name}</p>
              <p className="truncate text-xs text-muted-foreground">{user.email}</p>
            </div>
            <Link
              to="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-sm text-foreground transition-colors hover:bg-surface"
            >
              <LayoutDashboard className="h-4 w-4" />
              Painel
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-destructive transition-colors hover:bg-destructive/5"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </button>
          </div>
        </>
      )}
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-glow">
      <div className="container-page relative grid gap-12 pt-16 pb-24 md:pt-24 md:pb-32 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:items-center">
        <div className="relative z-10">
          <Reveal>
            <SectionEyebrow>Plataforma para consultores de consórcio</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              O simulador mais inteligente para vender{" "}
              <span className="text-gradient">Consórcios</span> utilizando o Método 3A.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Planeje investimentos, apresente cenários reais e impressione seus clientes com
              cálculos totalmente atualizados — em uma interface pensada para conversão.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryButton href="#planos">
                Quero conhecer o Simulador
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </PrimaryButton>
              <PrimaryButton variant="secondary" href="#cta">
                Solicitar Demonstração
              </PrimaryButton>
              <PrimaryButton variant="ghost" href="#demo">
                <Play className="h-4 w-4" />
                Ver apresentação
              </PrimaryButton>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-growth" />
                Dados atualizados diariamente
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-growth" />
                +2.400 consultores ativos
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-growth" />
                4.9/5 de satisfação
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-royal/10 via-transparent to-royal/5 blur-2xl" />
          <div className="absolute -top-10 -right-6 -z-10 h-40 w-40 rounded-full bg-royal/20 blur-3xl" />
          <div className="absolute bottom-0 -left-8 -z-10 h-48 w-48 rounded-full bg-navy/15 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl border border-border shadow-elevated"
            style={{ boxShadow: "0 30px 80px -30px oklch(0.22 0.055 260 / 0.35)" }}
          >
            <img
              src={heroMockup}
              alt="Interface do Simulador Método 3A em notebook"
              width={1408}
              height={1104}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="glass-card absolute -left-4 bottom-6 hidden rounded-2xl px-4 py-3 sm:flex items-center gap-3"
          >
            <div className="grid h-9 w-9 place-items-center rounded-full bg-growth-soft text-growth">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Conversão média</div>
              <div className="text-sm font-semibold">+38% em 60 dias</div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Trust bar ---------- */

function TrustBar() {
  const items = ["Consultores", "Empresas", "Representantes", "Corretores", "Investidores"];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-page py-8">
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-border" />
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Utilizado por
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-foreground/70">
            {items.map((label, i) => (
              <div key={label} className="flex items-center gap-8">
                <span className="transition-colors hover:text-foreground">{label}</span>
                {i < items.length - 1 && (
                  <span className="hidden h-1 w-1 rounded-full bg-border md:inline-block" />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-growth opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-growth" />
            </span>
            +2.400 profissionais ativos
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Metodo 3A (editorial asymmetric) ---------- */

function Metodo() {
  return (
    <section id="metodo" className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-end">
          <div>
            <Reveal><SectionEyebrow>O Método 3A</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Três movimentos que <br className="hidden md:block" />
                <span className="text-gradient">transformam um consórcio</span> em decisão.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground lg:text-lg leading-relaxed lg:pb-2">
              Alavancagem, Aquisição e Aposentadoria não são etapas isoladas — formam um único
              caminho de raciocínio financeiro. O simulador orquestra os três em uma narrativa
              que o cliente entende em segundos.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-20 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Connecting line desktop */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d="M 42 25 C 55 25, 55 55, 68 55 C 80 55, 80 80, 90 80"
              fill="none"
              stroke="url(#g3a)"
              strokeWidth="0.25"
              strokeDasharray="1 1"
            />
            <defs>
              <linearGradient id="g3a" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.52 0.2 262)" stopOpacity="0" />
                <stop offset="50%" stopColor="oklch(0.52 0.2 262)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.62 0.14 155)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Featured — Alavancagem */}
          <Reveal className="lg:col-span-7 lg:row-span-2">
            <article className="relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-navy via-[oklch(0.24_0.06_260)] to-[oklch(0.28_0.08_262)] p-8 text-primary-foreground md:p-10">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-royal/30 blur-3xl" />
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
                <span className="font-mono">01 · A</span>
                <span className="h-px flex-1 bg-white/15" />
                <span>Fundamento</span>
              </div>
              <h3 className="mt-8 text-3xl font-semibold tracking-tight md:text-4xl">
                Alavancagem <span className="text-white/60">Financeira</span>
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
                Multiplique o poder de compra com estratégias de crédito, lances e contemplação
                — o cliente vê o efeito composto em tempo real.
              </p>
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                  ["3.2x", "poder de compra"],
                  ["47%", "menor custo efetivo"],
                  ["18m", "tempo médio"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <div className="text-2xl font-semibold tracking-tight">{k}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-white/50">{v}</div>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Aquisição */}
          <Reveal delay={0.08} className="lg:col-span-5">
            <article className="card-elevated card-elevated-hover h-full p-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="font-mono text-royal">02 · A</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                Aquisição <span className="text-muted-foreground">Patrimonial</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Planeje a construção de patrimônio real com cenários projetados e comparativos
                claros para cada perfil de cliente.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-royal">
                <Building className="h-3.5 w-3.5" />
                Imóveis · Veículos · Serviços
              </div>
            </article>
          </Reveal>

          {/* Aposentadoria */}
          <Reveal delay={0.12} className="lg:col-span-5">
            <article className="card-elevated card-elevated-hover h-full p-8">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="font-mono text-growth">03 · A</span>
                <span className="h-px flex-1 bg-border" />
                <span className="text-growth">Fecho</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                Aposentadoria <span className="text-muted-foreground">projetada</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Consórcios convertidos em renda futura previsível, com projeções sólidas e
                recomendações personalizadas.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Diferenciais (bento) ---------- */

function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-2xl">
            <Reveal><SectionEyebrow>Diferenciais</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Cada detalhe pensado <br />
                para <span className="text-gradient">fechar mais vendas.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a href="#planos" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-royal hover:gap-3 transition-all">
              Ver todos os recursos <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto_auto] lg:auto-rows-[minmax(0,1fr)]">
          {/* Big feature card */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <article className="card-elevated card-elevated-hover relative h-full overflow-hidden p-8 md:p-10">
              <div className="max-w-md">
                <div className="inline-flex items-center gap-2 rounded-full bg-royal/10 px-3 py-1 text-xs font-medium text-royal">
                  <LineChart className="h-3 w-3" /> Motor de cálculo
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                  Cálculos precisos, atualizados diariamente.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Índices, taxas e regras sincronizados em tempo real — apresente sempre a versão
                  mais confiável do cenário.
                </p>
              </div>
              {/* mini chart mock */}
              <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-royal" /> Projeção · 60 meses
                  </div>
                  <span className="font-mono text-growth">+38.2%</span>
                </div>
                <svg viewBox="0 0 300 90" className="mt-4 h-24 w-full">
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.52 0.2 262)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="oklch(0.52 0.2 262)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 70 L 40 62 L 70 66 L 110 50 L 150 54 L 190 38 L 230 30 L 270 22 L 300 12 L 300 90 L 0 90 Z"
                    fill="url(#chartFill)"
                  />
                  <path
                    d="M 0 70 L 40 62 L 70 66 L 110 50 L 150 54 L 190 38 L 230 30 L 270 22 L 300 12"
                    fill="none"
                    stroke="oklch(0.52 0.2 262)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </article>
          </Reveal>

          {/* Speed */}
          <Reveal delay={0.05} className="md:col-span-2">
            <article className="card-elevated card-elevated-hover h-full p-6">
              <div className="flex items-center justify-between">
                <Zap className="h-5 w-5 text-royal" />
                <span className="font-mono text-2xl font-semibold text-foreground">0.4s</span>
              </div>
              <h3 className="mt-8 text-base font-semibold">Resultado instantâneo</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Ajuste variáveis e veja o impacto em tempo real.
              </p>
            </article>
          </Reveal>

          {/* PDF */}
          <Reveal delay={0.1} className="md:col-span-2">
            <article className="card-elevated card-elevated-hover h-full p-6">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-royal" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-border" />
                  <div className="h-1.5 w-4/5 rounded-full bg-border" />
                  <div className="h-1.5 w-2/3 rounded-full bg-royal/40" />
                </div>
              </div>
              <h3 className="mt-6 text-base font-semibold">PDF com sua marca</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Relatórios prontos para o cliente em um clique.
              </p>
            </article>
          </Reveal>

          {/* Security wide */}
          <Reveal delay={0.05} className="md:col-span-3">
            <article className="card-elevated card-elevated-hover flex h-full items-center gap-5 p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-growth-soft text-growth">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Segurança de nível bancário</h3>
                <p className="mt-1 text-sm text-muted-foreground">Criptografia ponta a ponta e auditoria contínua.</p>
              </div>
            </article>
          </Reveal>

          {/* Method */}
          <Reveal delay={0.1} className="md:col-span-3">
            <article className="card-elevated card-elevated-hover flex h-full items-center gap-5 p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Método 3A exclusivo</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fluxo comercial testado com milhares de vendas.</p>
              </div>
            </article>
          </Reveal>

          {/* Small chips row */}
          <Reveal delay={0.05} className="md:col-span-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                [Clock, "Histórico por cliente"],
                [MousePointerClick, "Interface intuitiva"],
                [Layers, "Design premium"],
                [Users, "Escalável para times"],
              ].map(([Icon, label], i) => {
                const IconC = Icon as typeof Clock;
                return (
                  <div key={i} className="group flex items-center gap-3 rounded-2xl border border-border bg-surface-elevated px-5 py-4 transition-colors hover:border-royal/40">
                    <IconC className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-royal" />
                    <span className="text-sm font-medium">{label as string}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Como funciona (premium timeline) ---------- */

function ComoFunciona() {
  const steps = [
    { n: "01", title: "Cadastre o cliente", desc: "Adicione dados e objetivos em segundos.", side: "Perfil e metas centralizados." },
    { n: "02", title: "Escolha a modalidade", desc: "Imóvel, veículo, serviços ou investimento.", side: "Regras do produto pré-configuradas." },
    { n: "03", title: "Simule o investimento", desc: "Ajuste variáveis e visualize cenários em tempo real. Compare estratégias e encontre o ponto ideal para cada perfil.", side: "Etapa em destaque · o coração do simulador.", highlight: true },
    { n: "04", title: "Apresente os resultados", desc: "Relatório profissional com sua marca.", side: "PDF pronto para envio." },
    { n: "05", title: "Feche a venda", desc: "Assinatura e acompanhamento centralizados.", side: "Do sim ao contrato, sem atrito." },
  ];
  return (
    <section id="como-funciona" className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <Reveal><SectionEyebrow>Como funciona</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Do primeiro contato <br />
                <span className="text-gradient">ao contrato assinado.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground lg:text-lg leading-relaxed">
              Um fluxo de cinco movimentos. Cada etapa foi desenhada para reduzir fricção e
              antecipar a próxima ação — como uma boa conversa comercial.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-20">
          <span
            aria-hidden
            className="absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-[19px]"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <li className="relative grid grid-cols-[32px_1fr] gap-6 py-6 md:grid-cols-[42px_minmax(0,1.4fr)_minmax(0,1fr)] md:gap-10">
                {/* dot */}
                <div className="relative flex justify-center">
                  <span
                    className={`relative z-10 grid place-items-center rounded-full transition-all ${
                      s.highlight
                        ? "h-8 w-8 bg-navy text-primary-foreground shadow-[0_0_0_6px_oklch(0.52_0.2_262/0.12)] md:h-10 md:w-10"
                        : "h-6 w-6 border border-border bg-surface-elevated text-muted-foreground md:h-8 md:w-8"
                    }`}
                  >
                    <span className={`font-mono ${s.highlight ? "text-[10px]" : "text-[9px]"}`}>{s.n}</span>
                  </span>
                </div>

                {/* content */}
                <div className={s.highlight ? "-mt-1" : "pt-0.5"}>
                  <h3
                    className={`tracking-tight ${
                      s.highlight ? "text-2xl font-semibold md:text-3xl" : "text-lg font-semibold text-foreground/85"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`mt-2 leading-relaxed text-muted-foreground ${
                      s.highlight ? "max-w-lg text-[15px]" : "text-sm"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>

                {/* side note */}
                <div className="col-start-2 md:col-start-3 md:pt-2">
                  <div className={`flex items-start gap-2 text-xs ${s.highlight ? "text-royal font-medium" : "text-muted-foreground"}`}>
                    <span className="mt-1.5 h-px w-6 bg-current opacity-40" />
                    <span>{s.side}</span>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}


/* ---------- Demo ---------- */

function Demo() {
  return (
    <section id="demo" className="relative overflow-hidden bg-navy py-24 md:py-32 text-primary-foreground">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.52_0.2_262/0.35),transparent_60%)]" />
      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-growth" />
                Demonstração do sistema
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                A mesma experiência <br />
                <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">em todos os dispositivos.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-white/70">
                Desktop, tablet e mobile — a mesma performance, a mesma elegância, o mesmo pitch.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">
                {[["99.9%", "uptime"], ["<0.5s", "resposta"], ["24/7", "acesso"]].map(([k, v]) => (
                  <div key={v}>
                    <div className="text-xl font-semibold tracking-tight">{k}</div>
                    <div className="text-[11px] uppercase tracking-wider text-white/50">{v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-royal/20 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img
                  src={devicesMockup}
                  alt="Simulador Método 3A em notebook, tablet e celular"
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Benefícios (editorial mix) ---------- */

function Beneficios() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20 lg:items-start">
          <div className="lg:sticky lg:top-24">
            <Reveal><SectionEyebrow>Benefícios</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                O que muda <br /> <span className="text-gradient">a partir de hoje.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted-foreground">
                Um simulador não vale pelo que ele faz — vale pelo que ele muda no seu dia.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-bold tracking-tight text-gradient">+38%</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">conversão média</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Aumento reportado por consultores após 60 dias de uso.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            {[
              { icon: TrendingUp, title: "Venda mais, com menos esforço", desc: "Apresentações que geram decisão no primeiro encontro. Menos objeções, mais fechamento.", featured: true },
              { icon: Clock, title: "Recupere horas por semana", desc: "Automatize o operacional e libere tempo para o que gera receita." },
              { icon: BadgeCheck, title: "Autoridade em cada slide", desc: "Design de agência sem contratar uma." },
              { icon: ShieldCheck, title: "Zero erro de cálculo", desc: "Motor auditável, atualizado diariamente." },
              { icon: Users, title: "Organize toda a carteira", desc: "Clientes, simulações e follow-ups em um só lugar." },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <article
                  className={`group flex items-start gap-5 rounded-2xl border p-6 transition-all ${
                    b.featured
                      ? "border-royal/30 bg-gradient-to-br from-surface-elevated to-royal/[0.04] shadow-soft"
                      : "border-border bg-surface-elevated hover:border-royal/30"
                  }`}
                >
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${b.featured ? "bg-navy text-primary-foreground" : "bg-accent text-royal"}`}>
                    <b.icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-semibold ${b.featured ? "text-lg" : "text-base"}`}>{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Para quem é (asymmetric split) ---------- */

function ParaQuem() {
  const groups = [
    { title: "Consultores independentes", desc: "Profissionalize a apresentação e diferencie-se da concorrência.", tag: "solo" },
    { title: "Empresas de consórcio", desc: "Escale a operação comercial com padronização total.", tag: "escala" },
    { title: "Representantes e corretores", desc: "Uma ferramenta única para todo o time trabalhar melhor.", tag: "time" },
    { title: "Investidores", desc: "Análise de rentabilidade real com dados sustentáveis.", tag: "análise" },
  ];
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <Reveal><SectionEyebrow>Para quem é</SectionEyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Feito para quem <br /><span className="text-gradient">vive de resultado.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-muted-foreground max-w-md">
                Se a sua receita depende de fechar um consórcio, o simulador foi desenhado
                pensando em você — do primeiro pitch ao pós-venda.
              </p>
            </Reveal>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.05}>
                <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6">
                  <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-royal">
                      {g.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{g.desc}</p>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full border border-border bg-surface-elevated px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {g.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Depoimentos (featured + side) ---------- */

function Depoimentos() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal><SectionEyebrow>Depoimentos</SectionEyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Quem usa, <span className="text-gradient">indica.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated via-surface-elevated to-royal/[0.04] p-8 md:p-12">
              <div className="pointer-events-none absolute -top-8 -left-4 font-serif text-[10rem] leading-none text-royal/10 select-none">
                &ldquo;
              </div>
              <div className="relative">
                <div className="flex gap-0.5 text-growth">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 text-xl leading-relaxed tracking-tight text-foreground md:text-2xl">
                  Em dois meses meu fechamento aumentou 42%. O cliente vê o simulador e entende
                  o valor na hora — a conversa muda de patamar.
                </blockquote>
              </div>
              <figcaption className="relative mt-10 flex items-center gap-4 border-t border-border pt-6">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-navy to-royal text-sm font-semibold text-primary-foreground">
                  RM
                </div>
                <div>
                  <div className="font-semibold">Rafael Meireles</div>
                  <div className="text-sm text-muted-foreground">Consultor sênior · Curitiba</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-6">
            {[
              { name: "Camila Duarte", role: "Diretora comercial · SP", text: "Padronizamos toda a equipe. Erros de cálculo zerados e pitch muito mais forte.", initials: "CD" },
              { name: "Eduardo Prado", role: "Corretor · BH", text: "Uso o Método 3A com clientes premium. É a diferença entre ser lembrado e contratado.", initials: "EP" },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <figure className="card-elevated card-elevated-hover h-full p-6">
                  <blockquote className="text-[15px] leading-relaxed text-foreground">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-xs font-semibold text-royal">
                      {t.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold">{t.name}</div>
                      <div className="truncate text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Planos ---------- */


function Planos() {
  const plans = [
    {
      name: "bronze",
      price: "R$ 25",
      cycle: "/mês",
      desc: "Para consultores que querem começar hoje.",
      features: ["Simulações ilimitadas", "Geração de PDF", "Suporte por e-mail", "Atualizações contínuas"],
      cta: "Comprar Agora",
      variant: "secondary" as const,
      users: "Até 3 usuarios"
    },
    {
      name: "silver",
      price: "R$ 49",
      cycle: "/mês",
      desc: "Para consultores que querem começar hoje.",
      features: ["Simulações ilimitadas", "Geração de PDF", "Suporte por e-mail", "Atualizações contínuas"],
      cta: "Comprar Agora",
      variant: "secondary" as const,
      users: "Até 7 usuarios"
    },
    {
      name: "gold",
      price: "R$ 99",
      cycle: "/mês",
      desc: "Para consultores que querem começar hoje.",
      features: ["Simulações ilimitadas", "Geração de PDF", "Suporte por e-mail", "Atualizações contínuas"],
      cta: "Comprar Agora",
      variant: "secondary" as const,
      users: "Até 10 usuarios"
    },
    {
      name: "platinum",
      price: "R$ 199",
      cycle: "/mês",
      desc: "Para consultores que querem começar hoje.",
      features: ["Simulações ilimitadas", "Geração de PDF", "Suporte por e-mail", "Atualizações contínuas"],
      cta: "Comprar Agora",
      variant: "secondary" as const,
      users: "Usuarios ilimitado"
    },

  ];
  return (
    <section id="planos" className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionEyebrow>Planos</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Escolha o plano ideal para você.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-muted-foreground">
              Cancele quando quiser. Sem taxa de setup. Sem letras miúdas.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div
                className="relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 border-border bg-surface-elevated hover:-translate-y-1 hover:shadow-elevated"
              >
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider opacity-80">
                    {p.name}
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                    {p.cycle && <span className="text-sm opacity-70">{p.cycle}</span>}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {p.desc}
                  </p>
                  {p.users && (
                    <div className="mt-2 text-xs text-royal font-semibold">
                      {p.users}
                    </div>
                  )}
                </div>
                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-royal"
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-col gap-2">
                  <a
                    href="#cta"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 bg-navy text-primary-foreground hover:shadow-elevated"
                  >
                    {p.cta}
                  </a>
                  <a
                    href="#cta"
                    className="inline-flex items-center justify-center text-xs text-muted-foreground hover:text-royal"
                  >
                    Solicitar Demonstração
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function FAQ() {
  const items = [
    {
      q: "Como funciona o Simulador Método 3A?",
      a: "Você cadastra o cliente, escolhe a modalidade de consórcio, insere os parâmetros e o sistema gera cenários de Alavancagem, Aquisição Patrimonial e Aposentadoria em segundos, prontos para apresentar.",
    },
    {
      q: "Precisa instalar algo?",
      a: "Não. É 100% online e funciona no seu navegador, tanto no desktop quanto no tablet e celular.",
    },
    {
      q: "As atualizações estão inclusas?",
      a: "Sim. Índices, taxas e novas funcionalidades são atualizados automaticamente enquanto sua assinatura estiver ativa.",
    },
    {
      q: "Como funciona o suporte?",
      a: "Suporte por e-mail em todos os planos, prioritário nos planos Anual e Empresarial, com SLA dedicado no Empresarial.",
    },
    {
      q: "Como funciona a licença?",
      a: "Cada assinatura é individual por usuário. No plano Empresarial você pode adicionar múltiplos usuários com painel de gestão.",
    },
    {
      q: "Quais formas de pagamento vocês aceitam?",
      a: "Cartão de crédito, Pix e boleto para os planos Anuais. Sem taxa de setup, cancele quando quiser.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionEyebrow>FAQ</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Perguntas <span className="text-gradient">frequentes.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-muted-foreground">
              Não encontrou o que procurava?{" "}
              <a href="#cta" className="font-medium text-royal hover:underline">
                Fale com a gente.
              </a>
            </p>
          </Reveal>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={it.q} delay={i * 0.04}>
                <div className="card-elevated overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-semibold">{it.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-royal" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {it.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA Final ---------- */

function CTAFinal() {
  return (
    <section id="cta" className="pb-24 md:pb-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-navy via-[oklch(0.25_0.06_260)] to-[oklch(0.3_0.09_262)] p-10 text-primary-foreground md:p-16 lg:p-20">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-royal/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-growth/10 blur-3xl" />
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
                <Sparkles className="h-3 w-3 text-growth" />
                Comece hoje mesmo utilizando o Método 3A
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Transforme sua forma de <span className="text-gradient bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">vender Consórcios.</span>
              </h2>
              <p className="mt-5 text-white/70">
                Cálculos atualizados, cenários realistas e uma apresentação que gera decisão.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#planos"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                >
                  Quero adquirir o Simulador
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Falar com um especialista
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-navy to-royal text-primary-foreground text-sm font-bold">
                3A
              </span>
              <span className="text-sm font-semibold">Simulador Método 3A</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A plataforma inteligente para consultores, empresas e investidores que vivem de
              consórcios.
            </p>
          </div>
          <FooterCol
            title="Produto"
            links={[
              ["Método", "#metodo"],
              ["Diferenciais", "#diferenciais"],
              ["Planos", "#planos"],
              ["FAQ", "#faq"],
            ]}
          />
          <FooterCol
            title="Contato"
            links={[
              ["WhatsApp", "#"],
              ["E-mail", "#"],
              ["Suporte", "#"],
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              ["Política de Privacidade", "#"],
              ["Termos de Uso", "#"],
            ]}
          />
        </div>
        <div className="mt-12 flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Método 3A. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-elevated text-muted-foreground transition-all hover:text-royal hover:border-royal/40"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-elevated text-muted-foreground transition-all hover:text-royal hover:border-royal/40"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-foreground">{title}</div>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-muted-foreground transition-colors hover:text-royal"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Page ---------- */

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Metodo />
        <Diferenciais />
        <ComoFunciona />
        <Demo />
        <Beneficios />
        <ParaQuem />
        <Depoimentos />
        <Planos />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}
