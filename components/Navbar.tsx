import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-linear-to-r from-slate-950 via-slate-900 to-slate-950 text-white shadow-2xl sticky top-0 z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition group">
            <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition">
              <span className="text-3xl">🛒</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">ShopSmart AI</h1>
              <p className="text-xs text-slate-400">Intelligent E-Commerce</p>
            </div>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="hover:text-blue-400 transition font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/#about" 
              className="hover:text-blue-400 transition font-medium relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/#algorithms" 
              className="hover:text-blue-400 transition font-medium relative group"
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}