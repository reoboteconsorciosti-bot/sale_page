import { createServerFn } from "@tanstack/react-start";

import type { PublicUser } from "@/types/auth";

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
export const getSessionUser = createServerFn({ method: "GET" }).handler(
  async (): Promise<PublicUser | null> => {
    const { getCookie } = await import("@tanstack/react-start/server");
    const { verifySession, SESSION_COOKIE_NAME } = await import(
      "@/server/auth/session"
    );

    const token = getCookie(SESSION_COOKIE_NAME);
    if (!token) return null;

    return await verifySession(token);
  },
);
