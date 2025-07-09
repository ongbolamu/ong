import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  try {
    // Import dynamique pour éviter les erreurs de build
    const { prisma } = await import('@/lib/prisma')
    
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')
    const statut = searchParams.get('statut')

    const where = statut ? { statut: statut as any } : {}

    const actions = await prisma.action.findMany({
      where,
      include: {
        partenaires: true,
        beneficiaires: true
      },
      orderBy: {
        dateDebut: 'desc'
      },
      take: limit,
      skip: offset
    })

    const total = await prisma.action.count({ where })

    return NextResponse.json({
      actions,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total
      }
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des actions:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des actions' },
      { status: 500 }
    )
  }
} 