import { z } from "zod";

import { ValidationError } from "@/lib/errors";

/**
 * Schemas de validação (zod) + sanitização de entrada.
 *
 * `trim()` remove espaços; `toLowerCase()` normaliza o e-mail para evitar
 * duplicatas por diferença de caixa.
 */

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Informe seu nome.").max(80),
  lastName: z.string().trim().min(1, "Informe seu sobrenome.").max(80),
  phone: z
    .string()
    .trim()
    .min(8, "Telefone inválido.")
    .max(20, "Telefone inválido."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Informe um e-mail válido."),
  password: z
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres.")
    .max(72, "A senha é muito longa."),
  acceptTerms: z.literal(true, {
    errorMap: () => ({ message: "É necessário aceitar os Termos de Uso." }),
  }),
});

// Mensagem genérica no login para não revelar se o e-mail existe.
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("E-mail ou senha inválidos."),
  password: z.string().min(1, "E-mail ou senha inválidos."),
});

/**
 * Valida `data` contra um schema e retorna o valor tipado e sanitizado.
 * Em caso de falha, lança `ValidationError` com a primeira mensagem.
 */
export function validate<TSchema extends z.ZodTypeAny>(
  schema: TSchema,
  data: unknown,
): z.infer<TSchema> {
  const result = schema.safeParse(data);
  if (!result.success) {
    const message = result.error.issues[0]?.message ?? "Dados inválidos.";
    throw new ValidationError(message);
  }
  return result.data;
}
