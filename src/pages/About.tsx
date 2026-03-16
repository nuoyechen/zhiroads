import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="text-gold text-xs tracking-widest uppercase mb-12 inline-block hover:opacity-70 transition-opacity">
          ← 返回首页
        </Link>
        
        <div className="text-center mb-24">
          <h1 className="text-4xl font-bold text-gold mb-4 tracking-tight">关于我们</h1>
          <p className="text-zinc-500 tracking-widest">16年匠心，做长期陪伴的实用好物</p>
          <div className="w-12 h-px bg-gold mx-auto mt-6"></div>
        </div>

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="border-l-2 border-gold pl-8">
            <h2 className="text-2xl font-bold mb-6">16年工厂，坚守品质初心</h2>
            <p className="text-zinc-600 leading-relaxed text-sm">
              Zhiroads 依托16年资深日用品生产工厂，不追求快速迭代的潮流，专注于研发、生产可反复使用的实用日用品，坚守‘耐用、环保、简约’的初心，从原材料筛选到成品出厂，每一步都力求严谨，只为给用户提供长期陪伴的好物，打破‘快消品’的短期思维，传递克制消费的生活理念。
            </p>
          </div>
          <div className="bg-zinc-50 aspect-video flex items-center justify-center">
             <span className="text-gold/20 text-xs uppercase tracking-[0.5em]">Factory Image Placeholder</span>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-32">
          <div className="border-l-2 border-gold pl-8 mb-12">
            <h2 className="text-2xl font-bold">匠心工艺，每一步都经得起时间考验</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: '原材料筛选', desc: '选用环保、耐用的原生材质，拒绝劣质原料，从源头保障产品寿命。' },
              { title: '匠心制作', desc: '手工+机械结合，重点工序手工打磨，兼顾效率与品质。' },
              { title: '严格检测', desc: '每一件产品出厂前经过多道质量检测，杜绝瑕疵，确保耐用性。' },
              { title: '简约包装', desc: '采用可降解环保包装，无多余装饰，贴合“环保、克制”的品牌理念。' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-full aspect-square bg-zinc-50 mb-4 flex items-center justify-center text-gold/10">
                  <span className="text-4xl font-bold">0{i+1}</span>
                </div>
                <h3 className="font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-[10px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="border-l-2 border-gold pl-8 mb-12">
              <h2 className="text-2xl font-bold">岁月沉淀，实力见证</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gold/20">
              {[
                { year: '2008年', event: '工厂成立，专注日用品生产，奠定品质基础。' },
                { year: '2015年', event: '聚焦“耐用环保”赛道，优化供应链，提升产品耐用性。' },
                { year: '2020年', event: '推出Zhiroads品牌，明确“长期陪伴的实用伙伴”定位。' },
                { year: '至今', event: '深耕持久日用品领域，完善产品体系，获得行业多项资质认证。' }
              ].map((item, i) => (
                <div key={i} className="pl-8 relative">
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-white border-2 border-gold"></div>
                  <h4 className="font-bold text-gold mb-1">{item.year}</h4>
                  <p className="text-zinc-500 text-xs">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="border border-gold/10 aspect-[3/4] flex flex-col items-center justify-center p-4">
                  <div className="w-12 h-16 bg-zinc-50 mb-2"></div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest text-center">资质证书 {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
