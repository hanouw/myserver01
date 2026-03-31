import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function RootLayout() {
  const location = useLocation();

  // 현재 경로에 따라 활성화된 링크 스타일을 결정합니다.
  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#000510] text-white">
      {/* 🚀 Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#000510]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
            <Link to="/" className={`font-bold tracking-tighter text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 ${
                isActive('/') ? 'text-blue-400' : 'text-gray-400'
              }`}>
              YONSEI AIE
            </Link>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex gap-8 items-center">
            <Link 
              to="/" 
              className={`relative py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                isActive('/') ? 'text-blue-400' : 'text-gray-400'
              }`}
            >
              홈으로
              {isActive('/') && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
              )}
            </Link>
            
            <Link 
              to="/about" 
              className={`relative py-2 text-sm font-medium transition-colors hover:text-blue-400 ${
                isActive('/about') ? 'text-blue-400' : 'text-gray-400'
              }`}
            >
              소개(About)
              {isActive('/about') && (
                <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />
              )}
            </Link>
          </div>

          {/* Mobile Menu Icon (Visual Only) */}
          <div className="md:hidden text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </div>
        </div>
      </nav>

      {/* 🎬 Main Content Area */}
      <main className="relative">
        {/* 배경 장식 (모든 페이지에서 공유되는 오로라 효과) */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
        <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
        
        <Outlet />
      </main>
    </div>
  );
}