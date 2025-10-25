import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-orange-50">
        
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-800 via-purple-600 to-orange-500 text-white py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🚀 Powered by Machine Learning
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              ShopSmart AI
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-light">
              Intelligent E-Commerce Solutions
            </p>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Empowering online retailers with AI-powered insights to boost sales, 
              prevent fraud, and create exceptional customer experiences.
            </p>
            
            <div className="mt-10 flex gap-4 justify-center">
              <Link 
                href="/#algorithms"
                className="px-8 py-4 bg-white text-purple-800 rounded-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition shadow-lg"
              >
                Explore Solutions →
              </Link>
              <Link 
                href="/#about"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg font-bold hover:bg-white/20 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-bold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-5xl font-extrabold text-gray-900 mt-2 mb-6">
              About ShopSmart AI
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We help online businesses make <span className="font-bold text-purple-800">smarter decisions</span> using 
                machine learning. Our platform analyzes your sales data, customer reviews, and buying patterns 
                to predict trends, optimize pricing, and maximize profits.
              </p>
              
              <div className="bg-white from-purple-50 to-orange-50 p-6 rounded-2xl border-l-4 border-purple-800">
                <h3 className="text-2xl font-bold text-purple-800 mb-3 flex items-center">
                  <span className="text-3xl mr-3">🎯</span> Our Mission
                </h3>
                <p className="text-gray-700">
                  To become the #1 trusted AI partner for e-commerce businesses worldwide, 
                  helping them leverage data-driven insights for competitive advantage.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  { icon: '⚡', title: 'Real-Time Insights', desc: 'Instant AI-powered analytics' },
                  { icon: '🎯', title: 'Proven Accuracy', desc: '92%+ prediction accuracy' },
                  { icon: '💰', title: 'Boost Revenue', desc: '40% increase in sales' },
                  { icon: '🛡️', title: 'Fraud Protection', desc: '99% fraud detection rate' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-3xl mr-4">{item.icon}</span>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Algorithms Section */}
        <section id="algorithms" className="bg-gradient-to-br from-purple-900 to-purple-700 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-orange-300 font-bold text-sm uppercase tracking-wider">Our Technology</span>
              <h2 className="text-5xl font-extrabold text-white mt-2 mb-6">
                AI-Powered Solutions
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Six powerful machine learning algorithms working together to solve 
                your biggest e-commerce challenges
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  num: 1, 
                  icon: '📈', 
                  title: 'Sales Forecasting', 
                  algo: 'Linear Regression',
                  desc: 'Predict future sales to optimize inventory',
                  color: 'from-blue-500 to-cyan-400',
                  href: '/algorithms/linear-regression'
                },
                { 
                  num: 2, 
                  icon: '💬', 
                  title: 'Sentiment Analysis', 
                  algo: 'Naive Bayes',
                  desc: 'Understand customer satisfaction instantly',
                  color: 'from-pink-500 to-rose-400',
                  href: '/algorithms/naive-bayes'
                },
                { 
                  num: 3, 
                  icon: '🎯', 
                  title: 'Product Recommendations', 
                  algo: 'K-Nearest Neighbors',
                  desc: 'Suggest what customers actually want',
                  color: 'from-purple-500 to-indigo-400',
                  href: '/algorithms/knn'
                },
                { 
                  num: 4, 
                  icon: '🔒', 
                  title: 'Fraud Detection', 
                  algo: 'Support Vector Machine',
                  desc: 'Block fraudulent transactions in real-time',
                  color: 'from-red-500 to-orange-400',
                  href: '/algorithms/svm'
                },
                { 
                  num: 5, 
                  icon: '⚠️', 
                  title: 'Churn Prediction', 
                  algo: 'Decision Tree',
                  desc: 'Retain customers before they leave',
                  color: 'from-amber-500 to-yellow-400',
                  href: '/algorithms/decision-tree'
                },
                { 
                  num: 6, 
                  icon: '💰', 
                  title: 'Dynamic Pricing', 
                  algo: 'Neural Network',
                  desc: 'Optimize prices for maximum profit',
                  color: 'from-green-500 to-emerald-400',
                  href: '/algorithms/neural-network'
                },
              ].map((card) => (
                <Link 
                  key={card.num}
                  href={card.href}
                  className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${card.color}`}></div>
                  
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{card.icon}</span>
                    <span className={`text-xs font-bold text-white bg-gradient-to-r ${card.color} px-3 py-1 rounded-full`}>
                      Algorithm {card.num}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 font-medium mb-3">
                    {card.algo}
                  </p>
                  
                  <p className="text-gray-700 mb-4">
                    {card.desc}
                  </p>
                  
                  <div className="flex items-center text-purple-800 font-bold group-hover:text-orange-500 transition">
                    Learn More 
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-2xl mr-2">🛒</span> ShopSmart AI
                </h3>
                <p className="text-gray-400">
                  Empowering e-commerce with intelligent machine learning solutions.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-orange-400">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/#about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                  <li><Link href="/#algorithms" className="text-gray-400 hover:text-white transition">Our Solutions</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4 text-orange-400">Contact</h4>
                <p className="text-gray-400">📧 contact@shopsmartai.com</p>
                <p className="text-gray-400">📱 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>© 2025 ShopSmart AI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}