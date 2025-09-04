![Apoia.Dev](public/image.png)
# 🚀 Apoia-Dev

Uma plataforma moderna para apoiar criadores de conteúdo, construída com Next.js 14, TypeScript e Prisma.

## ✨ Funcionalidades

- 🔐 **Autenticação segura** com NextAuth.js
- 👤 **Perfis de criadores** personalizáveis
- 📊 **Dashboard analítico** com estatísticas
- 💰 **Sistema de doações** integrado
- 📱 **Design responsivo** com Tailwind CSS
- 🎨 **Interface moderna** com componentes UI reutilizáveis
- 🗄️ **Banco de dados** robusto com Prisma

## 🛠️ Tecnologias

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Backend**: Next.js API Routes
- **Database**: Prisma ORM
- **Authentication**: NextAuth.js
- **UI Components**: Radix UI, shadcn/ui
- **Deployment**: Vercel (recomendado)

## 🚀 Como executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Banco de dados (PostgreSQL recomendado)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/apoia-dev.git
cd apoia-dev
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp example.env .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/apoia_dev"
NEXTAUTH_SECRET="seu-secret-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Configure o banco de dados**
```bash
npx prisma generate
npx prisma db push
# ou para desenvolvimento
npx prisma migrate dev
```

5. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js 13+
│   ├── creator/           # Páginas dos criadores
│   ├── dashboard/         # Dashboard do usuário
│   └── globals.css        # Estilos globais
├── components/            # Componentes reutilizáveis
│   └── ui/               # Componentes base (shadcn/ui)
├── lib/                   # Utilitários e configurações
├── types/                 # Definições de tipos TypeScript
└── generated/             # Arquivos gerados pelo Prisma
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm run start` - Executa o servidor de produção
- `npm run lint` - Executa o linter
- `npm run type-check` - Verifica os tipos TypeScript

## 🗄️ Banco de Dados

O projeto usa Prisma como ORM. Para gerenciar o banco:

```bash
# Gerar cliente Prisma
npx prisma generate

# Aplicar migrações
npx prisma migrate dev

# Visualizar dados (Prisma Studio)
npx prisma studio

# Resetar banco (cuidado!)
npx prisma migrate reset
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras plataformas

- **Netlify**: Configure o build command e output directory
- **Railway**: Conecte diretamente ao repositório
- **Docker**: Use o Dockerfile (se disponível)

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- 📧 Email: seu-email@exemplo.com
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/apoia-dev/issues)
- 💬 Discord: [Link do servidor]

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React
- [Prisma](https://www.prisma.io/) - ORM moderno
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [NextAuth.js](https://next-auth.js.org/) - Autenticação

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
