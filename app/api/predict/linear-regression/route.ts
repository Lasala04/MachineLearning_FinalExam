import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { month_1_sales, month_2_sales, month_3_sales } = await request.json()

    // Validate inputs
    if (!month_1_sales || !month_2_sales || !month_3_sales) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Linear Regression Formula: y = mx + b
    const months = [month_1_sales, month_2_sales, month_3_sales]
    const n = months.length
    const xValues = [1, 2, 3]
    
    const sumX = xValues.reduce((a, b) => a + b, 0)
    const sumY = months.reduce((a, b) => a + b, 0)
    const sumXY = xValues.reduce((sum, x, i) => sum + x * months[i], 0)
    const sumX2 = xValues.reduce((sum, x) => sum + x * x, 0)

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX)
    const intercept = (sumY - slope * sumX) / n

    const nextMonthPrediction = slope * 4 + intercept

    // Calculate R-squared for confidence
    const yMean = sumY / n
    const ssTotal = months.reduce((sum, y) => sum + Math.pow(y - yMean, 2), 0)
    const predictions = xValues.map(x => slope * x + intercept)
    const ssRes = months.reduce((sum, y, i) => sum + Math.pow(y - predictions[i], 2), 0)
    const rSquared = 1 - (ssRes / ssTotal)
    const confidence = Math.round(rSquared * 100)

    return NextResponse.json({
      success: true,
      prediction: Math.round(nextMonthPrediction),
      confidence: Math.max(confidence, 50), // Minimum 50% confidence
      algorithm: 'Linear Regression',
      interpretation: `Based on your sales trend (${month_1_sales} → ${month_2_sales} → ${month_3_sales}), next month's predicted sales: $${Math.round(nextMonthPrediction).toLocaleString()}`,
      formula: `y = ${slope.toFixed(2)}x + ${intercept.toFixed(2)}`
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Prediction failed: ' + String(error) },
      { status: 500 }
    )
  }
}