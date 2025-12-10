import { NextRequest, NextResponse } from 'next/server'
import { openai, AI_CONFIG } from '@/lib/openai/client'

const INTERACTION_SYSTEM_PROMPT = `You are a pharmaceutical expert AI that checks drug interactions.

Analyze the given medicines and identify:
1. Dangerous interactions (contraindicated)
2. Moderate interactions (use with caution)
3. Minor interactions (monitor)
4. Safe combinations

FORMAT YOUR RESPONSE AS JSON:
{
  "overallRisk": "low" | "moderate" | "high" | "critical",
  "interactions": [
    {
      "medicines": ["Medicine A", "Medicine B"],
      "severity": "critical" | "high" | "moderate" | "low",
      "description": "Description of interaction",
      "recommendation": "What to do",
      "alternatives": ["Alternative medicines if needed"]
    }
  ],
  "safeToUse": true | false,
  "warnings": ["List of warnings"],
  "recommendations": ["List of recommendations"]
}

Be extremely cautious and prioritize patient safety.`

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { medicines, patientAge, patientConditions = [] } = body

    if (!medicines || medicines.length === 0) {
      return NextResponse.json(
        { error: 'Medicines list is required' },
        { status: 400 }
      )
    }

    const userPrompt = `
Patient Age: ${patientAge || 'Not specified'}
Medical Conditions: ${patientConditions.join(', ') || 'None'}

Medicines to check:
${medicines.map((m: any, i: number) => `${i + 1}. ${m.name} - ${m.dosage}`).join('\n')}

Please analyze these medicines for potential interactions.
`

    const completion = await openai.chat.completions.create({
      model: AI_CONFIG.model,
      temperature: 0.3, // Lower temperature for more consistent results
      max_tokens: 1500,
      messages: [
        { role: 'system', content: INTERACTION_SYSTEM_PROMPT },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: 'json_object' }
    })

    const interactionData = JSON.parse(
      completion.choices[0].message.content || '{}'
    )

    return NextResponse.json({
      success: true,
      analysis: interactionData,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Drug Interaction Check Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to check interactions',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
