import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ArrowRight, O as ArrowLeft, b as EyeOff, f as Mail, l as Phone, m as Lock, r as User, s as ShieldCheck, y as Eye } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cadastro-yQjGk78M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegisterPage() {
	const navigate = useNavigate();
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [showPassword, setShowPassword] = (0, import_react.useState)(false);
	const [accept, setAccept] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		setSubmitting(true);
		try {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: firstName,
					lastName,
					phone,
					email,
					password,
					acceptTerms: accept
				})
			});
			const data = await response.json().catch(() => ({}));
			if (!response.ok || !data.success) {
				setError(data.message ?? "Não foi possível concluir o cadastro.");
				return;
			}
			navigate({ to: "/login" });
		} catch {
			setError("Não foi possível conectar. Tente novamente.");
		} finally {
			setSubmitting(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-hero-glow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-royal/15 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-navy/10 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-md",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Voltar para o início"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-elevated p-8 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-navy to-royal text-sm font-bold text-primary-foreground",
									children: "3A"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm font-semibold tracking-tight",
									children: [
										"Simulador",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-normal text-muted-foreground",
											children: "Método 3A"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-2xl font-bold tracking-tight sm:text-3xl",
									children: "Crie sua conta"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Comece hoje a simular e fechar mais vendas com o Método 3A."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSubmit,
								className: "mt-8 space-y-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid gap-4 sm:grid-cols-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "firstName",
											className: "mb-1.5 block text-sm font-medium text-foreground",
											children: "Nome"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "firstName",
												type: "text",
												autoComplete: "given-name",
												required: true,
												value: firstName,
												onChange: (e) => setFirstName(e.target.value),
												placeholder: "João",
												className: "w-full rounded-xl border border-border bg-surface-elevated py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-royal/50 focus:ring-2 focus:ring-ring/40"
											})]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "lastName",
											className: "mb-1.5 block text-sm font-medium text-foreground",
											children: "Sobrenome"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "lastName",
												type: "text",
												autoComplete: "family-name",
												required: true,
												value: lastName,
												onChange: (e) => setLastName(e.target.value),
												placeholder: "Silva",
												className: "w-full rounded-xl border border-border bg-surface-elevated py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-royal/50 focus:ring-2 focus:ring-ring/40"
											})]
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "phone",
										className: "mb-1.5 block text-sm font-medium text-foreground",
										children: "Telefone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "phone",
											type: "tel",
											autoComplete: "tel",
											required: true,
											value: phone,
											onChange: (e) => setPhone(e.target.value),
											placeholder: "(11) 99999-9999",
											className: "w-full rounded-xl border border-border bg-surface-elevated py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-royal/50 focus:ring-2 focus:ring-ring/40"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "email",
										className: "mb-1.5 block text-sm font-medium text-foreground",
										children: "E-mail"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "email",
											type: "email",
											autoComplete: "email",
											required: true,
											value: email,
											onChange: (e) => setEmail(e.target.value),
											placeholder: "voce@empresa.com",
											className: "w-full rounded-xl border border-border bg-surface-elevated py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-royal/50 focus:ring-2 focus:ring-ring/40"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "password",
										className: "mb-1.5 block text-sm font-medium text-foreground",
										children: "Senha"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												id: "password",
												type: showPassword ? "text" : "password",
												autoComplete: "new-password",
												required: true,
												value: password,
												onChange: (e) => setPassword(e.target.value),
												placeholder: "••••••••",
												className: "w-full rounded-xl border border-border bg-surface-elevated py-3 pl-11 pr-11 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-royal/50 focus:ring-2 focus:ring-ring/40"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setShowPassword((v) => !v),
												"aria-label": showPassword ? "Ocultar senha" : "Mostrar senha",
												className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground",
												children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
											})
										]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex cursor-pointer items-start gap-2 text-sm text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											required: true,
											checked: accept,
											onChange: (e) => setAccept(e.target.checked),
											className: "mt-0.5 h-4 w-4 rounded border-border text-royal accent-[var(--royal)]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											"Concordo com os",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#",
												className: "font-medium text-royal hover:underline",
												children: "Termos de Uso"
											}),
											" ",
											"e a",
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#",
												className: "font-medium text-royal hover:underline",
												children: "Política de Privacidade"
											}),
											"."
										] })]
									}),
									error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										role: "alert",
										className: "rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive",
										children: error
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "submit",
										disabled: submitting,
										className: "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.22_0.055_260/0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_oklch(0.45_0.2_262/0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70",
										children: [submitting ? "Criando conta..." : "Criar conta", !submitting && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 text-center text-sm text-muted-foreground",
								children: [
									"Já tem uma conta?",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/login",
										className: "font-medium text-royal hover:underline",
										children: "Entrar"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-growth" }), "Conexão segura · criptografia ponta a ponta"]
					})
				]
			})
		]
	});
}
//#endregion
export { RegisterPage as component };
