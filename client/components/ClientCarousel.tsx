import { useEffect, useRef } from 'react';

interface Client {
  name: string;
  category: string;
}

const clients: Client[] = [
  // FMCG
  { name: 'Coca-Cola', category: 'FMCG' },
  { name: 'Distell', category: 'FMCG' },
  { name: 'Heineken', category: 'FMCG' },
  // Automotive
  { name: 'SAB', category: 'Automotive' },
  { name: 'Bridgestone', category: 'Automotive' },
  // Mining
  { name: 'AngloAmerican', category: 'Mining' },
  // Energy
  { name: 'SASOL', category: 'Energy' },
  // ICT
  { name: 'Telkom', category: 'ICT' },
  { name: 'Samsung', category: 'ICT' },
  { name: 'NASPERS', category: 'ICT' },
  // Public Sector
  { name: 'Gauteng Province', category: 'Public Sector' },
  { name: 'SEDA', category: 'Public Sector' },
  // Financial Services
  { name: 'Standard Bank', category: 'Financial Services' },
  { name: 'P&G', category: 'Financial Services' },
  // Strategic Partners & NGO
  { name: 'NTHA', category: 'Partners' },
  { name: 'Eastern Cape Liquor', category: 'Partners' },
  { name: 'SABCOHA', category: 'Partners' },
];

export const ClientCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset to beginning when reaching the end
      if (scrollPosition >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0;
      }

      container.scrollLeft = scrollPosition;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation after a small delay
    const startAnimation = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 500);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(startAnimation);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-hidden pb-4 scroll-smooth"
        style={{
          scrollBehavior: 'smooth',
        }}
      >
        {/* Duplicate clients for seamless looping */}
        {[...clients, ...clients].map((client, idx) => (
          <ClientLogoCard key={idx} name={client.name} category={client.category} />
        ))}
      </div>
    </div>
  );
};

const ClientLogoCard = ({ name, category }: Client) => (
  <div className="flex-shrink-0 w-40 h-28 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg shadow-sm hover:shadow-md transition-all hover:bg-white/20 flex items-center justify-center p-4 group cursor-pointer">
    <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-2 flex items-center justify-center bg-gray-200 group-hover:bg-primary/30 rounded-lg transition-colors">
        <div className="text-lg font-bold text-gray-700 group-hover:text-primary transition-colors text-center">
          {name}
        </div>
      </div>
      <p className="text-xs text-gray-300 mt-1">{category}</p>
    </div>
  </div>
);
