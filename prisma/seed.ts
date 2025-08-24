import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  // Criar usuário de exemplo
  const user = await prisma.user.upsert({
    where: { email: 'exemplo@seudominio.com' },
    update: {},
    create: {
      email: 'exemplo@seudominio.com',
      username: 'exemplo',
      name: 'Usuário Exemplo',
      bio: 'Usuário de exemplo para demonstração'
    }
  })

  // Criar perfil de criador de exemplo
  const creator = await prisma.creator.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      userId: user.id,
      username: 'exemplo',
      displayName: 'Criador Exemplo',
      bio: 'Criador de conteúdo de exemplo'
    }
  })

  // Criar meta de exemplo
  const goal = await prisma.goal.upsert({
    where: { id: 'goal-1' },
    update: {},
    create: {
      id: 'goal-1',
      creatorId: creator.id,
      title: 'Meta de Exemplo',
      description: 'Meta de exemplo para demonstração da plataforma',
      targetAmount: 1000.00,
      currentAmount: 0.00
    }
  })

  console.log('✅ Seed concluído com sucesso!')
  console.log('👤 Usuário criado:', user.username)
  console.log('🎯 Criador criado:', creator.displayName)
  console.log('🎯 Meta criada:', goal.title)
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
