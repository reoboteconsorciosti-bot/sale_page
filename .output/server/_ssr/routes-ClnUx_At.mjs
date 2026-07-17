import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useRouteContext, h as Link, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Check, D as ArrowRight, E as BadgeCheck, S as ChevronDown, T as Building, _ as Instagram, a as Star, c as Play, d as MessageCircle, g as Layers, h as LayoutDashboard, i as TrendingUp, n as Users, o as Sparkles, p as LogOut, s as ShieldCheck, t as Zap, u as MousePointerClick, v as FileText, w as ChartLine, x as Clock } from "../_libs/lucide-react.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ClnUx_At.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_mockup_default = "/assets/hero-mockup-CwQgfg8F.jpg";
var devices_mockup_default = "/assets/devices-mockup-3LLGogSN.jpg";
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Reveal({ children, delay = 0, className = "" }) {
	if (useReducedMotion()) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		variants: fadeUp,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: { delay },
		children
	});
}
function SectionEyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-royal" }), children]
	});
}
function PrimaryButton({ children, variant = "primary", className = "", href, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: `group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variant === "primary" ? "bg-navy text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.22_0.055_260/0.4)] hover:shadow-[0_18px_40px_-14px_oklch(0.45_0.2_262/0.55)] hover:-translate-y-0.5" : variant === "secondary" ? "bg-surface-elevated text-foreground border border-border hover:border-royal/40 hover:-translate-y-0.5" : "text-foreground hover:text-royal"} ${className}`,
		...props,
		children
	});
}
function Nav() {
	const links = [
		{
			label: "Método",
			href: "#metodo"
		},
		{
			label: "Diferenciais",
			href: "#diferenciais"
		},
		{
			label: "Como funciona",
			href: "#como-funciona"
		},
		{
			label: "Planos",
			href: "#planos"
		},
		{
			label: "FAQ",
			href: "#faq"
		}
	];
	const { user } = useRouteContext({ from: "__root__" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-navy to-royal text-primary-foreground text-sm font-bold",
						children: "3A"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-semibold tracking-tight",
						children: ["Simulador ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground font-normal",
							children: "Método 3A"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserMenu, { user }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
						variant: "ghost",
						className: "hidden sm:inline-flex",
						href: "/login",
						children: "Entrar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
						href: "/cadastro",
						className: "text-xs sm:text-sm",
						children: ["Cadastrar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
					})] })
				})
			]
		})
	});
}
/** Menu do usuário logado — substitui "Entrar / Cadastrar" quando há sessão. */
function UserMenu({ user }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const router = useRouter();
	const firstName = user.name.split(" ")[0] || user.name;
	async function handleLogout() {
		setOpen(false);
		try {
			await fetch("/api/auth/logout", { method: "POST" });
		} finally {
			await router.invalidate();
			router.navigate({ to: "/" });
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			"aria-haspopup": "menu",
			"aria-expanded": open,
			className: "inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-2 text-sm font-semibold text-foreground transition-all hover:border-royal/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-navy to-royal text-xs font-bold text-primary-foreground",
					children: firstName.charAt(0).toUpperCase()
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "hidden sm:inline",
					children: ["Olá, ", firstName]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 transition-transform ${open ? "rotate-180" : ""}` })
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-40",
			"aria-hidden": true,
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "menu",
			className: "absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border/60 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-foreground",
						children: user.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: user.email
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/dashboard",
					onClick: () => setOpen(false),
					className: "flex items-center gap-2 px-4 py-3 text-sm text-foreground transition-colors hover:bg-surface",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, { className: "h-4 w-4" }), "Painel"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: handleLogout,
					className: "flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-destructive transition-colors hover:bg-destructive/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Sair"]
				})
			]
		})] })]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative overflow-hidden bg-hero-glow",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page relative grid gap-12 pt-16 pb-24 md:pt-24 md:pb-32 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Plataforma para consultores de consórcio" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl",
							children: [
								"O simulador mais inteligente para vender",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "Consórcios"
								}),
								" utilizando o Método 3A."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground",
							children: "Planeje investimentos, apresente cenários reais e impressione seus clientes com cálculos totalmente atualizados — em uma interface pensada para conversão."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
									href: "#planos",
									children: ["Quero conhecer o Simulador", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryButton, {
									variant: "secondary",
									href: "#cta",
									children: "Solicitar Demonstração"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PrimaryButton, {
									variant: "ghost",
									href: "#demo",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), "Ver apresentação"]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-growth" }), "Dados atualizados diariamente"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-4 w-4 text-growth" }), "+2.400 consultores ativos"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 text-growth" }), "4.9/5 de satisfação"]
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .15,
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-royal/10 via-transparent to-royal/5 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-6 -z-10 h-40 w-40 rounded-full bg-royal/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 -left-8 -z-10 h-48 w-48 rounded-full bg-navy/15 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 30,
							scale: .98
						},
						animate: {
							opacity: 1,
							y: 0,
							scale: 1
						},
						transition: {
							duration: .9,
							ease: [
								.22,
								1,
								.36,
								1
							],
							delay: .2
						},
						className: "relative overflow-hidden rounded-3xl border border-border shadow-elevated",
						style: { boxShadow: "0 30px 80px -30px oklch(0.22 0.055 260 / 0.35)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_mockup_default,
							alt: "Interface do Simulador Método 3A em notebook",
							width: 1408,
							height: 1104,
							className: "w-full h-auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .7,
							duration: .6
						},
						className: "glass-card absolute -left-4 bottom-6 hidden rounded-2xl px-4 py-3 sm:flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-9 w-9 place-items-center rounded-full bg-growth-soft text-growth",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Conversão média"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-semibold",
							children: "+38% em 60 dias"
						})] })]
					})
				]
			})]
		})
	});
}
function TrustBar() {
	const items = [
		"Consultores",
		"Empresas",
		"Representantes",
		"Corretores",
		"Investidores"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-5 md:flex-row md:justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] uppercase tracking-[0.24em] text-muted-foreground",
							children: "Utilizado por"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium text-foreground/70",
						children: items.map((label, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "transition-colors hover:text-foreground",
								children: label
							}), i < items.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-1 w-1 rounded-full bg-border md:inline-block" })]
						}, label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative flex h-2 w-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-growth opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-growth" })]
						}), "+2.400 profissionais ativos"]
					})
				]
			})
		})
	});
}
function Metodo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "metodo",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "O Método 3A" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
						children: [
							"Três movimentos que ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "transformam um consórcio"
							}),
							" em decisão."
						]
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground lg:text-lg leading-relaxed lg:pb-2",
						children: "Alavancagem, Aquisição e Aposentadoria não são etapas isoladas — formam um único caminho de raciocínio financeiro. O simulador orquestra os três em uma narrativa que o cliente entende em segundos."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-20 grid gap-6 lg:grid-cols-12 lg:gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-0 hidden h-full w-full lg:block",
						preserveAspectRatio: "none",
						viewBox: "0 0 100 100",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 42 25 C 55 25, 55 55, 68 55 C 80 55, 80 80, 90 80",
							fill: "none",
							stroke: "url(#g3a)",
							strokeWidth: "0.25",
							strokeDasharray: "1 1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
							id: "g3a",
							x1: "0",
							x2: "1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "oklch(0.52 0.2 262)",
									stopOpacity: "0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "50%",
									stopColor: "oklch(0.52 0.2 262)",
									stopOpacity: "0.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "oklch(0.62 0.14 155)",
									stopOpacity: "0"
								})
							]
						}) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:col-span-7 lg:row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-navy via-[oklch(0.24_0.06_260)] to-[oklch(0.28_0.08_262)] p-8 text-primary-foreground md:p-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-royal/30 blur-3xl" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono",
											children: "01 · A"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-white/15" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fundamento" })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-8 text-3xl font-semibold tracking-tight md:text-4xl",
									children: ["Alavancagem ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-white/60",
										children: "Financeira"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-md text-[15px] leading-relaxed text-white/70",
									children: "Multiplique o poder de compra com estratégias de crédito, lances e contemplação — o cliente vê o efeito composto em tempo real."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6",
									children: [
										["3.2x", "poder de compra"],
										["47%", "menor custo efetivo"],
										["18m", "tempo médio"]
									].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-2xl font-semibold tracking-tight",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-[11px] uppercase tracking-wider text-white/50",
										children: v
									})] }, v))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .08,
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-elevated card-elevated-hover h-full p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-royal",
										children: "02 · A"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-6 text-2xl font-semibold tracking-tight",
									children: ["Aquisição ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Patrimonial"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: "Planeje a construção de patrimônio real com cenários projetados e comparativos claros para cada perfil de cliente."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex items-center gap-2 text-xs text-royal",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, { className: "h-3.5 w-3.5" }), "Imóveis · Veículos · Serviços"]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .12,
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-elevated card-elevated-hover h-full p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-growth",
											children: "03 · A"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-border" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-growth",
											children: "Fecho"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "mt-6 text-2xl font-semibold tracking-tight",
									children: ["Aposentadoria ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "projetada"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: "Consórcios convertidos em renda futura previsível, com projeções sólidas e recomendações personalizadas."
								})
							]
						})
					})
				]
			})]
		})
	});
}
function Diferenciais() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "diferenciais",
		className: "bg-surface py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-[1fr_auto] md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Diferenciais" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
							children: [
								"Cada detalhe pensado ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"para ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "fechar mais vendas."
								})
							]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#planos",
						className: "hidden md:inline-flex items-center gap-2 text-sm font-medium text-royal hover:gap-3 transition-all",
						children: ["Ver todos os recursos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-4 md:grid-cols-6 md:grid-rows-[auto_auto_auto] lg:auto-rows-[minmax(0,1fr)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "md:col-span-4 md:row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-elevated card-elevated-hover relative h-full overflow-hidden p-8 md:p-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-md",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center gap-2 rounded-full bg-royal/10 px-3 py-1 text-xs font-medium text-royal",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-3 w-3" }), " Motor de cálculo"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-5 text-2xl font-semibold tracking-tight md:text-3xl",
										children: "Cálculos precisos, atualizados diariamente."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm leading-relaxed text-muted-foreground",
										children: "Índices, taxas e regras sincronizados em tempo real — apresente sempre a versão mais confiável do cenário."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 rounded-2xl border border-border bg-surface p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-royal" }), " Projeção · 60 meses"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-growth",
										children: "+38.2%"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
									viewBox: "0 0 300 90",
									className: "mt-4 h-24 w-full",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
											id: "chartFill",
											x1: "0",
											x2: "0",
											y1: "0",
											y2: "1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "0%",
												stopColor: "oklch(0.52 0.2 262)",
												stopOpacity: "0.25"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
												offset: "100%",
												stopColor: "oklch(0.52 0.2 262)",
												stopOpacity: "0"
											})]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 0 70 L 40 62 L 70 66 L 110 50 L 150 54 L 190 38 L 230 30 L 270 22 L 300 12 L 300 90 L 0 90 Z",
											fill: "url(#chartFill)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 0 70 L 40 62 L 70 66 L 110 50 L 150 54 L 190 38 L 230 30 L 270 22 L 300 12",
											fill: "none",
											stroke: "oklch(0.52 0.2 262)",
											strokeWidth: "1.5",
											strokeLinecap: "round"
										})
									]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						className: "md:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-elevated card-elevated-hover h-full p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-5 w-5 text-royal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-mono text-2xl font-semibold text-foreground",
										children: "0.4s"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 text-base font-semibold",
									children: "Resultado instantâneo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground",
									children: "Ajuste variáveis e veja o impacto em tempo real."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						className: "md:col-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-elevated card-elevated-hover h-full p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-royal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 space-y-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-full rounded-full bg-border" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-4/5 rounded-full bg-border" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-2/3 rounded-full bg-royal/40" })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-base font-semibold",
									children: "PDF com sua marca"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 text-sm text-muted-foreground",
									children: "Relatórios prontos para o cliente em um clique."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						className: "md:col-span-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-elevated card-elevated-hover flex h-full items-center gap-5 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-growth-soft text-growth",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: "Segurança de nível bancário"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Criptografia ponta a ponta e auditoria contínua."
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						className: "md:col-span-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "card-elevated card-elevated-hover flex h-full items-center gap-5 p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-base font-semibold",
								children: "Método 3A exclusivo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Fluxo comercial testado com milhares de vendas."
							})] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						className: "md:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
							children: [
								[Clock, "Histórico por cliente"],
								[MousePointerClick, "Interface intuitiva"],
								[Layers, "Design premium"],
								[Users, "Escalável para times"]
							].map(([Icon, label], i) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group flex items-center gap-3 rounded-2xl border border-border bg-surface-elevated px-5 py-4 transition-colors hover:border-royal/40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-muted-foreground transition-colors group-hover:text-royal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: label
									})]
								}, i);
							})
						})
					})
				]
			})]
		})
	});
}
function ComoFunciona() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "como-funciona",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Como funciona" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
						children: [
							"Do primeiro contato ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "ao contrato assinado."
							})
						]
					})
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground lg:text-lg leading-relaxed",
						children: "Um fluxo de cinco movimentos. Cada etapa foi desenhada para reduzir fricção e antecipar a próxima ação — como uma boa conversa comercial."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "relative mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "absolute left-[14px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-border to-transparent md:left-[19px]"
				}), [
					{
						n: "01",
						title: "Cadastre o cliente",
						desc: "Adicione dados e objetivos em segundos.",
						side: "Perfil e metas centralizados."
					},
					{
						n: "02",
						title: "Escolha a modalidade",
						desc: "Imóvel, veículo, serviços ou investimento.",
						side: "Regras do produto pré-configuradas."
					},
					{
						n: "03",
						title: "Simule o investimento",
						desc: "Ajuste variáveis e visualize cenários em tempo real. Compare estratégias e encontre o ponto ideal para cada perfil.",
						side: "Etapa em destaque · o coração do simulador.",
						highlight: true
					},
					{
						n: "04",
						title: "Apresente os resultados",
						desc: "Relatório profissional com sua marca.",
						side: "PDF pronto para envio."
					},
					{
						n: "05",
						title: "Feche a venda",
						desc: "Assinatura e acompanhamento centralizados.",
						side: "Do sim ao contrato, sem atrito."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative grid grid-cols-[32px_1fr] gap-6 py-6 md:grid-cols-[42px_minmax(0,1.4fr)_minmax(0,1fr)] md:gap-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `relative z-10 grid place-items-center rounded-full transition-all ${s.highlight ? "h-8 w-8 bg-navy text-primary-foreground shadow-[0_0_0_6px_oklch(0.52_0.2_262/0.12)] md:h-10 md:w-10" : "h-6 w-6 border border-border bg-surface-elevated text-muted-foreground md:h-8 md:w-8"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-mono ${s.highlight ? "text-[10px]" : "text-[9px]"}`,
										children: s.n
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: s.highlight ? "-mt-1" : "pt-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: `tracking-tight ${s.highlight ? "text-2xl font-semibold md:text-3xl" : "text-lg font-semibold text-foreground/85"}`,
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: `mt-2 leading-relaxed text-muted-foreground ${s.highlight ? "max-w-lg text-[15px]" : "text-sm"}`,
									children: s.desc
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "col-start-2 md:col-start-3 md:pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `flex items-start gap-2 text-xs ${s.highlight ? "text-royal font-medium" : "text-muted-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-px w-6 bg-current opacity-40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.side })]
								})
							})
						]
					})
				}, s.n))]
			})]
		})
	});
}
function Demo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "demo",
		className: "relative overflow-hidden bg-navy py-24 md:py-32 text-primary-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-40 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.52_0.2_262/0.35),transparent_60%)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-growth" }), "Demonstração do sistema"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
							children: [
								"A mesma experiência ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent",
									children: "em todos os dispositivos."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-md text-white/70",
							children: "Desktop, tablet e mobile — a mesma performance, a mesma elegância, o mesmo pitch."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6",
							children: [
								["99.9%", "uptime"],
								["<0.5s", "resposta"],
								["24/7", "acesso"]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xl font-semibold tracking-tight",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-wider text-white/50",
								children: v
							})] }, v))
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-6 -z-10 rounded-[3rem] bg-royal/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-3xl border border-white/10 shadow-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: devices_mockup_default,
								alt: "Simulador Método 3A em notebook, tablet e celular",
								width: 1600,
								height: 1008,
								loading: "lazy",
								className: "w-full h-auto"
							})
						})]
					})
				})]
			})
		})]
	});
}
function Beneficios() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:sticky lg:top-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Benefícios" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
								children: [
									"O que muda ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient",
										children: "a partir de hoje."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-muted-foreground",
								children: "Um simulador não vale pelo que ele faz — vale pelo que ele muda no seu dia."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .15,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 rounded-2xl border border-border bg-surface p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-4xl font-bold tracking-tight text-gradient",
										children: "+38%"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs uppercase tracking-wider text-muted-foreground",
										children: "conversão média"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Aumento reportado por consultores após 60 dias de uso."
								})]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: [
						{
							icon: TrendingUp,
							title: "Venda mais, com menos esforço",
							desc: "Apresentações que geram decisão no primeiro encontro. Menos objeções, mais fechamento.",
							featured: true
						},
						{
							icon: Clock,
							title: "Recupere horas por semana",
							desc: "Automatize o operacional e libere tempo para o que gera receita."
						},
						{
							icon: BadgeCheck,
							title: "Autoridade em cada slide",
							desc: "Design de agência sem contratar uma."
						},
						{
							icon: ShieldCheck,
							title: "Zero erro de cálculo",
							desc: "Motor auditável, atualizado diariamente."
						},
						{
							icon: Users,
							title: "Organize toda a carteira",
							desc: "Clientes, simulações e follow-ups em um só lugar."
						}
					].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `group flex items-start gap-5 rounded-2xl border p-6 transition-all ${b.featured ? "border-royal/30 bg-gradient-to-br from-surface-elevated to-royal/[0.04] shadow-soft" : "border-border bg-surface-elevated hover:border-royal/30"}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid h-10 w-10 shrink-0 place-items-center rounded-xl ${b.featured ? "bg-navy text-primary-foreground" : "bg-accent text-royal"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-4.5 w-4.5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: `font-semibold ${b.featured ? "text-lg" : "text-base"}`,
										children: b.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
										children: b.desc
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" })
							]
						})
					}, b.title))
				})]
			})
		})
	});
}
function ParaQuem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Para quem é" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
							children: [
								"Feito para quem ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "vive de resultado."
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground max-w-md",
							children: "Se a sua receita depende de fechar um consórcio, o simulador foi desenhado pensando em você — do primeiro pitch ao pós-venda."
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border border-y border-border",
					children: [
						{
							title: "Consultores independentes",
							desc: "Profissionalize a apresentação e diferencie-se da concorrência.",
							tag: "solo"
						},
						{
							title: "Empresas de consórcio",
							desc: "Escale a operação comercial com padronização total.",
							tag: "escala"
						},
						{
							title: "Representantes e corretores",
							desc: "Uma ferramenta única para todo o time trabalhar melhor.",
							tag: "time"
						},
						{
							title: "Investidores",
							desc: "Análise de rentabilidade real com dados sustentáveis.",
							tag: "análise"
						}
					].map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-muted-foreground",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold tracking-tight transition-colors group-hover:text-royal",
									children: g.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: g.desc
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline-flex rounded-full border border-border bg-surface-elevated px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground",
									children: g.tag
								})
							]
						})
					}, g.title))
				})]
			})
		})
	});
}
function Depoimentos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Depoimentos" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
						children: ["Quem usa, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "indica."
						})]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated via-surface-elevated to-royal/[0.04] p-8 md:p-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "pointer-events-none absolute -top-8 -left-4 font-serif text-[10rem] leading-none text-royal/10 select-none",
							children: "“"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 text-growth",
								children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, k))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
								className: "mt-6 text-xl leading-relaxed tracking-tight text-foreground md:text-2xl",
								children: "Em dois meses meu fechamento aumentou 42%. O cliente vê o simulador e entende o valor na hora — a conversa muda de patamar."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "relative mt-10 flex items-center gap-4 border-t border-border pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-navy to-royal text-sm font-semibold text-primary-foreground",
								children: "RM"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-semibold",
								children: "Rafael Meireles"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: "Consultor sênior · Curitiba"
							})] })]
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6",
					children: [{
						name: "Camila Duarte",
						role: "Diretora comercial · SP",
						text: "Padronizamos toda a equipe. Erros de cálculo zerados e pitch muito mais forte.",
						initials: "CD"
					}, {
						name: "Eduardo Prado",
						role: "Corretor · BH",
						text: "Uso o Método 3A com clientes premium. É a diferença entre ser lembrado e contratado.",
						initials: "EP"
					}].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "card-elevated card-elevated-hover h-full p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "text-[15px] leading-relaxed text-foreground",
								children: [
									"“",
									t.text,
									"”"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-5 flex items-center gap-3 border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-xs font-semibold text-royal",
									children: t.initials
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-sm font-semibold",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-xs text-muted-foreground",
										children: t.role
									})]
								})]
							})]
						})
					}, t.name))
				})]
			})]
		})
	});
}
function Planos() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "planos",
		className: "bg-surface py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Planos" }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
							children: "Escolha o plano ideal para você."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground",
							children: "Cancele quando quiser. Sem taxa de setup. Sem letras miúdas."
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 lg:grid-cols-3",
				children: [
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
						cta: "Comprar Agora",
						variant: "secondary",
						users: "Até 3 usuarios"
					},
					{
						name: "silver",
						price: "R$ 49",
						cycle: "/mês",
						desc: "Para consultores que querem começar hoje.",
						features: [
							"Simulações ilimitadas",
							"Geração de PDF",
							"Suporte por e-mail",
							"Atualizações contínuas"
						],
						cta: "Comprar Agora",
						variant: "secondary",
						users: "Até 7 usuarios"
					},
					{
						name: "gold",
						price: "R$ 99",
						cycle: "/mês",
						desc: "Para consultores que querem começar hoje.",
						features: [
							"Simulações ilimitadas",
							"Geração de PDF",
							"Suporte por e-mail",
							"Atualizações contínuas"
						],
						cta: "Comprar Agora",
						variant: "secondary",
						users: "Até 10 usuarios"
					},
					{
						name: "platinum",
						price: "R$ 199",
						cycle: "/mês",
						desc: "Para consultores que querem começar hoje.",
						features: [
							"Simulações ilimitadas",
							"Geração de PDF",
							"Suporte por e-mail",
							"Atualizações contínuas"
						],
						cta: "Comprar Agora",
						variant: "secondary",
						users: "Usuarios ilimitado"
					}
				].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 border-border bg-surface-elevated hover:-translate-y-1 hover:shadow-elevated",
						children: [
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
									}), p.cycle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm opacity-70",
										children: p.cycle
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground",
									children: p.desc
								}),
								p.users && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-xs text-royal font-semibold",
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#cta",
									className: "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 bg-navy text-primary-foreground hover:shadow-elevated",
									children: p.cta
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#cta",
									className: "inline-flex items-center justify-center text-xs text-muted-foreground hover:text-royal",
									children: "Solicitar Demonstração"
								})]
							})
						]
					})
				}, p.name))
			})]
		})
	});
}
function FAQ() {
	const items = [
		{
			q: "Como funciona o Simulador Método 3A?",
			a: "Você cadastra o cliente, escolhe a modalidade de consórcio, insere os parâmetros e o sistema gera cenários de Alavancagem, Aquisição Patrimonial e Aposentadoria em segundos, prontos para apresentar."
		},
		{
			q: "Precisa instalar algo?",
			a: "Não. É 100% online e funciona no seu navegador, tanto no desktop quanto no tablet e celular."
		},
		{
			q: "As atualizações estão inclusas?",
			a: "Sim. Índices, taxas e novas funcionalidades são atualizados automaticamente enquanto sua assinatura estiver ativa."
		},
		{
			q: "Como funciona o suporte?",
			a: "Suporte por e-mail em todos os planos, prioritário nos planos Anual e Empresarial, com SLA dedicado no Empresarial."
		},
		{
			q: "Como funciona a licença?",
			a: "Cada assinatura é individual por usuário. No plano Empresarial você pode adicionar múltiplos usuários com painel de gestão."
		},
		{
			q: "Quais formas de pagamento vocês aceitam?",
			a: "Cartão de crédito, Pix e boleto para os planos Anuais. Sem taxa de setup, cancele quando quiser."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "FAQ" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl",
						children: ["Perguntas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "frequentes."
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-muted-foreground",
						children: [
							"Não encontrou o que procurava?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#cta",
								className: "font-medium text-royal hover:underline",
								children: "Fale com a gente."
							})
						]
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: items.map((it, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .04,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-elevated overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : i),
								className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[15px] font-semibold",
									children: it.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-royal" : ""}` })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "px-6 pb-5 text-sm leading-relaxed text-muted-foreground",
										children: it.a
									})
								})
							})]
						})
					}, it.q);
				})
			})]
		})
	});
}
function CTAFinal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "cta",
		className: "pb-24 md:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-navy via-[oklch(0.25_0.06_260)] to-[oklch(0.3_0.09_262)] p-10 text-primary-foreground md:p-16 lg:p-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-royal/30 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-growth/10 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-growth" }), "Comece hoje mesmo utilizando o Método 3A"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
								children: ["Transforme sua forma de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent",
									children: "vender Consórcios."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-white/70",
								children: "Cálculos atualizados, cenários realistas e uma apresentação que gera decisão."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap items-center justify-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#planos",
									className: "group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-2xl",
									children: ["Quero adquirir o Simulador", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#cta",
									className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10",
									children: "Falar com um especialista"
								})]
							})
						]
					})
				]
			}) })
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-navy to-royal text-primary-foreground text-sm font-bold",
							children: "3A"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold",
							children: "Simulador Método 3A"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm text-muted-foreground",
						children: "A plataforma inteligente para consultores, empresas e investidores que vivem de consórcios."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Produto",
						links: [
							["Método", "#metodo"],
							["Diferenciais", "#diferenciais"],
							["Planos", "#planos"],
							["FAQ", "#faq"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Contato",
						links: [
							["WhatsApp", "#"],
							["E-mail", "#"],
							["Suporte", "#"]
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
						title: "Legal",
						links: [["Política de Privacidade", "#"], ["Termos de Uso", "#"]]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col-reverse gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Método 3A. Todos os direitos reservados."
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						"aria-label": "WhatsApp",
						className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-elevated text-muted-foreground transition-all hover:text-royal hover:border-royal/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						"aria-label": "Instagram",
						className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-elevated text-muted-foreground transition-all hover:text-royal hover:border-royal/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
					})]
				})]
			})]
		})
	});
}
function FooterCol({ title, links }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs font-semibold uppercase tracking-wider text-foreground",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-2.5",
		children: links.map(([label, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href,
			className: "text-sm text-muted-foreground transition-colors hover:text-royal",
			children: label
		}) }, label))
	})] });
}
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metodo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diferenciais, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComoFunciona, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Demo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beneficios, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParaQuem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Depoimentos, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Planos, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTAFinal, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { LandingPage as component };
