# ApoiaDev - Plataforma para Criadores de Conteúdo

Este é um projeto [Next.js](https://nextjs.org) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Sobre o Projeto

ApoiaDev é uma plataforma que permite aos criadores de conteúdo receberem doações diretamente dos seus seguidores através de páginas personalizadas e elegantes.

## Como Começar

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.tsx`. A página atualiza automaticamente conforme você edita o arquivo.

Este projeto usa [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente [Geist](https://vercel.com/font), uma nova família de fontes da Vercel.

## Banco de Dados

Este projeto usa Prisma como ORM. Para configurar o banco de dados:

```bash
# Gerar cliente Prisma
npm run db:generate

# Sincronizar esquema com o banco
npm run db:push

# Executar migrações
npm run db:migrate

# Abrir Prisma Studio
npm run db:studio

# Executar seed do banco
npm run db:seed
```

## Saiba Mais

Para saber mais sobre Next.js, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre recursos e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir [o repositório GitHub do Next.js](https://github.com/vercel/next.js) - seu feedback e contribuições são bem-vindos!

## Deploy na Vercel

A maneira mais fácil de fazer deploy da sua aplicação Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
