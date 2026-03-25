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
          <div className="bg-zinc-50 aspect-video overflow-hidden">
            <img src="/images/about/factory.jpg" alt="工厂图片" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-32">
          <div className="border-l-2 border-gold pl-8 mb-12">
            <h2 className="text-2xl font-bold">匠心工艺，每一步都经得起时间考验</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: '原材料筛选', desc: '选用环保、耐用的原生材质，拒绝劣质原料，从源头保障产品寿命。', image: '/images/about/process-01.jpg' },
              { title: '匠心制作', desc: '手工+机械结合，重点工序手工打磨，兼顾效率与品质。', image: '/images/about/process-02.jpg' },
              { title: '严格检测', desc: '每一件产品出厂前经过多道质量检测，杜绝瑕疵，确保耐用性。', image: '/images/about/process-03.jpg' },
              { title: '简约包装', desc: '采用可降解环保包装，无多余装饰，贴合“环保、克制”的品牌理念。', image: '/images/about/process-04.jpg' }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-full aspect-square bg-zinc-50 mb-4 overflow-hidden relative">
                  <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold text-gold bg-white/80 border border-gold/20 px-2 py-1 rounded-sm">
                    0{i + 1}
                  </span>
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
                { year: '2010年', event: '杭州成立进出口公司，组建3人团队，主营无纺布袋、西装袋、纸袋等产品。' },
                { year: '2012年', event: '组建数字营销团队并开通首个国际站，在温州建立10人规模、100㎡厂房的制袋厂。' },
                { year: '2013-2014年', event: '运营3个国际站平台与15人数字营销团队，工厂扩至50人，新增托特包产品线。' },
                { year: '2015年', event: '成为麦当劳、沃尔玛等世界500强及迪士尼中国区供应商，工厂规模扩充至200人。' },
                { year: '2016年', event: '成为可口可乐北美及中国区购物袋指定供应商，获“绿灯”认证，跻身苍南制袋业TOP5。' },
                { year: '2017-2018年', event: '产品出口覆盖158个国家，完成自动化升级实现精益生产，厂房面积拓展至10,000㎡。' },
                { year: '2019年', event: '运营8个国际站店铺并拓展家居玩具类产品，整合169家供应商服务超10,000名海外客户，获“杭商领袖”称号，位列苍南制袋业TOP3。' },
                { year: '2020-2021年', event: '数字团队增至40人并建立3个品牌独立站，产品升级为高端零售包袋，每年新增2500+电商客户。' },
                { year: '2022-2023年', event: '创立海外品牌Zhiroads，获10,000㎡政府工业用地，引进数码UV/升华印刷技术，成为苍南制袋业TOP1。' },
                { year: '2024-2025年', event: '战略升级为全球环保袋一站式解决方案提供商，拓展印刷设备及个性化定制服务，成为阿玛尼全球指定供应商。' }
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
                  <div className="w-full flex-1 bg-zinc-50 mb-2 overflow-hidden">
                    <img src={`/images/about/cert-${String(i).padStart(2, '0')}.jpg`} alt={`资质证书 ${i}`} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest text-center">{i === 1 ? 'ISO 9001' : i === 2 ? 'SMETA' : i === 3 ? 'BSCI' : i === 4 ? 'SGS' : `资质证书 ${i}`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
