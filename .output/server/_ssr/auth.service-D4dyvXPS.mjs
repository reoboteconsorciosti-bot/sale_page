import { i as ValidationError, n as ConflictError, r as UnauthorizedError } from "./errors-Bn6YYVBv.mjs";
import { t as PrismaPgAdapterFactory } from "../_libs/@prisma/adapter-pg.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
//#region node_modules/.nitro/vite/services/ssr/assets/auth.service-D4dyvXPS.js
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
var connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL não definida. Configure a variável no arquivo .env.");
var globalForPrisma = globalThis;
function createPrismaClient() {
	return new PrismaClient({
		adapter: new PrismaPgAdapterFactory({ connectionString }),
		log: ["error"]
	});
}
var prisma = globalForPrisma.prisma ?? createPrismaClient();
var userRepository = {
	findByEmail(email) {
		return prisma.user.findUnique({ where: { email } });
	},
	create(data) {
		return prisma.user.create({ data });
	}
};
/**
* Schemas de validação (zod) + sanitização de entrada.
*
* `trim()` remove espaços; `toLowerCase()` normaliza o e-mail para evitar
* duplicatas por diferença de caixa.
*/
var registerSchema = objectType({
	name: stringType().trim().min(1, "Informe seu nome.").max(80),
	lastName: stringType().trim().min(1, "Informe seu sobrenome.").max(80),
	phone: stringType().trim().min(8, "Telefone inválido.").max(20, "Telefone inválido."),
	email: stringType().trim().toLowerCase().email("Informe um e-mail válido."),
	password: stringType().min(6, "A senha deve ter no mínimo 6 caracteres.").max(72, "A senha é muito longa."),
	acceptTerms: literalType(true, { errorMap: () => ({ message: "É necessário aceitar os Termos de Uso." }) })
});
var loginSchema = objectType({
	email: stringType().trim().toLowerCase().email("E-mail ou senha inválidos."),
	password: stringType().min(1, "E-mail ou senha inválidos.")
});
/**
* Valida `data` contra um schema e retorna o valor tipado e sanitizado.
* Em caso de falha, lança `ValidationError` com a primeira mensagem.
*/
function validate(schema, data) {
	const result = schema.safeParse(data);
	if (!result.success) throw new ValidationError(result.error.issues[0]?.message ?? "Dados inválidos.");
	return result.data;
}
/**
* Regras de negócio da autenticação.
*
* Esta camada orquestra validação, repositório e criptografia. Não conhece
* HTTP (Request/Response) — apenas recebe dados, aplica as regras e devolve
* um `PublicUser` ou lança um erro de domínio.
*/
var SALT_ROUNDS = 10;
/** Cadastra um novo usuário. Lança ConflictError se o e-mail já existir. */
async function registerUser(input) {
	const data = validate(registerSchema, input);
	if (await userRepository.findByEmail(data.email)) throw new ConflictError("Já existe uma conta com este e-mail.");
	const passwordHash = await bcrypt.hash(data.password, SALT_ROUNDS);
	const user = await userRepository.create({
		name: data.name,
		lastName: data.lastName,
		phone: data.phone ?? null,
		email: data.email,
		password: passwordHash
	});
	return {
		id: user.id,
		name: user.name,
		email: user.email
	};
}
/** Autentica um usuário. Lança UnauthorizedError em qualquer falha. */
async function loginUser(input) {
	const data = validate(loginSchema, input);
	const user = await userRepository.findByEmail(data.email);
	if (!user) throw new UnauthorizedError("E-mail ou senha inválidos.");
	if (!await bcrypt.compare(data.password, user.password)) throw new UnauthorizedError("E-mail ou senha inválidos.");
	return {
		id: user.id,
		name: user.name,
		email: user.email
	};
}
//#endregion
export { loginUser, registerUser };
