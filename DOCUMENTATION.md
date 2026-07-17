# Simulador Método 3A — Documentação do Projeto

> Landing page (página de vendas) para o **Simulador Método 3A**, uma plataforma SaaS
> voltada a consultores de consórcio. O objetivo da página é converter visitantes em
> assinantes do simulador.

---

## 1. Visão geral

O **Método 3A** é o fluxo comercial promovido pela página, baseado em três pilares:

| Pilar | Descrição |
|-------|-----------|
| **A**lavancagem | Alavancagem financeira — multiplicar o poder de compra via crédito, lances e contemplação. |
| **A**quisição | Aquisição patrimonial — construção de patrimônio real (imóveis, veículos, serviços). |
| **A**posentadoria | Aposentadoria projetada — converter consórcios em renda futura previsível. |

O produto final (o simulador em si) **não está incluído** neste repositório — aqui existe
apenas a **página de venda** (single-page) que apresenta o produto e direciona para os planos.

---

## 2. Stack tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, com SSR) |
| Roteamento | TanStack Router (file-based routing) |
| Build tool | Vite 8 + `@lovable.dev/vite-tanstack-config` |
| Estilização | Tailwind CSS v4 (configuração via CSS, não JS) |
| Animações | [Motion](https://motion.dev) (framer-motion) |
| UI Kit | shadcn/ui + Radix UI (~45 componentes) |
| Estado / dados | TanStack React Query |
| Formulários | React Hook Form + Zod |
| Gráficos | Recharts |
| Ícones | lucide-react |
| Deploy | Cloudflare (via Nitro) |
| Gerenciador de pacotes | Bun (`bun.lock`) / npm (`package-lock.json`) |

---

## 3. Estrutura de pastas

```
salepageSimulador3A/
├── project/
│   └── project.json          # Metadados do template (Lovable / TanStack)
├── public/                   # Assets estáticos servidos diretamente
├── src/
│   ├── assets/               # Imagens (hero-mockup.jpg, devices-mockup.jpg)
│   ├── components/           # Biblioteca UI (shadcn/ui) — ~45 componentes
│   ├── hooks/
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   ├── error-capture.ts
│   │   ├── error-page.ts
│   │   ├── lovable-error-reporting.ts
│   │   └── utils.ts          # helper cn() (clsx + tailwind-merge)
│   ├── routes/
│   │   ├── __root.tsx        # Layout raiz, SEO, páginas de erro/404
│   │   └── index.tsx         # ★ Toda a landing page
│   ├── routeTree.gen.ts      # Gerado automaticamente pelo router
│   ├── router.tsx            # Configuração do TanStack Router
│   ├── server.ts             # Entry SSR (wrapper de erro)
│   ├── start.ts
│   └── styles.css            # Design system (Tailwind v4 + tokens oklch)
├── AGENTS.md                 # Instruções (conexão com Lovable)
├── components.json           # Config do shadcn/ui
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 4. Arquivos-chave

### `src/routes/index.tsx` — a landing page

É o coração do projeto (~1.270 linhas). Contém **toda a página** dividida em componentes
de seção, renderizados em ordem dentro de `LandingPage`:

| Ordem | Componente | Seção | Âncora |
|-------|-----------|-------|--------|
| 1 | `Nav` | Cabeçalho fixo com navegação | `#top` |
| 2 | `Hero` | Título principal + CTAs + mockup | — |
| 3 | `TrustBar` | Barra de prova social | — |
| 4 | `Metodo` | Explicação do Método 3A | `#metodo` |
| 5 | `Diferenciais` | Grid "bento" de recursos | `#diferenciais` |
| 6 | `ComoFunciona` | Timeline de 5 passos | `#como-funciona` |
| 7 | `Demo` | Demonstração multi-dispositivo | `#demo` |
| 8 | `Beneficios` | Lista de benefícios | — |
| 9 | `ParaQuem` | Público-alvo | — |
| 10 | `Depoimentos` | Prova social / reviews | — |
| 11 | `Planos` | Tabela de preços | `#planos` |
| 12 | `FAQ` | Perguntas frequentes (acordeão) | `#faq` |
| 13 | `CTAFinal` | Chamada final para ação | `#cta` |
| 14 | `Footer` | Rodapé com links e redes | — |

**Componentes auxiliares** dentro do arquivo:
- `Reveal` — wrapper de animação fade-up on-scroll (respeita `prefers-reduced-motion`).
- `SectionEyebrow` — rótulo pequeno acima dos títulos de seção.
- `PrimaryButton` — botão/link com variantes `primary` | `secondary` | `ghost`.
- `FooterCol` — coluna de links do rodapé.

### `src/routes/__root.tsx` — layout raiz

- Define **meta tags** de SEO e Open Graph / Twitter Card.
- Carrega a fonte **Inter** do Google Fonts.
- Envolve a aplicação no `QueryClientProvider`.
- Define `NotFoundComponent` (404) e `ErrorComponent` (com report para o Lovable).

### `src/styles.css` — design system

- Tailwind CSS v4 configurado **via CSS** (`@theme inline`, `@utility`).
- Paleta em espaço de cor **`oklch`**:
  - `--navy` (azul escuro / primário)
  - `--royal` (azul royal / destaque)
  - `--growth` (verde / positivo)
  - `--surface`, `--surface-elevated`, `--border`, etc.
- Utilitários customizados: `container-page`, `text-gradient`, `bg-hero-glow`,
  `glass-card`, `card-elevated`, `card-elevated-hover`, `divider-soft`.
- Fonte: **Inter** com font-features ativadas.

---

## 5. Roteamento

O projeto usa **file-based routing** do TanStack Router. Atualmente existe **apenas uma
rota**: `/` ([src/routes/index.tsx](src/routes/index.tsx)).

Toda a navegação interna é feita por **âncoras** (`#metodo`, `#planos`, `#faq`, etc.),
com `scroll-behavior: smooth` definido no CSS. Não há páginas internas nem o simulador
funcional — é uma página única de conversão.

---

## 6. Como rodar

Scripts disponíveis em `package.json`:

```bash
# Instalar dependências (Bun recomendado, npm também funciona)
bun install

# Ambiente de desenvolvimento
bun run dev          # vite dev

# Build de produção
bun run build        # vite build

# Build em modo desenvolvimento
bun run build:dev

# Preview do build
bun run preview

# Lint e formatação
bun run lint         # eslint
bun run format       # prettier --write
```

> No Windows PowerShell, use `;` em vez de `&&` para encadear comandos.

---

## 7. Integração com Lovable

Este projeto está conectado ao [Lovable](https://lovable.dev):

- Commits enviados ao branch conectado **sincronizam de volta** para o editor Lovable.
- **Evite reescrever histórico do git** (force push, rebase/amend/squash em commits já
  enviados), pois isso reescreve o histórico do lado do Lovable.
- Mantenha o branch sempre em estado funcional.
- `vite.config.ts` usa `@lovable.dev/vite-tanstack-config`, que já inclui os plugins
  do TanStack, Tailwind, Nitro, alias `@`, injeção de env `VITE_*` e loggers de erro —
  **não adicione esses plugins manualmente**.

---

## 8. Pontos de atenção / TODOs

- **Planos**: há **4 planos** definidos (`bronze`, `silver`, `gold`, `platinum`), mas o
  grid usa `lg:grid-cols-3`, então no desktop os 4 cards não se distribuem de forma ideal.
- **Conteúdo placeholder**:
  - Todos os planos têm a mesma descrição (`"Para consultores que querem começar hoje."`).
  - Links de contato do rodapé e redes sociais apontam para `#`.
- **Componentes UI não utilizados**: a maioria dos ~45 componentes em `src/components`
  ainda não é usada na landing (vieram do template shadcn/ui).
- Textos de métricas (`+38% conversão`, `+2.400 consultores`, `4.9/5`) são de marketing
  e devem ser validados antes de publicar.

---

## 9. Convenções de código

- **TypeScript** em todo o projeto.
- Componentes React funcionais.
- Estilização exclusivamente via classes Tailwind + utilitários customizados.
- Alias de import `@/` → `src/` (ex.: `@/assets/hero-mockup.jpg`).
- Formatação via Prettier; linting via ESLint (config em `eslint.config.js`).
