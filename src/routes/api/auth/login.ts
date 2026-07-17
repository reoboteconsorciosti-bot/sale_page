import { createFileRoute } from "@tanstack/react-router";

import { handleRouteError, json, readJsonBody } from "@/lib/http";

/**
 * POST /api/auth/login
 *
 * Handler HTTP fino: lê o corpo, delega para o service e retorna o usuário
 * público (sem senha/hash). A regra de negócio vive em `auth.service`.
 *
 * O service é importado dinamicamente dentro do handler para manter o código
 * server-only (Prisma + bcrypt) fora do bundle do cliente.
 */
export const Route = createFileRoute("/api/auth/login")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await readJsonBody(request);
          const { loginUser } = await import("@/server/services/auth.service");
          const user = await loginUser(body);

          // Login válido: cria a sessão (JWT assinado) e grava no Cookie HTTPOnly.
          const { signSession, buildSessionSetCookie } = await import(
            "@/server/auth/session"
          );
          const token = await signSession(user);

          return json(
            { success: true, user },
            { headers: { "Set-Cookie": buildSessionSetCookie(token) } },
          );
        } catch (error) {
          return handleRouteError(error);
        }
      },
    },
  },
});
