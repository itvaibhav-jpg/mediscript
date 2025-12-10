import { NextRequest, NextResponse } from 'next/server'
import { checkMockInteractions } from '@/lib/demo/mock-ai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { medicines } = body

    if (!medicines || medicines.length === 0) {
      return NextResponse.json(
        { error: 'Medicines list is required' },
        { status: 400 }
      )
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Check interactions
    const analysis = checkMockInteractions(medicines)

    return NextResponse.json({
      success: true,
      analysis,
      timestamp: new Date().toISOString(),
      note: 'Demo mode - Deploy with OpenAI for real-time interaction checking'
    })

  } catch (error: any) {
    console.error('Demo Interaction Check Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to check interactions',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
