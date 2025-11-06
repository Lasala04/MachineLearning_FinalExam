'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from 'react'

interface PredictionData {
  success: boolean
  churn_probability: number
  risk_level: 'HIGH' | 'MEDIUM' | 'LOW'
  interpretation: string
  [key: string]: string | number | boolean
}

export default function DecisionTreePage() {
  const [monthsSinceLastPurchase, setMonthsSinceLastPurchase] = useState<string>('')
  const [totalPurchases, setTotalPurchases] = useState<string>('')
  const [complaints, setComplaints] = useState<string>('')
  const [emailEngagement, setEmailEngagement] = useState<string>('')
  const [prediction, setPrediction] = useState<PredictionData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handlePredict = async () => {
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/predict/decision-tree', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          months_since_last_purchase: parseInt(monthsSinceLastPurchase),
          total_purchases: parseInt(totalPurchases),
          customer_complaints: parseInt(complaints),
          email_engagement_rate: parseFloat(emailEngagement)
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
      <div className="bg-linear-to-r from-amber-600 to-yellow-500 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-amber-100 hover:text-white mb-4 inline-flex items-center transition">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold mb-4 flex items-center">
            <span className="text-6xl mr-4">⚠️</span>
            Customer Churn Prediction
          </h1>
          <p className="text-xl text-amber-100 font-light">
            Powered by Decision Tree Algorithm
          </p>
        </div>
      </div>

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* GUIDE */}
          <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-yellow-900 mb-4">📖 How to Use This Tool</h2>
            <div className="text-gray-700 space-y-3">
              <p><strong>Step 1:</strong> Enter customer behavior data (purchase history, complaints, engagement)</p>
              <p><strong>Step 2:</strong> Click &ldquo;Predict Churn Risk&rdquo; button</p>
              <p><strong>Step 3:</strong> See churn probability and recommended actions</p>
              <p className="text-sm italic">💡 Higher churn probability means the customer is likely to leave soon!</p>
            </div>
          </section>

          {/* INTERACTIVE FORM */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Try It Yourself</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Months Since Last Purchase</label>
                <input
                  type="number"
                  value={monthsSinceLastPurchase}
                  onChange={(e) => setMonthsSinceLastPurchase(e.target.value)}
                  placeholder="e.g., 6"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Total Purchases</label>
                <input
                  type="number"
                  value={totalPurchases}
                  onChange={(e) => setTotalPurchases(e.target.value)}
                  placeholder="e.g., 15"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Number of Complaints</label>
                <input
                  type="number"
                  value={complaints}
                  onChange={(e) => setComplaints(e.target.value)}
                  placeholder="e.g., 2"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Engagement Rate (%)</label>
                <input
                  type="number"
                  value={emailEngagement}
                  onChange={(e) => setEmailEngagement(e.target.value)}
                  placeholder="e.g., 45"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-yellow-500 focus:outline-none text-black"
                />
              </div>
            </div>

            <button
              onClick={handlePredict}
              disabled={loading || !monthsSinceLastPurchase || !totalPurchases || complaints === '' || !emailEngagement}
              className="w-full bg-linear-to-r from-amber-600 to-yellow-500 text-white font-bold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? '⏳ Analyzing...' : '🔮 Predict Churn Risk'}
            </button>

            {error && (
              <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                ❌ {error}
              </div>
            )}

            {prediction && (
              <div className={`mt-8 p-6 rounded-lg border-2 ${
                prediction.risk_level === 'HIGH' ? 'bg-red-50 border-red-300' :
                prediction.risk_level === 'MEDIUM' ? 'bg-yellow-50 border-yellow-300' :
                'bg-green-50 border-green-300'
              }`}>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">📊 Churn Risk Analysis</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Churn Probability</p>
                    <p className="text-4xl font-bold text-amber-600">{prediction.churn_probability}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Risk Level</p>
                    <p className={`text-3xl font-bold ${
                      prediction.risk_level === 'HIGH' ? 'text-red-600' :
                      prediction.risk_level === 'MEDIUM' ? 'text-yellow-600' :
                      'text-green-600'
                    }`}>
                      {prediction.risk_level === 'HIGH' ? '🚨 HIGH' :
                       prediction.risk_level === 'MEDIUM' ? '⚠️ MEDIUM' :
                       '✅ LOW'}
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-amber-500 mb-4">
                  <p className="text-gray-700">
                    <strong>Analysis:</strong> {prediction.interpretation}
                  </p>
                </div>

                {prediction.risk_level === 'HIGH' && (
                  <div className="bg-red-100 p-4 rounded border-l-4 border-red-600">
                    <p className="text-red-800 font-bold">💡 Recommended Actions:</p>
                    <ul className="text-red-700 text-sm mt-2 space-y-1">
                      <li>• Send personalized win-back offer</li>
                      <li>• Reach out via email/phone</li>
                      <li>• Offer loyalty discount or special deal</li>
                      <li>• Ask for feedback on what went wrong</li>
                    </ul>
                  </div>
                )}

                {prediction.risk_level === 'MEDIUM' && (
                  <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-600">
                    <p className="text-yellow-800 font-bold">💡 Recommended Actions:</p>
                    <ul className="text-yellow-700 text-sm mt-2 space-y-1">
                      <li>• Send loyalty discount</li>
                      <li>• Increase email engagement</li>
                      <li>• Personalized product recommendations</li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* BUSINESS PROBLEM */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-3">🎯 The Business Problem</h2>
            <p className="text-gray-700">
              Acquiring new customers costs 5-7x more than retaining existing ones. But how do you know which customers are about to leave? By the time they stop buying, it&apos;s too late. You need early warning signals to intervene proactively.
            </p>
          </section>

          {/* HOW IT HELPS */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">💡 How Decision Tree Helps</h2>
            <p className="text-gray-700 mb-4">
              Decision Trees analyze customer behavior patterns to predict who is likely to churn. It creates a series of yes/no questions (like a flowchart) that identifies at-risk customers weeks before they leave.
            </p>
            
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 mb-2">Simple Analogy:</h3>
              <p className="text-gray-700">
                Like a doctor using symptoms to diagnose: &ldquo;Has the customer complained? → Yes. Decreased purchases? → Yes. Stopped opening emails? → Yes. DIAGNOSIS: High churn risk!&rdquo;
              </p>
            </div>
          </section>

          {/* VISUAL CHART */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">📈 Visual Results</h2>
            <div className="my-6">
              <Image 
                src="/images/decision_tree_churn_chart.png" 
                alt="Decision Tree for Churn Prediction"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">
                Figure 1: Decision tree structure showing how the algorithm classifies customers as high or low churn risk based on behavior patterns.
              </p>
            </div>
          </section>

          {/* BUSINESS IMPACT */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">💰 Business Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Retain Customers</h3>
                <p className="text-gray-700">Save 65% of at-risk customers</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Reduce Costs</h3>
                <p className="text-gray-700">Retention costs 7x less than acquisition</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Proactive Action</h3>
                <p className="text-gray-700">Intervene before customers leave</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Boost Revenue</h3>
                <p className="text-gray-700">5% retention increase = 25-95% profit boost</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}