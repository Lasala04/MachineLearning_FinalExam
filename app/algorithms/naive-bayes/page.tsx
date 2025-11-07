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
      <div className="bg-linear-to-r from-pink-700 via-pink-600 to-rose-600 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-pink-200 hover:text-white mb-4 inline-flex items-center transition">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold mb-4 flex items-center">
            <span className="text-6xl mr-4">💬</span>
            Sentiment Analysis
          </h1>
          <p className="text-xl text-pink-200 font-light">
            Powered by Naive Bayes Algorithm
          </p>
        </div>
      </div>

      <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* GUIDE */}
          <section className="bg-slate-800/50 backdrop-blur-sm border-l-4 border-pink-500 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">📖 How to Use This Tool</h2>
            <div className="text-slate-300 space-y-3">
              <p><strong>Step 1:</strong> Type or paste a customer review in the text box</p>
              <p><strong>Step 2:</strong> Click &ldquo;Analyze Sentiment&rdquo; button</p>
              <p><strong>Step 3:</strong> See if the review is Positive, Negative, or Neutral</p>
              <p className="text-sm italic">💡 Try the example reviews below to see how it works!</p>
            </div>
          </section>

          {/* INTERACTIVE FORM */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg shadow-md mb-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">🎯 Try It Yourself</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-bold text-slate-300 mb-2">Customer Review</label>
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Enter a customer review here..."
                rows={5}
                className="w-full px-4 py-3 border-2 border-slate-600 bg-slate-900 text-white rounded-lg focus:border-pink-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <p className="text-sm font-bold text-slate-300 mb-2">Quick Examples:</p>
              <div className="flex flex-wrap gap-2">
                {exampleReviews.map((example, i) => (
                  <button
                    key={i}
                    onClick={() => setReviewText(example)}
                    className="text-xs bg-pink-900/50 text-pink-300 px-3 py-2 rounded-lg hover:bg-pink-900/80 transition"
                  >
                    Example {i + 1}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handlePredict}
              disabled={loading || !reviewText.trim()}
              className="w-full bg-linear-to-r from-pink-700 to-rose-600 text-white font-bold py-3 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
            >
              {loading ? '⏳ Analyzing...' : '🔍 Analyze Sentiment'}
            </button>

            {error && (
              <div className="mt-4 bg-red-900/50 border-l-4 border-red-500 p-4 text-red-300">
                ❌ {error}
              </div>
            )}

            {prediction && (
              <div className={`mt-8 p-6 rounded-lg border-2 ${
                prediction.sentiment === 'POSITIVE' ? 'bg-green-900/40 border-green-500' :
                prediction.sentiment === 'NEGATIVE' ? 'bg-red-900/40 border-red-500' :
                'bg-yellow-900/40 border-yellow-500'
              }`}>
                <h3 className="text-2xl font-bold mb-4 text-white">📊 Analysis Result</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-slate-400">Sentiment</p>
                    <p className={`text-4xl font-bold ${
                      prediction.sentiment === 'POSITIVE' ? 'text-green-400' :
                      prediction.sentiment === 'NEGATIVE' ? 'text-red-400' :
                      'text-yellow-400'
                    }`}>
                      {prediction.sentiment === 'POSITIVE' ? '😊 POSITIVE' :
                       prediction.sentiment === 'NEGATIVE' ? '😞 NEGATIVE' :
                       '😐 NEUTRAL'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Confidence Level</p>
                    <p className="text-4xl font-bold text-blue-400">{prediction.confidence}%</p>
                  </div>
                </div>
                <p className="mt-6 text-slate-300 bg-slate-800/80 p-4 rounded border-l-4 border-pink-500">
                  <strong>Interpretation:</strong> {prediction.interpretation}
                </p>
              </div>
            )}
          </section>

          {/* BUSINESS PROBLEM */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mb-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-orange-400 mb-3">🎯 The Business Problem</h2>
            <p className="text-slate-300">
              E-commerce sites receive thousands of customer reviews daily. Reading and analyzing them manually is impossible. Companies need to instantly know: Are customers happy? What problems are they facing? Which products need improvement?
            </p>
          </section>

          {/* HOW IT HELPS */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mb-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-purple-400 mb-3">💡 How Naive Bayes Helps</h2>
            <p className="text-slate-300 mb-4">
              Naive Bayes automatically reads customer reviews and classifies them as Positive, Negative, or Neutral based on the words used. It learns from thousands of past reviews to understand sentiment patterns.
            </p>
            
            <div className="bg-pink-900/30 p-4 rounded-lg border-l-4 border-pink-500">
              <h3 className="font-bold text-pink-300 mb-2">Simple Analogy:</h3>
              <p className="text-slate-300">
                Think of it as a smart assistant who has read millions of reviews and can instantly tell you: &ldquo;This review with words like &apos;amazing&apos;, &apos;love it&apos; is definitely POSITIVE!&rdquo;
              </p>
            </div>
          </section>

          {/* VISUAL CHART */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mb-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-green-400 mb-3">📈 Visual Results</h2>
            <div className="my-6">
              <Image 
                src="/images/sentiment_analysis_chart.png" 
                alt="Sentiment Analysis Distribution"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-slate-400 mt-2 italic">
                Figure 1: Distribution of customer sentiments across 10,000+ reviews. The algorithm successfully classified 94% of reviews correctly.
              </p>
            </div>
          </section>

          {/* BUSINESS IMPACT */}
          <section className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md border border-slate-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-3">💰 Business Impact</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-400 mb-2">✅ Instant Insights</h3>
                <p className="text-slate-300">Analyze 1000s of reviews in seconds</p>
              </div>
              <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-400 mb-2">✅ Spot Problems Fast</h3>
                <p className="text-slate-300">Catch negative trends before they spread</p>
              </div>
              <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-400 mb-2">✅ Improve Products</h3>
                <p className="text-slate-300">Understand what customers really want</p>
              </div>
              <div className="bg-green-900/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-400 mb-2">✅ Boost Satisfaction</h3>
                <p className="text-slate-300">Respond to issues proactively</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}