import { NextRequest, NextResponse } from 'next/server'

interface Product {
  name: string
  category: string
  price: number
  rating: number
}

const productDatabase: Product[] = [
  { name: 'Wireless Headphones', category: 'electronics', price: 79.99, rating: 4.5 },
  { name: 'Phone Case', category: 'accessories', price: 19.99, rating: 4.2 },
  { name: 'Charging Cable', category: 'electronics', price: 12.99, rating: 4.0 },
  { name: 'Screen Protector', category: 'accessories', price: 9.99, rating: 4.3 },
  { name: 'Portable Charger', category: 'electronics', price: 49.99, rating: 4.6 },
  { name: 'Bluetooth Speaker', category: 'electronics', price: 59.99, rating: 4.4 },
  { name: 'USB Hub', category: 'electronics', price: 29.99, rating: 4.1 },
  { name: 'Phone Mount', category: 'accessories', price: 15.99, rating: 4.0 },
]

export async function POST(request: NextRequest) {
  try {
    const { purchased_categories, price_range, k = 5 } = await request.json()

    if (!purchased_categories || !Array.isArray(purchased_categories)) {
      return NextResponse.json(
        { error: 'purchased_categories must be an array' },
        { status: 400 }
      )
    }

    // Calculate similarity scores for each product
    const recommendations = productDatabase
      .map(product => {
        let score = 0

        // Category match
        if (purchased_categories.includes(product.category)) {
          score += 50
        }

        // Price range match
        if (price_range && Math.abs(product.price - price_range) < 50) {
          score += 30
        }

        // Rating bonus
        score += product.rating * 5

        return { ...product, similarity: score }
      })
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, k)
      .map(item => ({
        name: item.name,
        price: item.price,
        rating: item.rating,
        match: `${Math.round((item.similarity / 100) * 100)}%`
      }))

    return NextResponse.json({
      success: true,
      recommendations,
      algorithm: 'K-Nearest Neighbors',
      interpretation: `Based on your purchase history (${purchased_categories.join(', ')}), here are your top ${k} recommended products.`
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Recommendation failed: ' + String(error) },
      { status: 500 }
    )
  }
}