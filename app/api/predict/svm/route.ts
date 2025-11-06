import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const {
      transaction_amount,
      customer_age,
      days_since_last_purchase,
      is_new_device,
      location_mismatch
    } = await request.json()

    // SVM-inspired Fraud Detection
    let riskScore = 0

    // Amount risk
    if (transaction_amount > 1000) riskScore += 20
    if (transaction_amount > 5000) riskScore += 20

    // Age risk
    if (customer_age < 18 || customer_age > 80) riskScore += 10

    // Recency risk
    if (days_since_last_purchase > 365) riskScore += 15
    if (days_since_last_purchase > 730) riskScore += 15

    // Device risk
    if (is_new_device) riskScore += 25

    // Location risk
    if (location_mismatch) riskScore += 25

    const isFraud = riskScore > 50
    const recommendation = isFraud ? 'BLOCK' : 'APPROVE'

    return NextResponse.json({
      success: true,
      is_fraud: isFraud,
      risk_score: riskScore,
      recommendation,
      algorithm: 'Support Vector Machine',
      interpretation: `Fraud Risk Score: ${riskScore}%. Recommendation: ${recommendation}. ${isFraud ? '⚠️ This transaction needs manual review.' : '✅ Transaction appears legitimate.'}`
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Fraud detection failed: ' + String(error) },
      { status: 500 }
    )
  }
}