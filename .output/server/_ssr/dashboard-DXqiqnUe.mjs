import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Check, p as LogOut } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DXqiqnUe.js
var import_jsx_runtime = require_jsx_runtime();
var PLANS = [
	{
		name: "bronze",
		price: "R$ 25",
		cycle: "/mês",
		desc: "Para consultores que querem começar hoje.",
		features: [
			"Simulações ilimitadas",
			"Geração de PDF",
			"Suporte por e-mail",
			"Atualizações contínuas"
		],
		users: "Até 3 usuários"
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
			"Atualizações contínuas"
		],
		users: "Até 7 usuários"
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
			"Atualizações contínuas"
		],
		users: "Até 10 usuários",
		highlight: true
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
			"Atualizações contínuas"
		],
		users: "Usuários ilimitados"
	}
];
/**
* Área logada — exibe os planos disponíveis (bronze, silver, gold, platinum)
* para o usuário escolher/contratar.
*/
function DashboardPage() {
	const router = useRouter();
	async function handleLogout() {
		await fetch("/api/auth/logout", { method: "POST" });
		await router.invalidate();
		router.navigate({ to: "/" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background px-4 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-2xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
						children: "Escolha o plano ideal para você."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: "Cancele quando quiser. Sem taxa de setup. Sem letras miúdas."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: PLANS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated ${p.highlight ? "border-royal bg-surface-elevated ring-1 ring-royal" : "border-border bg-surface-elevated"}`,
						children: [
							p.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-navy px-3 py-1 text-xs font-semibold text-primary-foreground",
								children: "Mais popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold uppercase tracking-wider opacity-80",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-baseline gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl font-bold tracking-tight",
										children: p.price
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm opacity-70",
										children: p.cycle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: p.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-xs font-semibold text-royal",
									children: p.users
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 space-y-3",
								children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-royal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated",
									children: "Comprar Agora"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex items-center justify-center text-xs text-muted-foreground hover:text-royal",
									children: "Solicitar Demonstração"
								})]
							})
						]
					}, p.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: handleLogout,
						className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-royal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Sair"]
					})
				})
			]
		})
	});
}
//#endregion
export { DashboardPage as component };
