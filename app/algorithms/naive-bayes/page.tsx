'use client'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from 'react'

interface NBPredictionData {
  success: boolean
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL'
  confidence: number
  interpretation: string
}

export default function NaiveBayesPage() {
  const [reviewText, setReviewText] = useState<string>('')
  const [prediction, setPrediction] = useState<NBPredictionData | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handlePredict = async () => {
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/predict/naive-bayes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review_text: reviewText })
      })

      const data = await response.json()
      if (data.success) {
        setPrediction(data)
      } else {
        setError('Analysis failed')
      }
    } catch (err) {
      setError('Error: ' + String(err))
    } finally {
      setLoading(false)
    }
  }

  const exampleReviews = [
    'This product is absolutely amazing! Fast shipping and excellent quality.',
    'Terrible experience. Item arrived damaged and customer service was unhelpful.',
    'Product is okay, nothing special. Does the job I guess.'
  ]

  return (
    <>
      <Navbar />
      <div className="bg-linear-to-r from-pink-600 to-rose-500 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-pink-100 hover:text-white mb-4 inline-flex items-center transition">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold mb-4 flex items-center">
            <span className="text-6xl mr-4">💬</span>
            Sentiment Analysis
          </h1>
          <p className="text-xl text-pink-100 font-light">
            Powered by Naive Bayes Algorithm
          </p>
        </div>
      </div>

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* GUIDE */}
          <section className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-pink-900 mb-4">📖 How to Use This Tool</h2>
            <div className="text-gray-700 space-y-3">
              <p><strong>Step 1:</strong> Type or paste a customer review in the text box</p>
              <p><strong>Step 2:</strong> Click &ldquo;Analyze Sentiment&rdquo; button</p>
              <p><strong>Step 3:</strong> See if the review is Positive, Negative, or Neutral</p>
              <p className="text-sm italic">💡 Try the example reviews below to see how it works!</p>
            </div>
          </section>

          {/* INTERACTIVE FORM */}
          <section className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Try It Yourself</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-bold text-gray-700 mb-2">Customer Review</label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Enter a customer review here..."
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-pink-500 focus:outline-none text-black"
              />
            </div>

            <div className="mb-6">
              <p className="text-sm font-bold text-gray-700 mb-2">Quick Examples:</p>
              <div className="flex flex-wrap gap-2">
                {exampleReviews.map((example, i) => (
                  <button
                    key={i}
                    onClick={() => setReviewText(example)}
                    className="text-xs bg-pink-100 text-pink-700 px-3 py-2 rounded-lg hover:bg-pink-200 transition"
                  >
                    Example {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handlePredict}
              disabled={loading || !reviewText.trim()}
              className="w-full bg-linear-to-r from-pink-600 to-rose-500 text-white font-bold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? '⏳ Analyzing...' : '🔍 Analyze Sentiment'}
            </button>

            {error && (
              <div className="mt-4 bg-red-50 border-l-4 border-red-500 p-4 text-red-700">
                ❌ {error}
              </div>
            )}

            {prediction && (
              <div className={`mt-8 p-6 rounded-lg border-2 ${
                prediction.sentiment === 'POSITIVE' ? 'bg-green-50 border-green-300' :
                prediction.sentiment === 'NEGATIVE' ? 'bg-red-50 border-red-300' :
                'bg-yellow-50 border-yellow-300'
              }`}>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">📊 Analysis Result</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-600">Sentiment</p>
                    <p className={`text-4xl font-bold ${
                      prediction.sentiment === 'POSITIVE' ? 'text-green-600' :
                      prediction.sentiment === 'NEGATIVE' ? 'text-red-600' :
                      'text-yellow-600'
                    }`}>
                      {prediction.sentiment === 'POSITIVE' ? '😊 POSITIVE' :
                       prediction.sentiment === 'NEGATIVE' ? '😞 NEGATIVE' :
                       '😐 NEUTRAL'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Confidence Level</p>
                    <p className="text-4xl font-bold text-blue-600">{prediction.confidence}%</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-700 bg-white p-4 rounded border-l-4 border-pink-500">
                  <strong>Interpretation:</strong> {prediction.interpretation}
                </p>
              </div>
            )}
          </section>

          {/* BUSINESS PROBLEM */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-3">🎯 The Business Problem</h2>
            <p className="text-gray-700">
              E-commerce sites receive thousands of customer reviews daily. Reading and analyzing them manually is impossible. Companies need to instantly know: Are customers happy? What problems are they facing? Which products need improvement?
            </p>
          </section>

          {/* HOW IT HELPS */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">💡 How Naive Bayes Helps</h2>
            <p className="text-gray-700 mb-4">
              Naive Bayes automatically reads customer reviews and classifies them as Positive, Negative, or Neutral based on the words used. It learns from thousands of past reviews to understand sentiment patterns.
            </p>
            
            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-gray-900 mb-2">Simple Analogy:</h3>
              <p className="text-gray-700">
                Think of it as a smart assistant who has read millions of reviews and can instantly tell you: &ldquo;This review with words like &apos;amazing&apos;, &apos;love it&apos; is definitely POSITIVE!&rdquo;
              </p>
            </div>
          </section>

          {/* VISUAL CHART */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">📈 Visual Results</h2>
            <div className="my-6">
              <Image 
                src="/images/sentiment_analysis_chart.png" 
                alt="Sentiment Analysis Distribution"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">
                Figure 1: Distribution of customer sentiments across 10,000+ reviews. The algorithm successfully classified 94% of reviews correctly.
              </p>
            </div>
          </section>

          {/* BUSINESS IMPACT */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">💰 Business Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Instant Insights</h3>
                <p className="text-gray-700">Analyze 1000s of reviews in seconds</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Spot Problems Fast</h3>
                <p className="text-gray-700">Catch negative trends before they spread</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Improve Products</h3>
                <p className="text-gray-700">Understand what customers really want</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Boost Satisfaction</h3>
                <p className="text-gray-700">Respond to issues proactively</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}