import { AppError } from "./errors";

/** Cria uma resposta JSON com o content-type correto. */
export function json(
  data: unknown,
  init?: { status?: number; headers?: HeadersInit },
): Response {
  return new Response(JSON.stringify(data), {
    status: init?.status ?? 200,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...init?.headers,
    },
  });
}

/** Lê e faz o parse do corpo JSON da requisição de forma segura. */
export async function readJsonBody<T = unknown>(request: Request): Promise<T> {
  try {
    return (await request.json()) as T;
  } catch {
    throw new AppError("Corpo da requisição inválido.", 400, "INVALID_BODY");
  }
}

/**
 * Converte qualquer erro em uma resposta JSON segura.
 *
 * - Erros de domínio (AppError) viram respostas com a mensagem e o status certos.
 * - Qualquer outro erro é logado no servidor e retorna 500 genérico, sem vazar
 *   detalhes internos para o cliente.
 */
export function handleRouteError(error: unknown): Response {
  if (error instanceof AppError) {
    return json(
      { success: false, message: error.message, code: error.code },
      { status: error.statusCode },
    );
  }

  console.error("[api] erro não tratado:", error);
  return json(
    { success: false, message: "Erro interno. Tente novamente em instantes." },
    { status: 500 },
  );
}
