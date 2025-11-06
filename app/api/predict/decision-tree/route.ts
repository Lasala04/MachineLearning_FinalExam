import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const {
      months_since_last_purchase,
      total_purchases,
      customer_complaints,
      email_engagement_rate
    } = await request.json()

    // Decision Tree Churn Prediction
    let churnScore = 0

    // Decision 1: Time since last purchase
    if (months_since_last_purchase > 12) {
      churnScore += 35
    } else if (months_since_last_purchase > 6) {
      churnScore += 20
    }

    // Decision 2: Total purchases
    if (total_purchases < 5) {
      churnScore += 25
    } else if (total_purchases < 10) {
      churnScore += 10
    }

    // Decision 3: Complaints
    churnScore += customer_complaints * 15

    // Decision 4: Email engagement
    if (email_engagement_rate < 20) {
      churnScore += 25
    } else if (email_engagement_rate < 50) {
      churnScore += 10
    }

    let riskLevel = 'LOW'
    if (churnScore > 60) riskLevel = 'HIGH'
    else if (churnScore > 35) riskLevel = 'MEDIUM'

    return NextResponse.json({
      success: true,
      churn_probability: Math.min(churnScore, 99),
      risk_level: riskLevel,
      algorithm: 'Decision Tree',
      interpretation: `Churn Probability: ${Math.min(churnScore, 99)}%. Risk Level: ${riskLevel}. ${riskLevel === 'HIGH' ? '⚠️ Recommend immediate retention action.' : 'Customer is stable.'}`
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Churn prediction failed: ' + String(error) },
      { status: 500 }
    )
  }
}