import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const stats = [
    { label: 'Curriculum', value: '교육 과정' },
    { label: 'Graduation Requirements', value: '졸업 요건' },
    { label: 'Faculty', value: '교수진' },
  ];

  return (
    <div className="min-h-screen bg-[#000510] text-white font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-blue-900/20 blur-[120px] rounded-full" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-blue-400 font-bold tracking-widest mb-4 uppercase text-sm">Yonsei University</h2>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-500">
              응용정보공학전공
            </h1>
            <p className="text-gray-400 text-xs md:text-xl max-w-2xl mx-auto leading-relaxed">
              기술을 넘어 가치를 창출합니다. <br />
              Home 페이지에 오신 것을 환영합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Cards */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-blue-500/50 transition-all"
            >
              <div className="text-blue-500 font-mono mb-2">0{idx + 1}.</div>
              <div className="text-2xl font-bold mb-2">{item.value}</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className='py-7 mx-auto font-mono text-xs text-gray-300 max-w-6xl text-center'>
        powered by Lee Jeha
      </footer>
    </div>
  );
}