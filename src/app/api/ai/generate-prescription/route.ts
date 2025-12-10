import { NextRequest, NextResponse } from 'next/server'
import { openai, AI_CONFIG, MEDICAL_SYSTEM_PROMPT } from '@/lib/openai/client'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      symptoms, 
      diagnosis, 
      patientAge, 
      patientGender,
      allergies = [],
      currentMedications = [],
      medicalHistory = []
    } = body

    // Validate input
    if (!symptoms || !diagnosis) {
      return NextResponse.json(
        { error: 'Symptoms and diagnosis are required' },
        { status: 400 }
      )
    }

    // Build user prompt
    const userPrompt = `
Patient Information:
- Age: ${patientAge || 'Not specified'}
- Gender: ${patientGender || 'Not specified'}
- Allergies: ${allergies.length > 0 ? allergies.join(', ') : 'None'}
- Current Medications: ${currentMedications.length > 0 ? currentMedications.join(', ') : 'None'}
- Medical History: ${medicalHistory.length > 0 ? medicalHistory.join(', ') : 'None'}

Symptoms:
${symptoms}

Diagnosis:
${diagnosis}

Please generate a complete prescription with medicines, dosages, and instructions.
`

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: AI_CONFIG.model,
      temperature: AI_CONFIG.temperature,
      max_tokens: AI_CONFIG.max_tokens,
      messages: [
        { role: 'system', content: MEDICAL_SYSTEM_PROMPT },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: 'json_object' }
    })

    const prescriptionData = JSON.parse(
      completion.choices[0].message.content || '{}'
    )

    // Return prescription
    return NextResponse.json({
      success: true,
      prescription: prescriptionData,
      metadata: {
        model: AI_CONFIG.model,
        timestamp: new Date().toISOString(),
        tokensUsed: completion.usage?.total_tokens
      }
    })

  } catch (error: any) {
    console.error('AI Prescription Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to generate prescription',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
