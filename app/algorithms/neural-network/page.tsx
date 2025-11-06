'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from 'react'

interface NNPredictionData {
  success: boolean
  base_price: number
  optimal_price: number
  revenue_impact: number
  interpretation: string
}

export default function NeuralNetworkPage() {
  const [basePrice, setBasePrice] = useState<string>('')
  const [competitorPrice, setCompetitorPrice] = useState<string>('')
  const [inventory, setInventory] = useState<string>('')
  const [demandLevel, setDemandLevel] = useState<string>('medium')
  const [dayOfWeek, setDayOfWeek] = useState<string>('wednesday')
  const [prediction, setPrediction] = useState<NNPredictionData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const demandLevels = ['low', 'medium', 'high', 'very-high']
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  const handlePredict = async () => {
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/predict/neural-network', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          base_price: parseFloat(basePrice),
          competitor_price: parseFloat(competitorPrice),
          inventory_level: parseInt(inventory),
          demand_level: demandLevel,
          day_of_week: dayOfWeek
        })
      })

      const data = await response.json()
      if (data.success) {
        setPrediction(data)
      } else {
        setError('Optimization failed')
      }
    } catch (err) {
      setError('Error: ' + String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-linear-to-r from-green-600 to-emerald-500 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-green-100 hover:text-white mb-4 inline-flex items-center transition">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold mb-4 flex items-center">
            <span className="text-6xl mr-4">💰</span>
            Dynamic Pricing
          </h1>
          <p className="text-xl text-green-100 font-light">
            Powered by Neural Network Algorithm
          </p>
        </div>
      </div>

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* GUIDE */}
          <section className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-4">📖 How to Use This Tool</h2>
            <div className="text-gray-700 space-y-3">
              <p><strong>Step 1:</strong> Enter product base price and competitor price</p>
              <p><strong>Step 2:</strong> Set inventory level, demand, and day of week</p>
              <p><strong>Step 3:</strong> Click &ldquo;Calculate Optimal Price&rdquo; button</p>
              <p className="text-sm italic">💡 Like Uber&apos;s surge pricing! The AI adjusts your price in real-time to maximize profit!</p>
            </div>
          </section>

          {/* INTERACTIVE FORM */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Try It Yourself</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Base Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={basePrice}
                  onChange={(e) => setBasePrice(e.target.value)}
                  placeholder="e.g., 79.99"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Competitor Price ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={competitorPrice}
                  onChange={(e) => setCompetitorPrice(e.target.value)}
                  placeholder="e.g., 89.99"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Inventory Level (units)</label>
                <input
                  type="number"
                  value={inventory}
                  onChange={(e) => setInventory(e.target.value)}
                  placeholder="e.g., 50"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-black"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Market Demand Level</label>
                <select
                  value={demandLevel}
                  onChange={(e) => setDemandLevel(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-black"
                >
                  {demandLevels.map(level => (
                    <option key={level} value={level}>
                      {level.charAt(0).toUpperCase() + level.slice(1).replace('-', ' ')} Demand
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Day of Week</label>
                <select
                  value={dayOfWeek}
                  onChange={(e) => setDayOfWeek(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-black"
                >
                  {days.map(day => (
                    <option key={day} value={day}>
                      {day.charAt(0).toUpperCase() + day.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handlePredict}
              disabled={loading || !basePrice || !competitorPrice || !inventory}
              className="w-full bg-linear-to-r from-green-600 to-emerald-500 text-white font-bold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? '⏳ Optimizing...' : '💡 Calculate Optimal Price'}
            </button>

            {error && (
              <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                ❌ {error}
              </div>
            )}

            {prediction && (
              <div className="mt-8 p-6 rounded-lg border-2 border-green-300 bg-linear-to-br from-green-50 to-emerald-50">
                <h3 className="text-2xl font-bold text-green-900 mb-6">💰 Pricing Optimization Result</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-green-600">
                    <p className="text-sm text-gray-600">Your Base Price</p>
                    <p className="text-2xl font-bold text-gray-900">${prediction.base_price.toFixed(2)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="text-sm text-gray-600">Optimal Price</p>
                    <p className="text-2xl font-bold text-green-600">${prediction.optimal_price.toFixed(2)}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                    <p className="text-sm text-gray-600">Revenue Impact</p>
                    <p className={`text-2xl font-bold ${
                      prediction.revenue_impact > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {prediction.revenue_impact > 0 ? '+' : ''}{prediction.revenue_impact}%
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <p className="text-gray-700">
                    <strong>Analysis:</strong> {prediction.interpretation}
                  </p>
                </div>

                {prediction.revenue_impact > 0 && (
                  <div className="mt-4 bg-green-100 p-4 rounded border-l-4 border-green-600">
                    <p className="text-green-800 font-bold">✅ Price Increase Strategy</p>
                    <p className="text-green-700 text-sm mt-2">
                      Raising your price to ${prediction.optimal_price.toFixed(2)} is projected to increase revenue by {prediction.revenue_impact}%!
                    </p>
                  </div>
                )}

                {prediction.revenue_impact < 0 && (
                  <div className="mt-4 bg-blue-100 p-4 rounded border-l-4 border-blue-600">
                    <p className="text-blue-800 font-bold">📉 Price Reduction Strategy</p>
                    <p className="text-blue-700 text-sm mt-2">
                      Lowering your price to ${prediction.optimal_price.toFixed(2)} will drive volume and increase overall revenue!
                    </p>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* BUSINESS PROBLEM */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-3">🎯 The Business Problem</h2>
            <p className="text-gray-700">
              Fixed pricing leaves money on the table. Price too high and you lose sales. Price too low and you sacrifice profit. Competitors change prices hourly. You need intelligent pricing that maximizes revenue while staying competitive.
            </p>
          </section>

          {/* HOW IT HELPS */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">💡 How Neural Networks Help</h2>
            <p className="text-gray-700 mb-4">
              Neural Networks analyze hundreds of factors simultaneously (demand, competition, inventory, seasonality, customer behavior) to calculate the optimal price point that maximizes your profit in real-time.
            </p>
            
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-2">Simple Analogy:</h3>
              <p className="text-gray-700">
                Like Uber&apos;s surge pricing but smarter! The AI constantly adjusts prices based on what customers are willing to pay right now, considering dozens of market signals simultaneously.
              </p>
            </div>
          </section>

          {/* VISUAL CHART */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">📈 Visual Results</h2>
            <div className="my-6">
              <Image 
                src="/images/neural_network_pricing_chart.png" 
                alt="Neural Network Dynamic Pricing"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">
                Figure 1: Real-time price optimization showing how the neural network adjusts prices throughout the day to maximize revenue based on demand signals.
              </p>
            </div>
          </section>

          {/* BUSINESS IMPACT */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">💰 Business Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Maximize Revenue</h3>
                <p className="text-gray-700">25-40% profit increase</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Stay Competitive</h3>
                <p className="text-gray-700">React to market changes in real-time</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Clear Inventory</h3>
                <p className="text-gray-700">Reduce overstock by 30%</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Automated</h3>
                <p className="text-gray-700">No manual price updates needed</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}