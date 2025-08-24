# Prisma no Projeto Apoia-Dev

## Configuração

O Prisma foi configurado com sucesso no projeto! Aqui está o que foi configurado:

### 📁 Estrutura Criada
- `prisma/schema.prisma` - Schema do banco de dados
- `prisma/seed.ts` - Script para popular o banco com dados iniciais
- `src/lib/prisma.ts` - Cliente Prisma configurado para a aplicação

### 🗄️ Modelos do Banco
- **User** - Usuários da plataforma
- **Creator** - Perfis de criadores de conteúdo
- **Goal** - Metas de financiamento dos criadores
- **Donation** - Doações realizadas
- **Post** - Posts dos criadores
- **Analytics** - Dados analíticos

### 🚀 Scripts Disponíveis

```bash
# Gerar cliente Prisma
npm run db:generate

# Fazer push do schema para o banco (desenvolvimento)
npm run db:push

# Criar e aplicar migrações
npm run db:migrate

# Abrir Prisma Studio (interface visual)
npm run db:studio

# Executar seed do banco
npm run db:seed
```

### 🔧 Configuração do Banco

1. **PostgreSQL** (padrão):
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/apoia_dev"
   ```

2. **SQLite** (alternativa para desenvolvimento):
   ```env
   DATABASE_URL="file:./dev.db"
   ```

### 📝 Como Usar

1. **Importar o cliente Prisma:**
   ```typescript
   import { prisma } from '@/lib/prisma'
   ```

2. **Exemplo de uso:**
   ```typescript
   // Criar usuário
   const user = await prisma.user.create({
     data: {
       email: 'user@example.com',
       username: 'username',
       name: 'Nome do Usuário'
     }
   })

   // Buscar criador com relacionamentos
   const creator = await prisma.creator.findUnique({
     where: { username: 'username' },
     include: {
       user: true,
       goals: true,
       donations: true
     }
   })
   ```

### 🎯 Próximos Passos

1. Configure sua variável `DATABASE_URL` no arquivo `.env`
2. Execute `npm run db:push` para criar as tabelas
3. Execute `npm run db:seed` para popular com dados iniciais
4. Use `npm run db:studio` para visualizar e editar dados

### 📚 Documentação

- [Prisma Docs](https://www.prisma.io/docs)
- [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)
- [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema)
