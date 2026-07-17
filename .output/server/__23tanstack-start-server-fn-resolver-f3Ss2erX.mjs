//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-f3Ss2erX.js
var manifest = { "042490d3341f7a4a1bcc8f5a007cd9ab461012073e4dd2f6de21389faa34573a": {
	functionName: "getSessionUser_createServerFn_handler",
	importer: () => import("./_ssr/get-session-D-Lukfag.mjs")
} };
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
