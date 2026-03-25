import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Custom() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="text-gold text-xs tracking-widest uppercase mb-12 inline-block hover:opacity-70 transition-opacity">
          ← 返回首页
        </Link>

        <div className="text-center mb-24">
          <h1 className="text-4xl font-bold text-gold mb-4 tracking-tight">定制服务</h1>
          <p className="text-zinc-500 tracking-widest">专属印记，让好物更有温度</p>
          <div className="w-12 h-px bg-gold mx-auto mt-6"></div>
        </div>

        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="border-l-2 border-gold pl-8">
            <h2 className="text-2xl font-bold mb-6">专属定制，适配多元需求</h2>
            <p className="text-zinc-600 leading-relaxed text-sm">
              如果您喜欢 Zhiroads 的产品，可根据自身需求，将产品更换为您专属的 logo（个人 logo、企业 logo 均可），无论是个人使用、节日送礼，还是企业定制、员工福利，我们都能为您提供专属解决方案，保留产品本身的耐用、环保特质，让每一件好物都带有专属印记。
            </p>
          </div>
          <div className="bg-zinc-50 aspect-video overflow-hidden">
            <img src="/images/custom/custom.jpg" alt="定制示例" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-32">
          <div className="border-l-2 border-gold pl-8 mb-12">
            <h2 className="text-2xl font-bold">三大优势，让定制更省心</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🚚', title: '完整供应链', desc: '依托16年工厂实力，全流程自主把控，无需中间环节，保障品质与性价比。' },
              { icon: '⏱️', title: '快速出货', desc: '常规logo定制，小批量（10件起订）7-10个工作日出货，大批量可协商缩短。' },
              { icon: '🛡️', title: '品质保障', desc: '环保油墨，不脱落、不褪色，不影响产品耐用性，定制后享受正常保障。' }
            ].map((item, i) => (
              <div key={i} className="p-10 border border-gold/5 hover:border-gold/20 transition-colors text-center">
                <div className="text-3xl mb-6">{item.icon}</div>
                <h3 className="font-bold mb-4">{item.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="border-l-2 border-gold pl-8 mb-12">
              <h2 className="text-2xl font-bold">简单4步，完成专属定制</h2>
            </div>
            <div className="space-y-12">
              {[
                { step: '01', title: '咨询沟通', desc: '联系我们，告知定制需求（产品型号、logo样式、数量）。' },
                { step: '02', title: '方案确认', desc: '我们提供logo设计效果图，确认无误后签订协议。' },
                { step: '03', title: '生产定制', desc: '按方案生产，全程把控品质。' },
                { step: '04', title: '成品发货', desc: '检测合格后快速发货，同步物流信息。' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <span className="text-2xl font-bold text-gold/30">{item.step}</span>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-zinc-50 p-12 text-center">
             <h3 className="text-xl font-bold mb-8">立即开启定制</h3>
             <div className="space-y-4">
               <button className="gold-button w-full">开启定制</button>
               <Link to="/contact" className="outline-button w-full block text-center">联系我们</Link>
             </div>
             <p className="mt-8 text-[10px] text-zinc-400 tracking-widest uppercase">
               定制起订量：10件起（个人定制可协商）<br/>
               LOGO 定制可提供设计协助
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
