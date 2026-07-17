import { n as jwtVerify, t as SignJWT } from "../_libs/jose.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/session-BppDUKqK.js
/**
* Núcleo da sessão — centraliza a emissão e verificação do token.
*
* A sessão é um JWT assinado (HS256) guardado num Cookie HTTPOnly. É exatamente
* a estratégia que o Auth.js usa internamente (session strategy "jwt"): o estado
* do login fica no próprio token assinado, então verificar se o usuário está
* logado NÃO consome o banco de dados — apenas valida a assinatura.
*
* IMPORTANTE: módulo *server-only*. O segredo (SESSION_SECRET) nunca vai para o
* cliente. As funções são puras (só dependem de `jose`), o que facilita testes.
*/
/** Nome do cookie que carrega a sessão. */
var SESSION_COOKIE_NAME = "session";
/** Validade da sessão: 7 dias (em segundos). */
var SESSION_MAX_AGE = 3600 * 24 * 7;
function getSecretKey() {
	const secret = process.env.SESSION_SECRET;
	if (!secret) throw new Error("SESSION_SECRET não definida. Configure a variável no arquivo .env.");
	return new TextEncoder().encode(secret);
}
/** Assina um JWT com os dados públicos do usuário. */
async function signSession(user) {
	return await new SignJWT({
		name: user.name,
		email: user.email
	}).setProtectedHeader({ alg: "HS256" }).setSubject(user.id).setIssuedAt().setExpirationTime(`${SESSION_MAX_AGE}s`).sign(getSecretKey());
}
/**
* Verifica a assinatura/validade do token e devolve o usuário da sessão.
* Retorna `null` para qualquer token ausente, inválido ou expirado — sem lançar.
*/
async function verifySession(token) {
	try {
		const { payload } = await jwtVerify(token, getSecretKey());
		if (typeof payload.sub !== "string" || typeof payload.name !== "string" || typeof payload.email !== "string") return null;
		return {
			id: payload.sub,
			name: payload.name,
			email: payload.email
		};
	} catch {
		return null;
	}
}
/** Monta o header `Set-Cookie` que grava a sessão no navegador (HTTPOnly). */
function buildSessionSetCookie(token) {
	return serializeSessionCookie(token, SESSION_MAX_AGE);
}
/** Monta o header `Set-Cookie` que apaga a sessão (logout). */
function buildSessionClearCookie() {
	return serializeSessionCookie("", 0);
}
function serializeSessionCookie(value, maxAge) {
	const parts = [
		`${SESSION_COOKIE_NAME}=${value}`,
		"Path=/",
		"HttpOnly",
		"SameSite=Lax",
		`Max-Age=${maxAge}`
	];
	parts.push("Secure");
	return parts.join("; ");
}
//#endregion
export { SESSION_COOKIE_NAME, buildSessionClearCookie, buildSessionSetCookie, signSession, verifySession };
