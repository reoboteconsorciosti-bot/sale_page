/**
 * Tipos compartilhados da autenticação.
 *
 * DTOs de entrada (payloads das requisições) e a representação pública de um
 * usuário (nunca inclui senha/hash).
 */

export interface RegisterInput {
  name: string;
  lastName: string;
  phone?: string;
  email: string;
  password: string;
  acceptTerms: boolean;
}

export interface LoginInput {
  email: string;
  password: string;
}

/** Usuário seguro para retorno ao cliente — jamais contém senha ou hash. */
export interface PublicUser {
  id: string;
  name: string;
  email: string;
}

export interface RegisterResponse {
  success: boolean;
  message?: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  user?: PublicUser;
}
