import { NextRequest, NextResponse } from 'next/server'
import { generateMockPrescription } from '@/lib/demo/mock-ai'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      symptoms, 
      diagnosis, 
      patientAge, 
      patientGender 
    } = body

    // Validate input
    if (!symptoms || !diagnosis) {
      return NextResponse.json(
        { error: 'Symptoms and diagnosis are required' },
        { status: 400 }
      )
    }

    // Simulate AI processing delay (realistic UX)
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Generate mock prescription
    const prescription = generateMockPrescription(
      symptoms,
      diagnosis,
      patientAge,
      patientGender
    )

    return NextResponse.json({
      success: true,
      prescription,
      metadata: {
        model: 'Demo Mode (GPT-4 Simulation)',
        timestamp: new Date().toISOString(),
        note: 'This is a demo response. Deploy with OpenAI API key for real AI.'
      }
    })

  } catch (error: any) {
    console.error('Demo Prescription Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to generate prescription',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
