import { prisma } from "@/lib/prisma";

/**
 * Repositório de usuários — única camada que fala diretamente com o Prisma.
 *
 * Services e rotas dependem desta interface, nunca do Prisma diretamente. Isso
 * facilita testes (mock) e uma futura troca de ORM/estratégia de persistência.
 */

export interface CreateUserData {
  name: string;
  lastName: string;
  phone: string | null;
  email: string;
  password: string; // já deve chegar como hash
}

export const userRepository = {
  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },

  create(data: CreateUserData) {
    return prisma.user.create({ data });
  },
};
