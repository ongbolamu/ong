import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    // Import dynamique pour éviter les erreurs de build
    const { prisma } = await import('@/lib/prisma')
    
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')

    const actualites = await prisma.actualite.findMany({
      where: {
        statut: 'PUBLIE'
      },
      include: {
        categories: true
      },
      orderBy: {
        datePublie: 'desc'
      },
      take: limit,
      skip: offset
    })

    const total = await prisma.actualite.count({
      where: {
        statut: 'PUBLIE'
      }
    })

    return NextResponse.json({
      actualites,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total
      }
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des actualités:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des actualités' },
      { status: 500 }
    )
  }
} 