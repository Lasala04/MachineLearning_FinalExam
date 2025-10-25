import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function DecisionTreePage() {
  return (
    <>
      <Navbar />
      {/* Colorful Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white py-12 px-6">
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
          
          {/* Business Problem Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-3">
              🎯 The Business Problem
            </h2>
            <p className="text-gray-700">
              Acquiring new customers costs 5-7x more than retaining existing ones. But how do you know which customers are about to leave? By the time they stop buying, it&apos;s too late. You need early warning signals to intervene proactively.
            </p>
          </section>

          {/* How It Helps Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">
              💡 How Decision Tree Helps
            </h2>
            <p className="text-gray-700 mb-4">
              Decision Trees analyze customer behavior patterns to predict who is likely to churn. It creates a series of yes/no questions (like a flowchart) that identifies at-risk customers weeks before they leave.
            </p>
            
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 mb-2">Simple Analogy:</h3>
              <p className="text-gray-700">
                Like a doctor using symptoms to diagnose: &quot;Has the customer complained? → Yes. Decreased purchases? → Yes. Stopped opening emails? → Yes. DIAGNOSIS: High churn risk!&quot;
              </p>
            </div>
          </section>

          {/* Data We Use Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              📊 Data We Use
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Purchase frequency trends (last 6 months)</li>
              <li>Customer service interactions and complaints</li>
              <li>Email engagement rates</li>
              <li>Cart abandonment patterns</li>
              <li>Time since last purchase</li>
              <li>Account age and lifetime value</li>
            </ul>
          </section>

          {/* Visual Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              📈 Visual Results
            </h2>
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

          {/* Sample Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">
              📊 Sample Results
            </h2>
            <p className="text-gray-700 mb-4">
              Churn prediction for 3 customer profiles:
            </p>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <p className="font-bold text-gray-900">Customer ID: #4521 (Sarah M.)</p>
                <p className="text-gray-700">Regular purchases, high email engagement, recent positive review</p>
                <p className="text-green-700 font-bold mt-2">✅ LOW RISK - Churn Probability: 8%</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="font-bold text-gray-900">Customer ID: #7832 (Mike R.)</p>
                <p className="text-gray-700">No purchases in 45 days, filed complaint, stopped opening emails, cart abandonment</p>
                <p className="text-red-700 font-bold mt-2">❌ HIGH RISK - Churn Probability: 89%</p>
                <p className="text-sm text-red-600 mt-1">⚠️ Recommended Action: Send personalized win-back offer</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="font-bold text-gray-900">Customer ID: #9103 (Jessica L.)</p>
                <p className="text-gray-700">Decreased purchase frequency, but still engaged with emails</p>
                <p className="text-yellow-700 font-bold mt-2">⚠️ MEDIUM RISK - Churn Probability: 54%</p>
                <p className="text-sm text-yellow-600 mt-1">💡 Recommended Action: Send loyalty discount</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Model Accuracy:</strong> 91.7% prediction accuracy (tested on 2,000 customers)
            </p>
          </section>

          {/* Business Impact Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">
              💰 Business Impact
            </h2>
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

          {/* Technical Details Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              🔬 Technical Details
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Algorithm:</strong> Decision Tree (CART)</p>
              <p className="text-gray-700 mb-2"><strong>Library:</strong> scikit-learn</p>
              <p className="text-gray-700 mb-2"><strong>Training Data:</strong> 6,500+ customer records</p>
              <p className="text-gray-700 mb-2"><strong>Model Type:</strong> Supervised Learning (Binary Classification)</p>
              <p className="text-gray-700 mb-2"><strong>Features:</strong> 8 (purchase frequency, complaints, engagement, etc.)</p>
              <p className="text-gray-700 mb-2"><strong>Accuracy:</strong> 91.7%</p>
              <p className="text-gray-700 mb-2"><strong>Max Tree Depth:</strong> 6 levels</p>
              <p className="text-gray-700"><strong>Prediction Window:</strong> 30-day churn forecast</p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}