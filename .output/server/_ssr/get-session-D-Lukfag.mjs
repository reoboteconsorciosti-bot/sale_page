import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-session-D-Lukfag.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getSessionUser_createServerFn_handler = createServerRpc({
	id: "042490d3341f7a4a1bcc8f5a007cd9ab461012073e4dd2f6de21389faa34573a",
	name: "getSessionUser",
	filename: "src/lib/get-session.ts"
}, (opts) => getSessionUser.__executeServer(opts));
var getSessionUser = createServerFn({ method: "GET" }).handler(getSessionUser_createServerFn_handler, async () => {
	const { getCookie } = await import("./server-wkA40yKb.mjs");
	const { verifySession, SESSION_COOKIE_NAME } = await import("./session-BppDUKqK.mjs");
	const token = getCookie(SESSION_COOKIE_NAME);
	if (!token) return null;
	return await verifySession(token);
});
//#endregion
export { getSessionUser_createServerFn_handler };
