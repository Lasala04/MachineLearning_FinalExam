import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function LinearRegressionPage() {
  return (
    <>
      <Navbar />
      {/* Colorful Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12 px-6">
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
          
          {/* Business Problem Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-3">
              🎯 The Business Problem
            </h2>
            <p className="text-gray-700">
              Online retailers struggle to predict how many products they will sell next month. Order too little inventory = lost sales and disappointed customers. Order too much = wasted money on storage, potential markdowns, and tied-up capital.
            </p>
          </section>

          {/* How It Helps Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-purple-700 mb-3">
              💡 How Linear Regression Helps
            </h2>
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

          {/* Data We Use Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              📊 Data We Use
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Historical sales data (past 12-24 months)</li>
              <li>Seasonal trends (holidays, back-to-school, summer peaks)</li>
              <li>Marketing campaigns and promotional activities</li>
              <li>Day of week patterns (weekends vs weekdays)</li>
              <li>Economic indicators and market conditions</li>
            </ul>
          </section>

          {/* Visual Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              📈 Visual Results
            </h2>
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

          {/* Sample Results Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-indigo-700 mb-3">
              📊 Sample Results
            </h2>
            <p className="text-gray-700 mb-4">
              Here is an example prediction for an online clothing retailer:
            </p>
            <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-2 border-black">
            <thead>
            <tr className="bg-gray-100">
                <th className="py-2 px-4 border-2 border-black text-left text-black font-bold">Month</th>
                <th className="py-2 px-4 border-2 border-black text-left text-black font-bold">Predicted Sales</th>
                <th className="py-2 px-4 border-2 border-black text-left text-black font-bold">Actual Sales</th>
                <th className="py-2 px-4 border-2 border-black text-left text-black font-bold">Accuracy</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="py-2 px-4 border-2 border-black text-black">January 2025</td>
                <td className="py-2 px-4 border-2 border-black text-black">$45,000</td>
                <td className="py-2 px-4 border-2 border-black text-black">$44,200</td>
                <td className="py-2 px-4 border-2 border-black text-green-600 font-bold">98.2%</td>
            </tr>
            <tr className="bg-gray-50">
                <td className="py-2 px-4 border-2 border-black text-black">February 2025</td>
                <td className="py-2 px-4 border-2 border-black text-black">$38,000</td>
                <td className="py-2 px-4 border-2 border-black text-black">$39,100</td>
                <td className="py-2 px-4 border-2 border-black text-green-600 font-bold">97.1%</td>
            </tr>
            <tr className="bg-green-50">
                <td className="py-2 px-4 border-2 border-black text-black font-bold">March 2025</td>
                <td className="py-2 px-4 border-2 border-black text-green-700 font-bold">$52,500 (Forecast)</td>
                <td className="py-2 px-4 border-2 border-black text-black">Pending</td>
                <td className="py-2 px-4 border-2 border-black text-black">Pending</td>
            </tr>
            </tbody>
        </table>
        </div>
            <p className="text-gray-700 mt-4">
              <strong>Overall Model Accuracy:</strong> 92.5% on historical data
            </p>
          </section>

          {/* Business Impact Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-emerald-700 mb-3">
              💰 Business Impact
            </h2>
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

          {/* Technical Details Section */}
          <section className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              🔬 Technical Details
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Algorithm:</strong> Linear Regression</p>
              <p className="text-gray-700 mb-2"><strong>Library:</strong> scikit-learn</p>
              <p className="text-gray-700 mb-2"><strong>Training Data:</strong> 12,000+ transactions</p>
              <p className="text-gray-700 mb-2"><strong>Model Type:</strong> Supervised Learning</p>
              <p className="text-gray-700 mb-2"><strong>Features:</strong> 4 (month, day, promotions, holidays)</p>
              <p className="text-gray-700 mb-2"><strong>Accuracy:</strong> 92.5%</p>
              <p className="text-gray-700"><strong>Formula:</strong> <code className="bg-white px-2 py-1 rounded">Sales = (Month × Slope) + Intercept</code></p>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}