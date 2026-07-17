import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

/**
 * Prisma singleton.
 *
 * Em desenvolvimento o Vite/HMR recria os módulos com frequência, o que criaria
 * várias instâncias do PrismaClient (e esgotaria o pool de conexões). Guardamos a
 * instância em `globalThis` para reaproveitá-la entre reloads.
 *
 * Prisma 7 exige um driver adapter (aqui, `@prisma/adapter-pg`) para se conectar
 * ao PostgreSQL — a URL não fica mais no bloco `datasource` do schema.
 *
 * IMPORTANTE: este módulo é *server-only*. Nunca deve ser importado no bundle do
 * cliente — o acesso ao banco acontece exclusivamente através das API Routes.
 */
const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL não definida. Configure a variável no arquivo .env.",
  );
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "production" ? ["error"] : ["error", "warn"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
