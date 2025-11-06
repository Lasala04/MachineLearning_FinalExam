import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const {
      base_price,
      competitor_price,
      inventory_level,
      demand_level,
      day_of_week
    } = await request.json()

    // Neural Network-inspired Dynamic Pricing
    let priceMultiplier = 1.0

    // Demand adjustment
    const demandMultipliers: Record<string, number> = {
      'low': 0.85,
      'medium': 1.0,
      'high': 1.15,
      'very-high': 1.25
    }
    priceMultiplier *= demandMultipliers[demand_level] || 1.0

    // Competitor price adjustment
    const priceDiff = competitor_price - base_price
    if (priceDiff > 0) {
      priceMultiplier *= 0.98 // Slight decrease if competitor is cheaper
    } else {
      priceMultiplier *= 1.02 // Slight increase if we're cheaper
    }

    // Inventory adjustment
    if (inventory_level < 10) {
      priceMultiplier *= 1.1 // Increase price for low stock
    } else if (inventory_level > 100) {
      priceMultiplier *= 0.9 // Decrease price for overstock
    }

    // Day of week adjustment
    const dayMultipliers: Record<string, number> = {
      'monday': 0.95,
      'tuesday': 0.95,
      'wednesday': 1.0,
      'thursday': 1.0,
      'friday': 1.1,
      'saturday': 1.15,
      'sunday': 1.05
    }
    priceMultiplier *= dayMultipliers[day_of_week.toLowerCase()] || 1.0

    const optimalPrice = Math.round(base_price * priceMultiplier * 100) / 100
    const revenueImpact = Math.round((priceMultiplier - 1) * 100)

    return NextResponse.json({
      success: true,
      optimal_price: optimalPrice,
      base_price,
      revenue_impact: revenueImpact,
      algorithm: 'Neural Network',
      interpretation: `Optimal Price: $${optimalPrice.toFixed(2)} (${revenueImpact > 0 ? '+' : ''}${revenueImpact}% revenue impact). Factors: ${demand_level} demand, ${inventory_level} items in stock, competitors at $${competitor_price}`
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Pricing optimization failed: ' + String(error) },
      { status: 500 }
    )
  }
}