import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function NeuralNetworkPage() {
  return (
    <>
      <Navbar />
      {/* Colorful Header Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-12 px-6">
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
          
          {/* Business Problem Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-3">
              🎯 The Business Problem
            </h2>
            <p className="text-gray-700">
              Fixed pricing leaves money on the table. Price too high and you lose sales. Price too low and you sacrifice profit. Competitors change prices hourly. You need intelligent pricing that maximizes revenue while staying competitive.
            </p>
          </section>

          {/* How It Helps Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">
              💡 How Neural Networks Help
            </h2>
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

          {/* Data We Use Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              📊 Data We Use
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Historical pricing and sales data</li>
              <li>Competitor pricing (scraped in real-time)</li>
              <li>Inventory levels and age</li>
              <li>Seasonal demand patterns</li>
              <li>Customer browsing behavior</li>
              <li>Marketing campaign activity</li>
              <li>Time of day and day of week</li>
            </ul>
          </section>

          {/* Visual Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              📈 Visual Results
            </h2>
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

          {/* Sample Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">
              📊 Sample Results
            </h2>
            <p className="text-gray-700 mb-4">
              Example: Wireless Headphones pricing optimization:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border-b text-left">Time</th>
                    <th className="py-2 px-4 border-b text-left">Market Condition</th>
                    <th className="py-2 px-4 border-b text-left">AI Price</th>
                    <th className="py-2 px-4 border-b text-left">Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">9:00 AM</td>
                    <td className="py-2 px-4 border-b">Low demand, high inventory</td>
                    <td className="py-2 px-4 border-b font-bold">$79.99</td>
                    <td className="py-2 px-4 border-b text-green-600">45 sales</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">12:00 PM</td>
                    <td className="py-2 px-4 border-b">Peak traffic, competitor out of stock</td>
                    <td className="py-2 px-4 border-b font-bold">$94.99</td>
                    <td className="py-2 px-4 border-b text-green-600">38 sales (+40% margin!)</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">6:00 PM</td>
                    <td className="py-2 px-4 border-b">Evening rush, competitor dropped price</td>
                    <td className="py-2 px-4 border-b font-bold">$84.99</td>
                    <td className="py-2 px-4 border-b text-green-600">52 sales</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border-b">11:00 PM</td>
                    <td className="py-2 px-4 border-b">Low traffic, need to clear inventory</td>
                    <td className="py-2 px-4 border-b font-bold">$74.99</td>
                    <td className="py-2 px-4 border-b text-green-600">29 sales</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mt-4">
              <strong>Result:</strong> 28% increase in daily revenue vs fixed pricing
            </p>
          </section>

          {/* Business Impact Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">
              💰 Business Impact
            </h2>
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

          {/* Technical Details Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              🔬 Technical Details
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Algorithm:</strong> Neural Network (Multi-layer Perceptron)</p>
              <p className="text-gray-700 mb-2"><strong>Library:</strong> TensorFlow/Keras</p>
              <p className="text-gray-700 mb-2"><strong>Training Data:</strong> 50,000+ transactions</p>
              <p className="text-gray-700 mb-2"><strong>Model Type:</strong> Supervised Learning (Regression)</p>
              <p className="text-gray-700 mb-2"><strong>Architecture:</strong> 3 hidden layers (128, 64, 32 neurons)</p>
              <p className="text-gray-700 mb-2"><strong>Features:</strong> 15 input variables</p>
              <p className="text-gray-700 mb-2"><strong>Accuracy:</strong> 93.8% price prediction accuracy</p>
              <p className="text-gray-700"><strong>Update Frequency:</strong> Real-time (every 15 minutes)</p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}