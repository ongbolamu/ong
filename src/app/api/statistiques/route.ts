import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Import dynamique pour éviter les erreurs de build
    const { prisma } = await import('@/lib/prisma')
    
    const statistiques = await prisma.statistique.findMany({
      orderBy: {
        nom: 'asc'
      }
    })

    return NextResponse.json(statistiques)
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des statistiques' },
      { status: 500 }
    )
  }
} 