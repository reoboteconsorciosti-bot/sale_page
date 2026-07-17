import { createFileRoute } from "@tanstack/react-router";

import { handleRouteError, json, readJsonBody } from "@/lib/http";

/**
 * POST /api/auth/register
 *
 * Handler HTTP fino: apenas lê o corpo, delega para o service e formata a
 * resposta. Toda a regra de negócio vive em `auth.service`.
 *
 * O service é importado dinamicamente dentro do handler para garantir que o
 * código server-only (Prisma + bcrypt) nunca seja incluído no bundle do cliente.
 */
export const Route = createFileRoute("/api/auth/register")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await readJsonBody(request);
          const { registerUser } = await import(
            "@/server/services/auth.service"
          );
          await registerUser(body);
          return json({ success: true }, { status: 201 });
        } catch (error) {
          return handleRouteError(error);
        }
      },
    },
  },
});
