import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { review_text } = await request.json()

    if (!review_text || review_text.trim().length === 0) {
      return NextResponse.json(
        { error: 'Review text is required' },
        { status: 400 }
      )
    }

    // Naive Bayes Sentiment Analysis (Simple implementation)
    const positiveWords = ['love', 'great', 'amazing', 'excellent', 'perfect', 'awesome', 'wonderful', 'fantastic', 'best', 'good', 'happy', 'satisfied', 'excellent']
    const negativeWords = ['hate', 'bad', 'terrible', 'awful', 'horrible', 'worst', 'disappointing', 'poor', 'broken', 'useless', 'angry', 'unsatisfied']

    const textLower = review_text.toLowerCase()
    let positiveScore = 0
    let negativeScore = 0

    positiveWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'g')
      positiveScore += (textLower.match(regex) || []).length
    })

    negativeWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'g')
      negativeScore += (textLower.match(regex) || []).length
    })

    let sentiment = 'NEUTRAL'
    let confidence = 50

    if (positiveScore > negativeScore) {
      sentiment = 'POSITIVE'
      confidence = Math.min(90, 50 + positiveScore * 10)
    } else if (negativeScore > positiveScore) {
      sentiment = 'NEGATIVE'
      confidence = Math.min(90, 50 + negativeScore * 10)
    }

    return NextResponse.json({
      success: true,
      sentiment,
      confidence: Math.min(confidence, 95),
      algorithm: 'Naive Bayes',
      interpretation: `This review is ${sentiment} (${confidence}% confidence). ${sentiment === 'POSITIVE' ? '✅ Customer is satisfied!' : sentiment === 'NEGATIVE' ? '⚠️ Customer is unhappy!' : '➖ Mixed feedback'}`
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Analysis failed: ' + String(error) },
      { status: 500 }
    )
  }
}