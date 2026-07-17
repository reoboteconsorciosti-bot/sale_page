import bcrypt from "bcrypt";

import { ConflictError, UnauthorizedError } from "@/lib/errors";
import type { PublicUser } from "@/types/auth";

import { userRepository } from "../repositories/user.repository";
import {
  loginSchema,
  registerSchema,
  validate,
} from "../validators/auth.validator";

/**
 * Regras de negócio da autenticação.
 *
 * Esta camada orquestra validação, repositório e criptografia. Não conhece
 * HTTP (Request/Response) — apenas recebe dados, aplica as regras e devolve
 * um `PublicUser` ou lança um erro de domínio.
 */

const SALT_ROUNDS = 10;

/** Cadastra um novo usuário. Lança ConflictError se o e-mail já existir. */
export async function registerUser(input: unknown): Promise<PublicUser> {
  const data = validate(registerSchema, input);

  const existingUser = await userRepository.findByEmail(data.email); 
  if (existingUser) {
    throw new ConflictError("Já existe uma conta com este e-mail.");
  }

  const passwordHash = await bcrypt.hash(data.password, SALT_ROUNDS);

  const user = await userRepository.create({
    name: data.name,
    lastName: data.lastName,
    phone: data.phone ?? null,
    email: data.email,
    password: passwordHash,
  });

  // Nunca retornar senha/hash.
  return { id: user.id, name: user.name, email: user.email };
}

/** Autentica um usuário. Lança UnauthorizedError em qualquer falha. */
export async function loginUser(input: unknown): Promise<PublicUser> {
  const data = validate(loginSchema, input);

  const user = await userRepository.findByEmail(data.email);
  if (!user) {
    throw new UnauthorizedError("E-mail ou senha inválidos.");
  }

  const validPassword = await bcrypt.compare(data.password, user.password);
  if (!validPassword) {
    throw new UnauthorizedError("E-mail ou senha inválidos.");
  }

  return { id: user.id, name: user.name, email: user.email };
}
