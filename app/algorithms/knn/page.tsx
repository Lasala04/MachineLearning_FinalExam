import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function KNNPage() {
  return (
    <>
      <Navbar />
      {/* Colorful Header Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-purple-100 hover:text-white mb-4 inline-flex items-center transition">
            <span className="mr-2">←</span> Back to Home
          </Link>
          <h1 className="text-5xl font-extrabold mb-4 flex items-center">
            <span className="text-6xl mr-4">🎯</span>
            Product Recommendations
          </h1>
          <p className="text-xl text-purple-100 font-light">
            Powered by K-Nearest Neighbors Algorithm
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
              Customers browsing your website often don&apos;t know what else they might like. Generic recommendations lead to lost sales opportunities. You need personalized suggestions that match each customer&apos;s unique taste and shopping behavior.
            </p>
          </section>

          {/* How It Helps Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">
              💡 How K-Nearest Neighbors Helps
            </h2>
            <p className="text-gray-700 mb-4">
              KNN finds customers with similar shopping patterns and recommends products they bought. It&apos;s like asking: &quot;People who shop like you also loved these items!&quot;
            </p>
            
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-bold text-gray-900 mb-2">Simple Analogy:</h3>
              <p className="text-gray-700">
                If you and your best friend have similar taste in movies, and they just watched something you haven&apos;t seen yet - you&apos;ll probably like it too! That&apos;s exactly how KNN works.
              </p>
            </div>
          </section>

          {/* Data We Use Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              📊 Data We Use
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Customer purchase history (past 12 months)</li>
              <li>Product browsing patterns</li>
              <li>Product categories and attributes</li>
              <li>Customer ratings and reviews</li>
              <li>Time spent viewing products</li>
            </ul>
          </section>

          {/* Visual Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              📈 Visual Results
            </h2>
            <div className="my-6">
              <Image 
                src="/images/knn_recommendations_chart.png" 
                alt="KNN Product Recommendations"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 italic">
                Figure 1: Customer clustering visualization. Similar customers are grouped together (shown by proximity), enabling accurate product recommendations.
              </p>
            </div>
          </section>

          {/* Sample Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">
              📊 Sample Results
            </h2>
            <p className="text-gray-700 mb-4">
              Example: Customer bought &quot;Wireless Headphones&quot;
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">🎯 Top Recommendations:</h3>
              <ol className="list-decimal list-inside text-gray-700 space-y-2">
                <li><strong>Bluetooth Speaker</strong> - 87% match (542 similar customers bought this)</li>
                <li><strong>Phone Case</strong> - 84% match (489 similar customers bought this)</li>
                <li><strong>Charging Cable</strong> - 79% match (421 similar customers bought this)</li>
                <li><strong>Screen Protector</strong> - 76% match (398 similar customers bought this)</li>
                <li><strong>Portable Charger</strong> - 73% match (365 similar customers bought this)</li>
              </ol>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Recommendation Acceptance Rate:</strong> 42% (customers click on at least 1 recommendation)
            </p>
          </section>

          {/* Business Impact Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">
              💰 Business Impact
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Increase Sales</h3>
                <p className="text-gray-700">35% boost in average order value</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Improve Experience</h3>
                <p className="text-gray-700">Customers find what they need faster</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Reduce Returns</h3>
                <p className="text-gray-700">Better matches = happier customers</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">✅ Personalization</h3>
                <p className="text-gray-700">Each customer gets unique suggestions</p>
              </div>
            </div>
          </section>

          {/* Technical Details Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              🔬 Technical Details
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Algorithm:</strong> K-Nearest Neighbors (k=5)</p>
              <p className="text-gray-700 mb-2"><strong>Library:</strong> scikit-learn</p>
              <p className="text-gray-700 mb-2"><strong>Training Data:</strong> 5,000+ customers, 10,000+ products</p>
              <p className="text-gray-700 mb-2"><strong>Model Type:</strong> Instance-based Learning</p>
              <p className="text-gray-700 mb-2"><strong>Distance Metric:</strong> Cosine Similarity</p>
              <p className="text-gray-700 mb-2"><strong>Features:</strong> Purchase history, ratings, categories</p>
              <p className="text-gray-700 mb-2"><strong>Accuracy:</strong> 88.7% relevance score</p>
              <p className="text-gray-700"><strong>Response Time:</strong> &lt;100ms per recommendation</p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}