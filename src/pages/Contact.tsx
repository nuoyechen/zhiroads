import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="text-gold text-xs tracking-widest uppercase mb-12 inline-block hover:opacity-70 transition-opacity">
          ← 返回首页
        </Link>

        <div className="text-center mb-24">
          <h1 className="text-4xl font-bold text-gold mb-4 tracking-tight">联系我们</h1>
          <p className="text-zinc-500 tracking-widest">用心沟通，真诚相伴</p>
          <div className="w-12 h-px bg-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Map Section */}
          <div className="bg-zinc-50 aspect-square relative overflow-hidden flex flex-col items-center justify-center border border-gold/5">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="z-10 text-center p-8">
               <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gold/20">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
               </div>
               <h3 className="font-bold text-gold mb-2">工厂/办公地址</h3>
               <p className="text-xs text-zinc-500 mb-6">XXXX省XXXX市XXXX区XXXX路XXXX号</p>
               <button className="gold-button scale-75">开启导航</button>
            </div>
            
            {/* Secondary Marker */}
            <div className="absolute top-1/4 right-1/4 group cursor-pointer">
               <div className="w-8 h-8 bg-white border-2 border-gold rounded-full flex items-center justify-center text-gold shadow-md group-hover:scale-110 transition-transform">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
               </div>
               <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-white p-2 border border-gold/10 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <p className="text-[10px] font-bold text-gold uppercase tracking-widest">线下门店 A</p>
                  <p className="text-[8px] text-zinc-400">营业中 9:30-21:00</p>
               </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-16">
            <div>
              <h2 className="text-xl font-bold text-gold mb-6 border-b border-gold/10 pb-2 inline-block">联系我们</h2>
              <div className="space-y-6 text-sm">
                <div className="flex items-start space-x-4">
                  <span className="text-gold">📞</span>
                  <div>
                    <p className="font-bold">咨询电话</p>
                    <p className="text-zinc-500">XXX-XXXXXXX (9:00-18:00)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-gold">💬</span>
                  <div>
                    <p className="font-bold">微信咨询</p>
                    <p className="text-zinc-500">Zhiroads_Support (备注“咨询”)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-gold">✉️</span>
                  <div>
                    <p className="font-bold">邮箱咨询</p>
                    <p className="text-zinc-500">contact@zhiroads.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-gold mb-6 border-b border-gold/10 pb-2 inline-block">线下门店</h2>
              <div className="space-y-8">
                <div>
                  <p className="font-bold text-sm mb-1">Zhiroads 旗舰店 (XX商场店)</p>
                  <p className="text-zinc-500 text-xs mb-1">地址：XXXX省XXXX市XXXX区XXXX路XXXX号</p>
                  <p className="text-zinc-400 text-[10px] uppercase tracking-widest">营业时间：9:30-21:00 · 电话：XXX-XXXXXXX</p>
                </div>
                <div>
                  <p className="font-bold text-sm mb-1">Zhiroads 概念店 (XX创意园区店)</p>
                  <p className="text-zinc-500 text-xs mb-1">地址：XXXX省XXXX市XXXX区XXXX路XXXX号</p>
                  <p className="text-zinc-400 text-[10px] uppercase tracking-widest">营业时间：10:00-20:00 · 电话：XXX-XXXXXXX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
