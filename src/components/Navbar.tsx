import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const homeScrolled = isHome && isScrolled;
  const nonHomeScrolled = !isHome && isScrolled;
  const [wordmarkOk, setWordmarkOk] = useState(true);

  // Force re-check image loading when src changes
  useEffect(() => {
    setWordmarkOk(true);
  }, [homeScrolled]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: '首页', path: '/' },
    { name: '关于我们', path: '/about' },
    { name: '产品展示', path: '/products' },
    { name: '定制服务', path: '/custom' },
    { name: '联系我们', path: '/contact' },
  ];

  const wordmarkSrc = homeScrolled ? '/images/brand/zhiroads-wordmark-white.png' : '/images/brand/zhiroads-wordmark-gold.png';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isHome ? (isScrolled ? 'bg-gold/70 backdrop-blur-md' : 'bg-transparent') : `bg-white/90 backdrop-blur-md ${nonHomeScrolled ? 'border-b-4 border-gold/60' : 'border-b-4 border-transparent'}`}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center" aria-label="ZHIROADS">
          {wordmarkOk ? (
            <img
              src={wordmarkSrc}
              alt="ZHIROADS"
              className="h-12 w-auto transition-all duration-300"
              onError={() => setWordmarkOk(false)}
            />
          ) : (
            <span className={`text-2xl font-bold tracking-tighter ${homeScrolled ? 'text-white' : 'text-gold'}`}>ZHIROADS</span>
          )}
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={homeScrolled ? 'uppercase text-xs tracking-widest transition-colors duration-300 text-white hover:text-white/80' : `nav-link ${location.pathname === item.path ? 'text-gold' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Simplified for now */}
        <div className={`md:hidden ${homeScrolled ? 'text-white' : 'text-gold'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </div>
    </nav>
  );
}
