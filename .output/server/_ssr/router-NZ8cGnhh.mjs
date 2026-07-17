import { o as __toESM } from "../_runtime.mjs";
import { t as AppError } from "./errors-Bn6YYVBv.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, j as redirect, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-f3Ss2erX.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-NZ8cGnhh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Bl8EW5ju.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/**
* Server function que devolve o usuário da sessão atual (ou `null`).
*
* Equivalente ao `await auth()` do Auth.js: lê o Cookie HTTPOnly e valida a
* assinatura do JWT. Roda no servidor tanto no SSR (chamada direta) quanto na
* navegação no cliente (via RPC, o navegador envia o cookie automaticamente).
*
* Este arquivo fica FORA de `src/server/` porque é importado pelo `__root`
* (código isomórfico). A lógica sensível (`@/server/auth/session`) é importada
* dinamicamente dentro do handler, então nunca vaza para o bundle do cliente.
* NÃO consulta o banco de dados — apenas verifica o token.
*/
var getSessionUser = createServerFn({ method: "GET" }).handler(createSsrRpc("042490d3341f7a4a1bcc8f5a007cd9ab461012073e4dd2f6de21389faa34573a"));
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	/**
	* Carrega a sessão uma vez por navegação e a disponibiliza no contexto do
	* router. Roda no servidor (SSR) e no cliente (via RPC), então a Navbar já
	* renderiza com o estado correto — sem "piscar" e sem consultar o banco.
	*/
	beforeLoad: async () => {
		return { user: await getSessionUser() };
	},
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Simulador Método 3A — Venda mais Consórcios com inteligência" },
			{
				name: "description",
				content: "O simulador mais inteligente para vender Consórcios. Apresente cenários reais, cálculos atualizados e feche mais vendas com o Método 3A."
			},
			{
				name: "author",
				content: "Método 3A"
			},
			{
				property: "og:title",
				content: "Simulador Método 3A — Venda mais Consórcios com inteligência"
			},
			{
				property: "og:description",
				content: "O simulador mais inteligente para vender Consórcios. Apresente cenários reais, cálculos atualizados e feche mais vendas com o Método 3A."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Simulador Método 3A — Venda mais Consórcios com inteligência"
			},
			{
				name: "twitter:description",
				content: "O simulador mais inteligente para vender Consórcios. Apresente cenários reais, cálculos atualizados e feche mais vendas com o Método 3A."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/69010b2c-8fbf-4994-9bea-858a792e1f5b/id-preview-1dcb38a5--fe616d2a-29ff-4240-aabe-a1143bbe4e17.lovable.app-1783688264111.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/69010b2c-8fbf-4994-9bea-858a792e1f5b/id-preview-1dcb38a5--fe616d2a-29ff-4240-aabe-a1143bbe4e17.lovable.app-1783688264111.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$3 = () => import("./login-CMmnDKgh.mjs");
var Route$6 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./dashboard-DXqiqnUe.mjs");
var Route$5 = createFileRoute("/dashboard")({
	beforeLoad: ({ context }) => {
		if (!context.user) throw redirect({ to: "/login" });
	},
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
/**
* Área logada — exibe os planos disponíveis (bronze, silver, gold, platinum)
* para o usuário escolher/contratar.
*/
var $$splitComponentImporter$1 = () => import("./cadastro-yQjGk78M.mjs");
var Route$4 = createFileRoute("/cadastro")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./routes-ClnUx_At.mjs");
var Route$3 = createFileRoute("/")({
	beforeLoad: ({ context }) => {
		if (context.user) throw redirect({ to: "/dashboard" });
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
/** Menu do usuário logado — substitui "Entrar / Cadastrar" quando há sessão. */
/** Cria uma resposta JSON com o content-type correto. */
function json(data, init) {
	return new Response(JSON.stringify(data), {
		status: init?.status ?? 200,
		headers: {
			"content-type": "application/json; charset=utf-8",
			...init?.headers
		}
	});
}
/** Lê e faz o parse do corpo JSON da requisição de forma segura. */
async function readJsonBody(request) {
	try {
		return await request.json();
	} catch {
		throw new AppError("Corpo da requisição inválido.", 400, "INVALID_BODY");
	}
}
/**
* Converte qualquer erro em uma resposta JSON segura.
*
* - Erros de domínio (AppError) viram respostas com a mensagem e o status certos.
* - Qualquer outro erro é logado no servidor e retorna 500 genérico, sem vazar
*   detalhes internos para o cliente.
*/
function handleRouteError(error) {
	if (error instanceof AppError) return json({
		success: false,
		message: error.message,
		code: error.code
	}, { status: error.statusCode });
	console.error("[api] erro não tratado:", error);
	return json({
		success: false,
		message: "Erro interno. Tente novamente em instantes."
	}, { status: 500 });
}
/**
* POST /api/auth/register
*
* Handler HTTP fino: apenas lê o corpo, delega para o service e formata a
* resposta. Toda a regra de negócio vive em `auth.service`.
*
* O service é importado dinamicamente dentro do handler para garantir que o
* código server-only (Prisma + bcrypt) nunca seja incluído no bundle do cliente.
*/
var Route$2 = createFileRoute("/api/auth/register")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const body = await readJsonBody(request);
		const { registerUser } = await import("./auth.service-D4dyvXPS.mjs");
		await registerUser(body);
		return json({ success: true }, { status: 201 });
	} catch (error) {
		return handleRouteError(error);
	}
} } } });
/**
* POST /api/auth/logout
*
* Encerra a sessão apagando o Cookie HTTPOnly. Não toca no banco — a sessão é
* stateless (JWT), então basta instruir o navegador a remover o cookie.
*/
var Route$1 = createFileRoute("/api/auth/logout")({ server: { handlers: { POST: async () => {
	try {
		const { buildSessionClearCookie } = await import("./session-BppDUKqK.mjs");
		return json({ success: true }, { headers: { "Set-Cookie": buildSessionClearCookie() } });
	} catch (error) {
		return handleRouteError(error);
	}
} } } });
/**
* POST /api/auth/login
*
* Handler HTTP fino: lê o corpo, delega para o service e retorna o usuário
* público (sem senha/hash). A regra de negócio vive em `auth.service`.
*
* O service é importado dinamicamente dentro do handler para manter o código
* server-only (Prisma + bcrypt) fora do bundle do cliente.
*/
var Route = createFileRoute("/api/auth/login")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const body = await readJsonBody(request);
		const { loginUser } = await import("./auth.service-D4dyvXPS.mjs");
		const user = await loginUser(body);
		const { signSession, buildSessionSetCookie } = await import("./session-BppDUKqK.mjs");
		const token = await signSession(user);
		return json({
			success: true,
			user
		}, { headers: { "Set-Cookie": buildSessionSetCookie(token) } });
	} catch (error) {
		return handleRouteError(error);
	}
} } } });
var LoginRoute = Route$6.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$7
});
var DashboardRoute = Route$5.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$7
});
var CadastroRoute = Route$4.update({
	id: "/cadastro",
	path: "/cadastro",
	getParentRoute: () => Route$7
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var ApiAuthRegisterRoute = Route$2.update({
	id: "/api/auth/register",
	path: "/api/auth/register",
	getParentRoute: () => Route$7
});
var ApiAuthLogoutRoute = Route$1.update({
	id: "/api/auth/logout",
	path: "/api/auth/logout",
	getParentRoute: () => Route$7
});
var rootRouteChildren = {
	IndexRoute,
	CadastroRoute,
	DashboardRoute,
	LoginRoute,
	ApiAuthLoginRoute: Route.update({
		id: "/api/auth/login",
		path: "/api/auth/login",
		getParentRoute: () => Route$7
	}),
	ApiAuthLogoutRoute,
	ApiAuthRegisterRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
