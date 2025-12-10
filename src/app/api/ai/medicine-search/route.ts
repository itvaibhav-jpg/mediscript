import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'
import { openai } from '@/lib/openai/client'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')
    const useAI = searchParams.get('ai') === 'true'

    if (!query) {
      return NextResponse.json(
        { error: 'Search query is required' },
        { status: 400 }
      )
    }

    // Basic database search
    const { data: medicines, error } = await supabase
      .from('medicines')
      .select('*')
      .or(`generic_name.ilike.%${query}%,brand_names.cs.{${query}}`)
      .limit(10)

    if (error) throw error

    // If AI enhancement is requested
    if (useAI && medicines.length > 0) {
      const aiPrompt = `
Given the search query: "${query}"

Available medicines:
${medicines.map((m, i) => `${i + 1}. ${m.generic_name} (${m.brand_names?.join(', ')})`).join('\n')}

Provide:
1. Best match for the query
2. Generic alternatives
3. Price comparison insights
4. Usage recommendations

Format as JSON:
{
  "bestMatch": "medicine name",
  "alternatives": ["list of alternatives"],
  "priceInsights": "price comparison",
  "recommendations": "usage recommendations"
}
`

      const completion = await openai.chat.completions.create({
        model: 'gpt-4-turbo-preview',
        temperature: 0.3,
        max_tokens: 500,
        messages: [
          { role: 'system', content: 'You are a pharmaceutical search expert.' },
          { role: 'user', content: aiPrompt }
        ],
        response_format: { type: 'json_object' }
      })

      const aiInsights = JSON.parse(
        completion.choices[0].message.content || '{}'
      )

      return NextResponse.json({
        success: true,
        medicines,
        aiInsights,
        count: medicines.length
      })
    }

    return NextResponse.json({
      success: true,
      medicines,
      count: medicines.length
    })

  } catch (error: any) {
    console.error('Medicine Search Error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to search medicines',
        details: error.message 
      },
      { status: 500 }
    )
  }
}
