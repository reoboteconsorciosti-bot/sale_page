import { createFileRoute } from "@tanstack/react-router";

import { handleRouteError, json } from "@/lib/http";

/**
 * POST /api/auth/logout
 *
 * Encerra a sessão apagando o Cookie HTTPOnly. Não toca no banco — a sessão é
 * stateless (JWT), então basta instruir o navegador a remover o cookie.
 */
export const Route = createFileRoute("/api/auth/logout")({
  server: {
    handlers: {
      POST: async () => {
        try {
          const { buildSessionClearCookie } = await import(
            "@/server/auth/session"
          );
          return json(
            { success: true },
            { headers: { "Set-Cookie": buildSessionClearCookie() } },
          );
        } catch (error) {
          return handleRouteError(error);
        }
      },
    },
  },
});
