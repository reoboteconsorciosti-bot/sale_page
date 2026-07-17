/**
 * Erros de domínio da aplicação.
 *
 * Cada erro carrega um `statusCode` HTTP e uma `message` segura para exibir ao
 * usuário. A camada de rota converte esses erros em respostas JSON, sem nunca
 * vazar detalhes internos (stack traces, erros do Prisma, etc.).
 */
export class AppError extends Error {
  readonly statusCode: number;
  readonly code: string;

  constructor(message: string, statusCode = 400, code = "APP_ERROR") {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.code = code;
  }
}

/** 400 — entrada inválida (falha de validação). */
export class ValidationError extends AppError {
  constructor(message = "Dados inválidos.") {
    super(message, 400, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/** 401 — credenciais inválidas / não autenticado. */
export class UnauthorizedError extends AppError {
  constructor(message = "Não autorizado.") {
    super(message, 401, "UNAUTHORIZED");
    this.name = "UnauthorizedError";
  }
}

/** 409 — conflito de estado (ex.: e-mail já cadastrado). */
export class ConflictError extends AppError {
  constructor(message = "Conflito de dados.") {
    super(message, 409, "CONFLICT");
    this.name = "ConflictError";
  }
}
