import { NextRequest, NextResponse } from 'next/server'
import { openai, AI_CONFIG, MEDICAL_SYSTEM_PROMPT } from '@/lib/openai/client'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    const patientAge = formData.get('patientAge') as string
    const patientGender = formData.get('patientGender') as string

    if (!audioFile) {
      return NextResponse.json(
        { error: 'Audio file is required' },
        { status: 400 }
      )
    }

    // Step 1: Transcribe audio using Whisper
    const transcription = await openai.audio.transcriptions.create({
      file: audioFile,
      model: 'whisper-1',
      language: 'en', // Can be changed to 'hi' for Hindi
      response_format: 'json'
    })

    const transcribedText = transcription.text

    // Step 2: Extract symptoms and diagnosis from transcription
    const extractionPrompt = `
From the following doctor's voice note, extract:
1. Patient symptoms
2. Diagnosis
3. Any special instructions

Doctor's note:
"${transcribedText}"

Format as JSON:
{
  "symptoms": "extracted symptoms",
  "diagnosis": "extracted diagnosis",
  "specialInstructions": "any special notes"
}
`

    const extraction = await openai.chat.completions.create({
      model: 'gpt-4-turbo-preview',
      temperature: 0.3,
      messages: [
        { role: 'system', content: 'You are a medical transcription expert.' },
        { role: 'user', content: extractionPrompt }
      ],
      response_format: { type: 'json_object' }
    })

    const extractedData = JSON.parse(
      extraction.choices[0].message.content || '{}'
    )

    // Step 3: Generate prescription
    const prescriptionPrompt = `
Patient Information:
- Age: ${patientAge || 'Not specified'}
- Gender: ${patientGender || 'Not specified'}

Symptoms:
${extractedData.symptoms}

Diagnosis:
${extractedData.diagnosis}

Special Instructions:
${extractedData.specialInstructions || 'None'}

Please generate a complete prescription.
`

    const prescription = await openai.chat.completions.create({
      model: AI_CONFIG.model,
      temperature: AI_CONFIG.temperature,
      max_tokens: AI_CONFIG.max_tokens,
      messages: [
        { role: 'system', content: MEDICAL_SYSTEM_PROMPT },
        { role: 'user', content: prescriptionPrompt }
      ],
      response_format: { type: 'json_object' }
    })

    const prescriptionData = JSON.parse(
      prescription.choices[0].message.content || '{}'
    )

    return NextResponse.json({
      success: true,
      transcription: transcribedText,
      extracted: extractedData,
      prescription: prescriptionData,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Voice-to-Prescription Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process voice prescription',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
