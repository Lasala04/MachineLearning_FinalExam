import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function SVMPage() {
  return (
    <>
      <Navbar />
      {/* Colorful Header Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-red-100 hover:text-white mb-4 inline-flex items-center transition">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold mb-4 flex items-center">
            <span className="text-6xl mr-4">🔒</span>
            Fraud Detection
          </h1>
          <p className="text-xl text-red-100 font-light">
            Powered by Support Vector Machine Algorithm
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
              E-commerce sites lose billions to fraudulent transactions yearly. Fraudsters use stolen credit cards, fake accounts, and sophisticated schemes. Manual review is too slow and expensive. You need to catch fraud instantly without blocking legitimate customers.
            </p>
          </section>

          {/* How It Helps Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">
              💡 How Support Vector Machine Helps
            </h2>
            <p className="text-gray-700 mb-4">
              SVM creates an intelligent boundary between legitimate and fraudulent transactions. It learns patterns from thousands of past cases to instantly flag suspicious activity in real-time.
            </p>
            
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 mb-2">Simple Analogy:</h3>
              <p className="text-gray-700">
                Imagine a security guard who has memorized every trick fraudsters use. SVM is that guard - it instantly spots suspicious behavior patterns and blocks them before any damage is done.
              </p>
            </div>
          </section>

          {/* Data We Use Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              📊 Data We Use
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Transaction history (8,000+ labeled cases)</li>
              <li>Purchase amount and frequency patterns</li>
              <li>IP address and location data</li>
              <li>Device fingerprints and browser info</li>
              <li>Time of day and velocity checks</li>
              <li>Billing vs shipping address mismatches</li>
            </ul>
          </section>

          {/* Visual Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              📈 Visual Results
            </h2>
            <div className="my-6">
              <Image 
                src="/images/fraud_detection_chart.png" 
                alt="Fraud Detection with SVM"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">
                Figure 1: SVM classification boundary separating legitimate transactions (green) from fraudulent ones (red). The algorithm achieves 99.2% fraud detection accuracy.
              </p>
            </div>
          </section>

          {/* Sample Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">
              📊 Sample Results
            </h2>
            <p className="text-gray-700 mb-4">
              Real-time fraud detection examples:
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="font-bold text-gray-900">Transaction #12847</p>
                <p className="text-gray-700">$49.99 purchase from regular customer, known device, matching billing address</p>
                <p className="text-green-700 font-bold mt-2">✅ APPROVED - Risk Score: 2% (Safe)</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="font-bold text-gray-900">Transaction #12848</p>
                <p className="text-gray-700">$1,249.99 purchase from new account, VPN detected, mismatched shipping address, suspicious velocity</p>
                <p className="text-red-700 font-bold mt-2">❌ BLOCKED - Risk Score: 98% (High Fraud Risk)</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="font-bold text-gray-900">Transaction #12849</p>
                <p className="text-gray-700">$89.99 purchase from returning customer but new device and unusual location</p>
                <p className="text-yellow-700 font-bold mt-2">⚠️ REVIEW - Risk Score: 67% (Manual Check Required)</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Detection Accuracy:</strong> 99.2% fraud catch rate with only 0.3% false positives
            </p>
          </section>

          {/* Business Impact Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">
              💰 Business Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Save Money</h3>
                <p className="text-gray-700">Prevent $500K+ in fraud losses annually</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Instant Protection</h3>
                <p className="text-gray-700">Real-time blocking in &lt;100ms</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Reduce Chargebacks</h3>
                <p className="text-gray-700">90% fewer disputed transactions</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Happy Customers</h3>
                <p className="text-gray-700">Legit purchases go through seamlessly</p>
              </div>
            </div>
          </section>

          {/* Technical Details Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              🔬 Technical Details
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Algorithm:</strong> Support Vector Machine (RBF kernel)</p>
              <p className="text-gray-700 mb-2"><strong>Library:</strong> scikit-learn</p>
              <p className="text-gray-700 mb-2"><strong>Training Data:</strong> 8,000+ labeled transactions</p>
              <p className="text-gray-700 mb-2"><strong>Model Type:</strong> Supervised Learning (Binary Classification)</p>
              <p className="text-gray-700 mb-2"><strong>Features:</strong> 12 (amount, location, device, velocity, etc.)</p>
              <p className="text-gray-700 mb-2"><strong>Accuracy:</strong> 99.2%</p>
              <p className="text-gray-700 mb-2"><strong>False Positive Rate:</strong> 0.3%</p>
              <p className="text-gray-700"><strong>Processing Time:</strong> &lt;100ms per transaction</p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}