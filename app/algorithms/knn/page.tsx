'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from 'react'

interface Recommendation {
  name: string
  price: number
  rating: number
  match: string
}

interface KNNPredictionData {
  success: boolean
  recommendations: Recommendation[]
  interpretation: string
}

export default function KNNPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<string>('')
  const [prediction, setPrediction] = useState<KNNPredictionData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const categories = [
    'electronics',
    'accessories',
    'clothing',
    'home-goods',
    'beauty',
    'sports'
  ]

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    )
  }

  const handlePredict = async () => {
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/predict/knn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          purchased_categories: selectedCategories,
          price_range: priceRange ? parseFloat(priceRange) : null
        })
      })

      const data = await response.json()
      if (data.success) {
        setPrediction(data)
      } else {
        setError('Recommendation failed')
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
      <div className="bg-linear-to-r from-purple-700 via-purple-600 to-indigo-600 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-purple-200 hover:text-white mb-4 inline-flex items-center transition">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold mb-4 flex items-center">
            <span className="text-6xl mr-4">🎯</span>
            Product Recommendations
          </h1>
          <p className="text-xl text-purple-200 font-light">
            Powered by K-Nearest Neighbors Algorithm
          </p>
        </div>
      </div>

      <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* GUIDE */}
          <section className="bg-slate-800/50 backdrop-blur-sm border-l-4 border-purple-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">📖 How to Use This Tool</h2>
            <div className="text-slate-300 space-y-3">
              <p><strong>Step 1:</strong> Select the product categories you usually buy</p>
              <p><strong>Step 2:</strong> Enter your typical price range (optional)</p>
              <p><strong>Step 3:</strong> Click &ldquo;Get Recommendations&rdquo; button</p>
              <p className="text-sm italic">💡 The algorithm finds customers like you and recommends what THEY bought!</p>
            </div>
          </section>

          {/* INTERACTIVE FORM */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-md mb-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">🎯 Try It Yourself</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-300 mb-3">What do you usually buy? (Select at least 1)</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat)}
                    className={`px-4 py-2 rounded-lg font-bold transition ${
                      selectedCategories.includes(cat)
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-300 mb-2">Average Price Range ($)</label>
              <input
                type="number"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                placeholder="e.g., 50"
                className="w-full px-4 py-2 border-2 border-slate-600 bg-slate-900 text-white rounded-lg focus:border-purple-500 focus:outline-none"
              />
            </div>

            <button
              onClick={handlePredict}
              disabled={loading || selectedCategories.length === 0}
              className="w-full bg-linear-to-r from-purple-700 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? '⏳ Finding recommendations...' : '🔍 Get Recommendations'}
            </button>

            {error && (
              <div className="mt-4 bg-red-900/50 border-l-4 border-red-500 p-4 text-red-300">
                ❌ {error}
              </div>
            )}

            {prediction && (
              <div className="mt-8 bg-linear-to-br from-purple-900/40 to-indigo-900/40 border-2 border-purple-500 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">🎁 Your Top Recommendations</h3>
                <div className="space-y-4">
                  {prediction.recommendations.map((rec: Recommendation, i: number) => (
                    <div key={i} className="bg-slate-800/80 p-4 rounded-lg border-l-4 border-purple-500">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-white">{rec.name}</p>
                          <p className="text-sm text-slate-400">${rec.price.toFixed(2)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-slate-400">Match Score</p>
                          <p className="text-xl font-bold text-purple-400">{rec.match}</p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-400 mt-2">⭐ Rating: {rec.rating}/5</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-slate-300 bg-slate-800/80 p-4 rounded border-l-4 border-purple-500">
                  <strong>Why these recommendations?</strong> {prediction.interpretation}
                </p>
              </div>
            )}
          </section>

          {/* BUSINESS PROBLEM */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mb-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-orange-400 mb-3">🎯 The Business Problem</h2>
            <p className="text-slate-300">
              Customers browsing your website often don&apos;t know what else they might like. Generic recommendations lead to lost sales opportunities. You need personalized suggestions that match each customer&apos;s unique taste and shopping behavior.
            </p>
          </section>

          {/* HOW IT HELPS */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mb-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-purple-400 mb-3">💡 How K-Nearest Neighbors Helps</h2>
            <p className="text-slate-300 mb-4">
              KNN finds customers with similar shopping patterns and recommends products they bought. It&apos;s like asking: &ldquo;People who shop like you also loved these items!&rdquo;
            </p>
            
            <div className="bg-purple-900/30 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-purple-300 mb-2">Simple Analogy:</h3>
              <p className="text-slate-300">
                If you and your best friend have similar taste in movies, and they just watched something you haven&apos;t seen yet - you&apos;ll probably like it too! That&apos;s exactly how KNN works.
              </p>
            </div>
          </section>

          {/* VISUAL CHART */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mb-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-green-400 mb-3">📈 Visual Results</h2>
            <div className="my-6">
              <Image 
                src="/images/knn_recommendations_chart.png" 
                alt="KNN Product Recommendations"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-slate-400 mt-2 italic">
                Figure 1: Customer clustering visualization. Similar customers are grouped together (shown by proximity), enabling accurate product recommendations.
              </p>
            </div>
          </section>

          {/* BUSINESS IMPACT */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-slate-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-3">💰 Business Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-400 mb-2">✅ Increase Sales</h3>
                <p className="text-slate-300">35% boost in average order value</p>
              </div>
              <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-400 mb-2">✅ Improve Experience</h3>
                <p className="text-slate-300">Customers find what they need faster</p>
              </div>
              <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-400 mb-2">✅ Reduce Returns</h3>
                <p className="text-slate-300">Better matches = happier customers</p>
              </div>
              <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-400 mb-2">✅ Personalization</h3>
                <p className="text-slate-300">Each customer gets unique suggestions</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}