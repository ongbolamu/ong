import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Import dynamique pour éviter les erreurs de build
    const { prisma } = await import('@/lib/prisma')
    
    const equipe = await prisma.membreEquipe.findMany({
      where: {
        statut: 'ACTIF'
      },
      orderBy: {
        dateAdhesion: 'asc'
      }
    })

    return NextResponse.json(equipe)
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'équipe:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'équipe' },
      { status: 500 }
    )
  }
} 