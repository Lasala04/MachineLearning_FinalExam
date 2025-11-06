'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from 'react'

interface LRPredictionData {
  success: boolean
  prediction: number
  confidence: number
  algorithm: string
  interpretation: string
  formula: string
}

export default function LinearRegressionPage() {
  const [month1, setMonth1] = useState<string>('')
  const [month2, setMonth2] = useState<string>('')
  const [month3, setMonth3] = useState<string>('')
  const [prediction, setPrediction] = useState<LRPredictionData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handlePredict = async () => {
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/predict/linear-regression', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          month_1_sales: parseFloat(month1),
          month_2_sales: parseFloat(month2),
          month_3_sales: parseFloat(month3)
        })
      })

      const data = await response.json()
      if (data.success) {
        setPrediction(data)
      } else {
        setError('Prediction failed')
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
      <div className="bg-linear-to-r from-blue-600 to-cyan-500 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-blue-100 hover:text-white mb-4 inline-flex items-center transition">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold mb-4 flex items-center">
            <span className="text-6xl mr-4">📈</span>
            Sales Forecasting
          </h1>
          <p className="text-xl text-blue-100 font-light">
            Powered by Linear Regression Algorithm
          </p>
        </div>
      </div>

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* GUIDE SECTION */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">📖 How to Use This Tool</h2>
            <div className="text-gray-700 space-y-3">
              <p><strong>Step 1:</strong> Enter your sales data for the past 3 months</p>
              <p><strong>Step 2:</strong> Click &ldquo;Predict Next Month&rdquo; button</p>
              <p><strong>Step 3:</strong> See your predicted sales with confidence score</p>
              <p className="text-sm italic">💡 Example: If you sold $40K, $45K, $50K in months 1-3, the model predicts $55K for month 4!</p>
            </div>
          </section>

          {/* INTERACTIVE FORM */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Try It Yourself</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Month 1 Sales ($)</label>
                <input
                  type="number"
                  value={month1}
                  onChange={(e) => setMonth1(e.target.value)}
                  placeholder="e.g., 40000"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Month 2 Sales ($)</label>
                <input
                  type="number"
                  value={month2}
                  onChange={(e) => setMonth2(e.target.value)}
                  placeholder="e.g., 45000"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Month 3 Sales ($)</label>
                <input
                  type="number"
                  value={month3}
                  onChange={(e) => setMonth3(e.target.value)}
                  placeholder="e.g., 50000"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-black"
                />
              </div>
            </div>

            <button
              onClick={handlePredict}
              disabled={loading || !month1 || !month2 || !month3}
              className="w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? '⏳ Predicting...' : '🔮 Predict Next Month'}
            </button>

            {error && (
              <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                ❌ {error}
              </div>
            )}

            {prediction && (
              <div className="mt-8 bg-linear-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">📊 Prediction Result</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600">Predicted Sales</p>
                    <p className="text-4xl font-bold text-blue-600">${prediction.prediction.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Confidence Level</p>
                    <p className="text-4xl font-bold text-green-600">{prediction.confidence}%</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 bg-white p-4 rounded border-l-4 border-blue-500">
                  <strong>Interpretation:</strong> {prediction.interpretation}
                </p>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Formula Used:</strong> {prediction.formula}
                </p>
              </div>
            )}
          </section>

          {/* BUSINESS PROBLEM */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-3">🎯 The Business Problem</h2>
            <p className="text-gray-700">
              Online retailers struggle to predict how many products they will sell next month. Order too little inventory = lost sales and disappointed customers. Order too much = wasted money on storage, potential markdowns, and tied-up capital.
            </p>
          </section>

          {/* HOW IT HELPS */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">💡 How Linear Regression Helps</h2>
            <p className="text-gray-700 mb-4">
              Linear Regression is like drawing a trend line through your past sales data. It analyzes historical patterns and extends that line into the future to predict upcoming sales with remarkable accuracy.
            </p>
            
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 mb-2">Simple Analogy:</h3>
              <p className="text-gray-700">
                If your test scores were 70, 75, 80, 85... Linear Regression would predict your next score will be around 90. It finds the pattern and projects it forward!
              </p>
            </div>
          </section>

          {/* VISUAL CHART */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">📈 Visual Results</h2>
            <div className="my-6">
              <Image 
                src="/images/sales_forecast_chart.png" 
                alt="Sales Forecasting with Linear Regression"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">
                Figure 1: Monthly sales trends with forecasted values shown as green stars. The red dashed line shows the overall upward trend, helping predict future performance.
              </p>
            </div>
          </section>

          {/* BUSINESS IMPACT */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">💰 Business Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Reduce Inventory Costs</h3>
                <p className="text-gray-700">Save 25% on storage and holding costs</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Prevent Stockouts</h3>
                <p className="text-gray-700">Never miss sales during peak season</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Improve Cash Flow</h3>
                <p className="text-gray-700">Better planning = healthier finances</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Data-Driven Decisions</h3>
                <p className="text-gray-700">Replace guesswork with science</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}