import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const PRODUCTS = [
  // Handbags (12)
  { 
    id: 1, 
    category: '手提袋', 
    name: 'Zhiroads棉布便携购物袋', 
    price: 258, 
    colors: ['玫红色', '黄色', '粉色', '酒红色'], 
    images: {
      '玫红色': ['/images/products/p1_rose_1.png', '/images/products/p1_rose_2.jpg'],
      '黄色': ['/images/products/p1_yellow_1.jpg'],
      '粉色': ['/images/products/p1_pink_1.jpg'],
      '酒红色': ['/images/products/p1_wine_1.jpg']
    },
    material: '优质纯棉', 
    size: '30cm×25cm×10cm', 
    desc: '便携轻量，结实耐磨，日常通勤与购物皆宜' 
  },
  { 
    id: 2, 
    category: '手提袋', 
    name: 'Zhiroads棉布便携购物袋小LOGO', 
    price: 258, 
    colors: ['黑色', '墨绿色'], 
    images: {
      '黑色': ['/images/products/p2_black_1.jpg'],
      '墨绿色': ['/images/products/p2_green_1.jpg']
    },
    material: '优质纯棉', 
    size: '35cm×30cm×12cm', 
    desc: '小LOGO点缀，低调百搭，加厚耐用更安心' 
  },
  { 
    id: 3, 
    category: '手提袋', 
    name: 'Zhiroads棉布便携购物袋中号', 
    price: 288, 
    colors: ['黑色', '墨绿色'], 
    images: {
      '黑色': ['/images/products/p3_black_1.jpg'],
      '墨绿色': ['/images/products/p3_green_1.jpg']
    },
    material: '优质纯棉', 
    size: '40cm×40cm', 
    desc: '中号容量更能装，轻便不累手，适合日常出行' 
  },
  { 
    id: 4, 
    category: '手提袋', 
    name: 'Zhiroads棉布大容量购物袋', 
    price: 328, 
    colors: ['黑色', '墨绿色'], 
    images: {
      '黑色': ['/images/products/p4_black_1.jpg'],
      '墨绿色': ['/images/products/p4_green_1.jpg']
    },
    material: '优质纯棉', 
    size: '28cm×20cm×8cm', 
    desc: '大容量承重强，分类好放，长短途出行都合适' 
  },
  { 
    id: 5, 
    category: '手提袋', 
    name: 'Zhiroads棉布绣花购物袋', 
    price: 288, 
    colors: ['黄色'], 
    images: {
      '黄色': ['/images/products/p5_yellow_1.jpg', '/images/products/p5_yellow_2.jpg']
    },
    material: '优质纯棉', 
    size: '25cm×30cm', 
    desc: '精致绣花细节，清爽好搭配，日常出街更有质感' 
  },
  { 
    id: 6, 
    category: '手提袋', 
    name: 'Zhiroads棉布绣花购物袋大号', 
    price: 358, 
    colors: ['玫红色', '黄色', '粉色', '酒红色'], 
    images: {
      '玫红色': ['/images/products/p6_rose_1.jpg'],
      '黄色': ['/images/products/p6_yellow_1.jpg'],
      '粉色': ['/images/products/p6_pink_1.jpg'],
      '酒红色': ['/images/products/p6_wine_1.jpg']
    },
    material: '优质纯棉', 
    size: '20cm×15cm', 
    desc: '大号绣花款更能装，结实耐用，出游购物一袋搞定' 
  },
  { 
    id: 7, 
    category: '手提袋', 
    name: 'Zhiroads棉布水桶购物袋', 
    price: 258, 
    colors: ['黑色', '墨绿色', '粉色', '黄色', '酒红色'], 
    images: {
      '黑色': ['/images/products/p7_black_1.jpg'],
      '墨绿色': ['/images/products/p7_green_1.jpg'],
      '粉色': ['/images/products/p7_pink_1.jpg'],
      '黄色': ['/images/products/p7_yellow_1.jpg'],
      '酒红色': ['/images/products/p7_wine_1.jpg']
    },
    material: '优质纯棉', 
    size: '32cm×38cm', 
    desc: '水桶版型开口大，取放方便，立体好收纳' 
  },
  { 
    id: 8, 
    category: '手提袋', 
    name: 'Zhiroads棉布水桶购物袋大号', 
    price: 358, 
    colors: ['黑色', '墨绿色'], 
    images: {
      '黑色': ['/images/products/p8_black_1.jpg'],
      '墨绿色': ['/images/products/p8_green_1.jpg']
    },
    material: '优质纯棉', 
    size: '34cm×36cm', 
    desc: '大号水桶版型更挺括，容量升级，通勤购物两用' 
  },
  { 
    id: 9, 
    category: '手提袋', 
    name: 'Zhiroads涤纶轻便可折叠购物袋', 
    price: 188, 
    colors: ['玫红色', '粉色', '黑色', '墨绿色'], 
    images: {
      '玫红色': ['/images/products/p9_rose_1.jpg'],
      '粉色': ['/images/products/p9_pink_1.jpg'],
      '黑色': ['/images/products/p9_black_1.jpg'],
      '墨绿色': ['/images/products/p9_green_1.jpg']
    },
    material: '轻量帆布', 
    size: '25cm×30cm', 
    desc: '可折叠易收纳，轻便耐用，随身备用不占地' 
  },
  { 
    id: 10, 
    category: '手提袋', 
    name: 'Zhiroads PVC时尚手提袋', 
    price: 158, 
    colors: ['裸粉色', '海军蓝', '墨绿色', '玫红色'], 
    images: {
      '裸粉色': ['/images/products/p10_nude_1.jpg'],
      '海军蓝': ['/images/products/p10_navy_1.jpg'],
      '墨绿色': ['/images/products/p10_green_1.jpg'],
      '玫红色': ['/images/products/p10_rose_1.jpg']
    },
    material: '100%PVC', 
    size: '38cm×40cm', 
    desc: '时尚通透质感，防水易打理，出街吸睛' 
  },
  { 
    id: 11, 
    category: '手提袋', 
    name: 'Zhiroads PVC时尚手提袋大号', 
    price: 218, 
    colors: ['裸粉色', '海军蓝', '墨绿色', '玫红色'], 
    images: {
      '裸粉色': ['/images/products/p11_nude_1.jpg'],
      '海军蓝': ['/images/products/p11_navy_1.jpg'],
      '墨绿色': ['/images/products/p11_green_1.jpg'],
      '玫红色': ['/images/products/p11_rose_1.jpg']
    },
    material: '100%PVC', 
    size: '30cm×35cm', 
    desc: '大号更能装，通透高级感，雨天也不怕' 
  },
  { 
    id: 12, 
    category: '手提袋', 
    name: 'Zhiroads棉布艺术印花购物袋', 
    price: 328, 
    colors: ['墨绿色'], 
    images: {
      '墨绿色': ['/images/products/p12_green_1.jpg']
    },
    material: '优质纯棉', 
    size: '32cm×28cm', 
    desc: '艺术印花点亮造型，简约百搭，随手提升氛围' 
  },
  
  // Drinkware (2)
  { 
    id: 13, 
    category: '杯具', 
    name: 'Zhiroads不锈钢保温杯', 
    price: 218, 
    colors: ['酒红色', '粉色', '玫红色', '黄色', '黑色', '墨绿色', '金色'], 
    images: {
      '酒红色': ['/images/products/p13_wine_1.jpg'],
      '粉色': ['/images/products/p13_pink_1.jpg'],
      '玫红色': ['/images/products/p13_rose_1.jpg'],
      '黄色': ['/images/products/p13_yellow_1.jpg'],
      '黑色': ['/images/products/p13_black_1.jpg'],
      '墨绿色': ['/images/products/p13_green_1.jpg'],
      '金色': ['/images/products/p13_gold_1.jpg']
    },
    material: '316不锈钢', 
    size: '500ml', 
    desc: '长效保温保冷，密封防漏，通勤健身都适用' 
  },
  { 
    id: 14, 
    category: '杯具', 
    name: 'Zhiroads 陶瓷马克杯', 
    price: 98, 
    colors: ['酒红色', '粉色', '黄色', '黑色', '墨绿色'], 
    images: {
      '酒红色': ['/images/products/p14_wine_1.jpg'],
      '粉色': ['/images/products/p14_pink_1.jpg'],
      '黄色': ['/images/products/p14_yellow_1.jpg'],
      '黑色': ['/images/products/p14_black_1.jpg'],
      '墨绿色': ['/images/products/p14_green_1.jpg']
    },
    material: '优质陶瓷', 
    size: '400ml', 
    desc: '陶瓷杯身细腻顺滑，耐热易清洗，居家办公皆宜' 
  },
  
  // Daily Necessities (5)
  { 
    id: 15, 
    category: '日用品', 
    name: 'Zhiroads内胆电脑包', 
    price: 138, 
    colors: ['酒红色', '粉色', '黄色', '玫红色', '黑色', '墨绿色'], 
    images: {
      '酒红色': ['/images/products/p15_wine_1.jpg'],
      '粉色': ['/images/products/p15_pink_1.jpg'],
      '黄色': ['/images/products/p15_yellow_1.jpg'],
      '玫红色': ['/images/products/p15_rose_1.jpg'],
      '黑色': ['/images/products/p15_black_1.jpg'],
      '墨绿色': ['/images/products/p15_green_1.jpg']
    },
    material: '优质纯棉', 
    size: '13/14/16英寸', 
    desc: '加厚防震保护层，轻薄好携带，多尺寸适配' 
  },
  { 
    id: 16, 
    category: '日用品', 
    name: 'Zhiroads文具收纳袋', 
    price: 98, 
    colors: ['酒红色', '粉色', '黄色', '玫红色', '黑色', '墨绿色'], 
    images: {
      '酒红色': ['/images/products/p16_wine_1.jpg'],
      '粉色': ['/images/products/p16_pink_1.jpg'],
      '黄色': ['/images/products/p16_yellow_1.jpg'],
      '玫红色': ['/images/products/p16_rose_1.jpg'],
      '黑色': ['/images/products/p16_black_1.jpg'],
      '墨绿色': ['/images/products/p16_green_1.jpg']
    },
    material: '优质纯棉', 
    size: '20cm×10cm×5cm', 
    desc: '多格分区好整理，拉链顺滑耐用，文具小物一袋收齐' 
  },
  { 
    id: 17, 
    category: '日用品', 
    name: 'Zhiroads旅行化妆包', 
    price: 139, 
    colors: ['酒红色', '粉色', '黄色', '玫红色', '黑色', '墨绿色'], 
    images: {
      '酒红色': ['/images/products/p17_wine_1.jpg'],
      '粉色': ['/images/products/p17_pink_1.jpg'],
      '黄色': ['/images/products/p17_yellow_1.jpg'],
      '玫红色': ['/images/products/p17_rose_1.jpg'],
      '黑色': ['/images/products/p17_black_1.jpg'],
      '墨绿色': ['/images/products/p17_green_1.jpg']
    },
    material: '优质纯棉', 
    size: '22cm×14cm×12cm', 
    desc: '大容量分区收纳，防水耐脏，出差旅行必备' 
  },
  { 
    id: 18, 
    category: '日用品', 
    name: 'Zhiroads 棉质休闲帽', 
    price: 88, 
    colors: ['酒红色', '粉色', '黑色'], 
    images: {
      '酒红色': ['/images/products/p18_wine_1.jpg'],
      '粉色': ['/images/products/p18_pink_1.jpg'],
      '黑色': ['/images/products/p18_black_1.jpg']
    },
    material: '100% 纯棉', 
    size: '均码（可调节）', 
    desc: '纯棉透气亲肤，帽围可调节，日常遮阳百搭' 
  },
  { 
    id: 19, 
    category: '日用品', 
    name: 'Zhiroads 软面笔记本', 
    price: 68, 
    colors: ['粉色', '黄色', '黑色', '墨绿色'], 
    images: {
      '粉色': ['/images/products/p19_pink_1.jpg'],
      '黄色': ['/images/products/p19_yellow_1.jpg'],
      '黑色': ['/images/products/p19_black_1.jpg'],
      '墨绿色': ['/images/products/p19_green_1.jpg']
    },
    material: '优质软皮/道林纸', 
    size: 'A5', 
    desc: '软面轻便好携带，书写顺滑不洇墨，记录灵感随时' 
  },
];

const COLOR_MAP: Record<string, string> = {
  '玫红色': '#E91E63',
  '黄色': '#FFD700',
  '粉色': '#F48FB1',
  '酒红色': '#800020',
  '米白': '#F5F5F5',
  '浅灰': '#D3D3D3',
  '浅棕': '#A0522D',
  '深灰': '#4F4F4F',
  '淡金': '#D4AF37',
  '浅绿': '#90EE90',
  '军绿': '#556B2F',
  '浅蓝': '#ADD8E6',
  '浅粉': '#FFB6C1',
  '黑': '#000000',
  '黑色': '#000000',
  '墨绿色': '#006400',
  '裸粉色': '#FADADD',
  '海军蓝': '#000080',
  '橙色': '#FFA500',
  '金色': '#FFD700',
  '白': '#FFFFFF',
};

export default function Products() {
  const [filter, setFilter] = useState('全部');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeColor, setActiveColor] = useState<string>('');

  const filteredProducts = filter === '全部' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const getProductImage = (product: any, color: string) => {
    const colorIndex = product.colors.indexOf(color);
    if (colorIndex < 0) return '';
    return `/images/products/p${product.id}_rose_${colorIndex + 1}.png`;
  };

  const handleOpenDetail = (product: any) => {
    setSelectedProduct(product);
    setActiveColor(product.colors[0]);
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Link to="/" className="text-gold text-xs tracking-widest uppercase mb-12 inline-block hover:opacity-70 transition-opacity">
          ← 返回首页
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gold mb-4 tracking-tight">产品展示</h1>
          <p className="text-zinc-500 tracking-widest">实用好物，长期陪伴</p>
          <div className="w-12 h-px bg-gold mx-auto mt-6"></div>
        </div>

        {/* Filter */}
        <div className="flex justify-center space-x-8 mb-16 border-b border-gold/10 pb-6">
          {['全部', '手提袋', '杯具', '日用品'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs tracking-[0.3em] uppercase transition-colors ${filter === cat ? 'text-gold font-bold' : 'text-zinc-400 hover:text-gold'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => {
            const firstColor = product.colors[0];
            const displayImage = getProductImage(product, firstColor);

            return (
              <motion.div 
                layout
                key={product.id}
                className="group cursor-pointer max-w-[320px] w-full mx-auto"
                onClick={() => handleOpenDetail(product)}
              >
                <div className="aspect-[4/5] bg-zinc-50 mb-6 overflow-hidden relative">
                   <span className="absolute inset-0 flex items-center justify-center text-gold/10 text-[10px] uppercase tracking-widest">Product Image</span>
                   {displayImage ? (
                     <img 
                       src={displayImage} 
                       alt={product.name} 
                       className="absolute inset-0 w-full h-full object-contain object-center"
                       onError={(e) => {
                         const next = e.currentTarget.src.endsWith('.png') ? e.currentTarget.src.replace(/\.png$/, '.jpg') : '';
                         if (next && next !== e.currentTarget.src) {
                           e.currentTarget.src = next;
                           return;
                         }
                         e.currentTarget.style.display = 'none';
                       }}
                     />
                   ) : null}
                   <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-500"></div>
                </div>
                <h3 className="text-sm font-bold mb-2">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  {product.colors.map(c => (
                    <div 
                      key={c} 
                      className="w-3 h-3 rounded-full border border-gold/20" 
                      style={{ backgroundColor: COLOR_MAP[c] || '#f4f4f5' }}
                      title={c}
                    ></div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-bold text-sm">¥{product.price}</span>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest group-hover:text-gold transition-colors">查看详情 →</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/95 backdrop-blur-sm"
          >
            <div className="max-w-5xl w-full bg-white border border-gold/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-hidden">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 text-gold hover:rotate-90 transition-transform duration-300 z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>

              <div className="md:w-1/2 bg-zinc-50 flex flex-col">
                <div className="flex-1 relative aspect-square md:aspect-auto overflow-hidden">
                  <span className="absolute inset-0 flex items-center justify-center text-gold/20 uppercase tracking-[0.5em]">Detail Image</span>
                  {getProductImage(selectedProduct, activeColor) ? (
                    <motion.img 
                      key={activeColor}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      src={getProductImage(selectedProduct, activeColor)} 
                      alt={selectedProduct.name} 
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
              </div>

              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gold mb-2">{selectedProduct.name}</h2>
                  <p className="text-xl text-gold font-light">¥{selectedProduct.price}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-4 border-b border-gold/10 pb-1 inline-block">选择颜色</h4>
                  <div className="flex items-center space-x-4">
                    {selectedProduct.colors.map((c: string) => (
                      <button
                        key={c}
                        onClick={() => {
                          setActiveColor(c);
                        }}
                        className={`group relative p-1 rounded-full border-2 transition-all ${activeColor === c ? 'border-gold' : 'border-transparent'}`}
                        title={c}
                      >
                        <div 
                          className="w-6 h-6 rounded-full border border-gold/10" 
                          style={{ backgroundColor: COLOR_MAP[c] || '#f4f4f5' }}
                        ></div>
                        {activeColor === c && (
                          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-gold whitespace-nowrap font-bold">
                            {c}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 text-sm">
                  <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-2 border-b border-gold/10 pb-1 inline-block">材质</h4>
                    <p className="text-zinc-600">{selectedProduct.material}</p>
                  </div>
                  <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-2 border-b border-gold/10 pb-1 inline-block">尺寸</h4>
                    <p className="text-zinc-600">{selectedProduct.size}</p>
                  </div>
                  <div>
                    <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-2 border-b border-gold/10 pb-1 inline-block">特点</h4>
                    <p className="text-zinc-600">{selectedProduct.desc}</p>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <Link to="/contact" className="gold-button flex-1 text-center">联系我们</Link>
                  <Link to="/custom" className="outline-button flex-1 text-center">定制 LOGO</Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
