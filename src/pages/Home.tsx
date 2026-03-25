import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [heroWordmarkOk, setHeroWordmarkOk] = useState(true);
  const values = [
    { title: '克制', desc: '减少不必要的表达与消耗' },
    { title: '长期主义', desc: '产品是被反复使用的，而不是被一次性消费的' },
    { title: '诚实材料', desc: '选择真实、耐用、负责任的材料' },
    { title: '轻负担', desc: '不制造心理压力，不制造过度拥有' },
    { title: '安静存在', desc: '不过度强调自己，而是在需要时出现' }
  ];

  const principles = [
    { title: '少形容，多事实', desc: '不过度堆砌词汇' },
    { title: '少情绪，多理性', desc: '不制造热血口号' },
    { title: '少承诺，多陪伴', desc: '不说“改变世界”，只说“长期使用”' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center z-10"
        >
          {heroWordmarkOk ? (
            <img
              src="/images/brand/zhiroads-wordmark-gold.png"
              alt="ZHIROADS"
              className="mx-auto mb-8 w-full max-w-[1500px] h-auto"
              onError={() => setHeroWordmarkOk(false)}
            />
          ) : (
            <h1 className="text-7xl md:text-9xl font-bold text-gold mb-8 tracking-tighter">
              ZHIROADS
            </h1>
          )}
          
          <div className="space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl text-zinc-800 tracking-[0.2em] font-light">
              轻装而行
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-widest font-light">
              不是拒绝生活的丰富，而是拒绝不必要的负担。<br/>
              不是追求复杂表达，而是选择诚实与克制。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/products" className="gold-button w-full sm:w-auto">
              探索好物
            </Link>
            <Link to="/about" className="outline-button w-full sm:w-auto">
              关于我们
            </Link>
          </div>
        </motion.div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 border-t border-gold/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-gold text-xs tracking-[0.4em] uppercase mb-6 block">Core Concept / 核心理念</span>
              <h3 className="text-4xl font-bold mb-8 tracking-tight">真正值得留下的事物，<br/>应该经得起长期使用。</h3>
              <p className="text-zinc-500 leading-relaxed tracking-wide text-sm">
                Zhiroads 相信，设计可以长期使用的日常物品，减少不必要的消耗，让生活更轻一点。我们让产品回归日常，让使用变得简单，让关系变得长久。
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12">
              {values.map((v, i) => (
                <div key={i} className="group">
                  <div className="flex items-baseline space-x-4 mb-2">
                    <span className="text-gold/30 text-xs font-bold">0{i + 1}</span>
                    <h4 className="text-lg font-bold group-hover:text-gold transition-colors">{v.title}</h4>
                  </div>
                  <p className="text-zinc-400 text-xs pl-8 tracking-widest leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Language Principles Section */}
      <section className="py-32 bg-zinc-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">Expression Principles / 表达原则</span>
            <h3 className="text-3xl font-bold tracking-tight">少形容，多事实</h3>
            <div className="w-12 h-px bg-gold mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {principles.map((p, i) => (
              <div key={i} className="text-center space-y-4">
                <h4 className="text-gold font-bold tracking-widest">{p.title}</h4>
                <p className="text-zinc-500 text-xs tracking-widest leading-loose">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-light italic text-zinc-800 leading-relaxed mb-12">
            “走得轻一点，路自然会直一些。”
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-px bg-gold/30"></div>
            <span className="text-gold text-xs tracking-[0.5em] uppercase">Zhiroads Lifestyle</span>
            <div className="w-8 h-px bg-gold/30"></div>
          </div>
        </motion.div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-32 px-6 bg-white border-t border-gold/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-gold text-xs tracking-[0.4em] uppercase mb-4 block">Selected Items / 精选好物</span>
              <h3 className="text-3xl font-bold tracking-tight">长期陪伴的实用伙伴</h3>
            </div>
            <Link to="/products" className="text-gold text-xs tracking-widest uppercase hover:opacity-70 transition-opacity border-b border-gold/20 pb-1">
              查看全部产品 →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { id: 1, name: 'Zhiroads棉布便携购物袋', cat: '手提袋', img: '/images/products/p1_rose_1.png' },
              { id: 13, name: 'Zhiroads不锈钢保温杯', cat: '杯具', img: '/images/products/p13_rose_1.png' },
              { id: 15, name: 'Zhiroads内胆电脑包', cat: '日用品', img: '/images/products/p15_rose_1.png' }
            ].map((p, i) => (
              <Link key={i} to="/products" className="group cursor-pointer">
                <div className="aspect-[4/5] bg-zinc-50 mb-6 overflow-hidden relative">
                  <span className="absolute inset-0 flex items-center justify-center text-gold/5 text-[10px] uppercase tracking-[1em]">Essential</span>
                  {p.img ? (
                    <img 
                      src={p.img} 
                      alt={p.name} 
                      className="absolute inset-0 w-full h-full object-contain object-center"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        const next = img.src.endsWith('.png') ? img.src.replace(/\.png$/, '.jpg') : '';
                        if (next && next !== img.src) {
                          img.src = next;
                          return;
                        }
                        img.style.display = 'none';
                      }}
                    />
                  ) : null}
                </div>
                <p className="text-[10px] text-gold uppercase tracking-widest mb-2">{p.cat}</p>
                <h4 className="font-bold text-sm tracking-wide">{p.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
