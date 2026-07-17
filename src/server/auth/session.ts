import { SignJWT, jwtVerify } from "jose";

import type { PublicUser } from "@/types/auth";

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
export const SESSION_COOKIE_NAME = "session";

/** Validade da sessão: 7 dias (em segundos). */
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7;

/** Dados que trafegam dentro do token — nunca inclui senha/hash. */
export type SessionUser = PublicUser;

function getSecretKey(): Uint8Array {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "SESSION_SECRET não definida. Configure a variável no arquivo .env.",
    );
  }
  return new TextEncoder().encode(secret);
}

/** Assina um JWT com os dados públicos do usuário. */
export async function signSession(user: SessionUser): Promise<string> {
  return await new SignJWT({ name: user.name, email: user.email })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime(`${SESSION_MAX_AGE}s`)
    .sign(getSecretKey());
}

/**
 * Verifica a assinatura/validade do token e devolve o usuário da sessão.
 * Retorna `null` para qualquer token ausente, inválido ou expirado — sem lançar.
 */
export async function verifySession(
  token: string,
): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, getSecretKey());
    if (
      typeof payload.sub !== "string" ||
      typeof payload.name !== "string" ||
      typeof payload.email !== "string"
    ) {
      return null;
    }
    return { id: payload.sub, name: payload.name, email: payload.email };
  } catch {
    return null;
  }
}

/** Monta o header `Set-Cookie` que grava a sessão no navegador (HTTPOnly). */
export function buildSessionSetCookie(token: string): string {
  return serializeSessionCookie(token, SESSION_MAX_AGE);
}

/** Monta o header `Set-Cookie` que apaga a sessão (logout). */
export function buildSessionClearCookie(): string {
  return serializeSessionCookie("", 0);
}

function serializeSessionCookie(value: string, maxAge: number): string {
  const parts = [
    `${SESSION_COOKIE_NAME}=${value}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAge}`,
  ];
  // Em produção o cookie só trafega por HTTPS.
  if (process.env.NODE_ENV === "production") {
    parts.push("Secure");
  }
  return parts.join("; ");
}
