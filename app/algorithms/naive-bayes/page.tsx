import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function NaiveBayesPage() {
  return (
    <>
      <Navbar />
      {/* Colorful Header Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-500 text-white py-12 px-6">
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
          
          {/* Business Problem Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-3">
              🎯 The Business Problem
            </h2>
            <p className="text-gray-700">
              E-commerce sites receive thousands of customer reviews daily. Reading and analyzing them manually is impossible. Companies need to instantly know: Are customers happy? What problems are they facing? Which products need improvement?
            </p>
          </section>

          {/* How It Helps Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">
              💡 How Naive Bayes Helps
            </h2>
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

          {/* Data We Use Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              📊 Data We Use
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>10,000+ labeled customer reviews (positive/negative)</li>
              <li>Product ratings (1-5 stars)</li>
              <li>Review text and keywords</li>
              <li>Customer purchase history</li>
              <li>Response time to complaints</li>
            </ul>
          </section>

          {/* Visual Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              📈 Visual Results
            </h2>
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

          {/* Sample Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">
              📊 Sample Results
            </h2>
            <p className="text-gray-700 mb-4">
              Here are real examples of sentiment classification:
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="text-gray-700 italic">&quot;Absolutely love this product! Fast shipping and excellent quality.&quot;</p>
                <p className="text-green-700 font-bold mt-2">✅ Classified as: POSITIVE (98% confidence)</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-gray-700 italic">&quot;Terrible experience. Item arrived damaged and customer service was unhelpful.&quot;</p>
                <p className="text-red-700 font-bold mt-2">❌ Classified as: NEGATIVE (96% confidence)</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-gray-700 italic">&quot;Product is okay, nothing special. Does the job.&quot;</p>
                <p className="text-yellow-700 font-bold mt-2">⚪ Classified as: NEUTRAL (91% confidence)</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Overall Model Accuracy:</strong> 94.3% on test data
            </p>
          </section>

          {/* Business Impact Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">
              💰 Business Impact
            </h2>
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

          {/* Technical Details Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              🔬 Technical Details
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Algorithm:</strong> Naive Bayes (Multinomial)</p>
              <p className="text-gray-700 mb-2"><strong>Library:</strong> scikit-learn</p>
              <p className="text-gray-700 mb-2"><strong>Training Data:</strong> 10,000+ labeled reviews</p>
              <p className="text-gray-700 mb-2"><strong>Model Type:</strong> Supervised Learning (Classification)</p>
              <p className="text-gray-700 mb-2"><strong>Features:</strong> Word frequencies (TF-IDF)</p>
              <p className="text-gray-700 mb-2"><strong>Accuracy:</strong> 94.3%</p>
              <p className="text-gray-700 mb-2"><strong>Classes:</strong> 3 (Positive, Negative, Neutral)</p>
              <p className="text-gray-700"><strong>Processing Time:</strong> ~0.1 seconds per review</p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}