globalThis.__nitro_main__ = import.meta.url;
import { a as toEventHandler, c as serve, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, s as NodeResponse, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/cadastro-CaPIqRuS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"21e9-SdvJgnwvJgLRSXKDQ+5mKPP7gtU\"",
		"mtime": "2026-07-17T20:07:16.723Z",
		"size": 8681,
		"path": "../public/assets/cadastro-CaPIqRuS.js"
	},
	"/_headers": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"bc-UFKghijl4Cn/ZpdKFrWd2GzfRVk\"",
		"mtime": "2026-07-10T19:58:51.300Z",
		"size": 188,
		"path": "../public/_headers"
	},
	"/assets/dashboard-CpQpvA3V.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eaf-VV7XEgfh5nnlSQM00lT9ZQODE/c\"",
		"mtime": "2026-07-17T20:07:16.724Z",
		"size": 3759,
		"path": "../public/assets/dashboard-CpQpvA3V.js"
	},
	"/assets/createLucideIcon-hkNGXNi0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a9-uUVX9Ss9OM8Jag2hV/gCZXOi9Ks\"",
		"mtime": "2026-07-17T20:07:16.724Z",
		"size": 1193,
		"path": "../public/assets/createLucideIcon-hkNGXNi0.js"
	},
	"/assets/devices-mockup-3LLGogSN.jpg": {
		"type": "image/jpeg",
		"etag": "\"26ada-BwIUIlEh4JDj6igD8D4oqMM8ajo\"",
		"mtime": "2026-07-17T20:07:16.729Z",
		"size": 158426,
		"path": "../public/assets/devices-mockup-3LLGogSN.jpg"
	},
	"/assets/hero-mockup-CwQgfg8F.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f25e-P7pJ5xkjffSBu8qi6sAQvJirhXU\"",
		"mtime": "2026-07-17T20:07:16.731Z",
		"size": 127582,
		"path": "../public/assets/hero-mockup-CwQgfg8F.jpg"
	},
	"/assets/index-BmExpDsc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5455e-rwVEhtkSD1vp3gleK1aMhlpG+2o\"",
		"mtime": "2026-07-10T19:44:44.468Z",
		"size": 345438,
		"path": "../public/assets/index-BmExpDsc.js"
	},
	"/assets/log-out-DjRVtJx_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12d-Z5r/y5tdvF20TRXRkp9QhC3oq44\"",
		"mtime": "2026-07-17T20:07:16.726Z",
		"size": 301,
		"path": "../public/assets/log-out-DjRVtJx_.js"
	},
	"/assets/index-CVoMyt3P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5397a-YPcDAzQZkpxErLr6ita9O0iIsBE\"",
		"mtime": "2026-07-17T20:07:16.722Z",
		"size": 342394,
		"path": "../public/assets/index-CVoMyt3P.js"
	},
	"/assets/index-c7vgXTxN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5455e-Vn9dzbJyX3xGyMNKA5cssQTud5U\"",
		"mtime": "2026-07-10T19:58:49.259Z",
		"size": 345438,
		"path": "../public/assets/index-c7vgXTxN.js"
	},
	"/assets/mail-DcUhW1T8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40e-itVnAytB48B3PEmgAtwnIE8JyA4\"",
		"mtime": "2026-07-17T20:07:16.726Z",
		"size": 1038,
		"path": "../public/assets/mail-DcUhW1T8.js"
	},
	"/assets/login-DTbmG-dz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1723-ty8Ou3guUfcRSWylUryMtZPmwws\"",
		"mtime": "2026-07-17T20:07:16.726Z",
		"size": 5923,
		"path": "../public/assets/login-DTbmG-dz.js"
	},
	"/assets/routes-C902X-Wv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29941-1QT9lhPAiGj24ixiBnmcrlaun8M\"",
		"mtime": "2026-07-17T20:07:16.728Z",
		"size": 170305,
		"path": "../public/assets/routes-C902X-Wv.js"
	},
	"/assets/styles-Bl8EW5ju.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17f51-VXCiURxdGLxQM5Ei8xRwlNavaLI\"",
		"mtime": "2026-07-17T20:07:16.733Z",
		"size": 98129,
		"path": "../public/assets/styles-Bl8EW5ju.css"
	},
	"/assets/shield-check-8mFV-FQ0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b0-QEuwVB5t6mSlOBI2X0FWe7RSnwg\"",
		"mtime": "2026-07-17T20:07:16.728Z",
		"size": 432,
		"path": "../public/assets/shield-check-8mFV-FQ0.js"
	},
	"/assets/useRouter-CyglmWxr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2261-ottjMQaNqwMHuCbulvzmKcISmmY\"",
		"mtime": "2026-07-17T20:07:16.729Z",
		"size": 8801,
		"path": "../public/assets/useRouter-CyglmWxr.js"
	},
	"/assets/routes-A5uAvoef.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2956e-rP5NUF1LJ5VCq53Kc+MZuKF+p7s\"",
		"mtime": "2026-07-10T19:58:49.260Z",
		"size": 169326,
		"path": "../public/assets/routes-A5uAvoef.js"
	},
	"/assets/routes-DiJUyDFX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29817-MI+B9aPWj3AXI5vrdicjt15sh9Q\"",
		"mtime": "2026-07-10T19:44:44.470Z",
		"size": 170007,
		"path": "../public/assets/routes-DiJUyDFX.js"
	},
	"/assets/styles-DNSmRhhK.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17567-3qO41ZEjJBN/ohfaDJ1g3twWhGI\"",
		"mtime": "2026-07-10T19:58:49.264Z",
		"size": 95591,
		"path": "../public/assets/styles-DNSmRhhK.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_DHLUDS = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_DHLUDS
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
