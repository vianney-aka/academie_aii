import { useEffect, useRef } from 'react';

interface DropdownCard {
  title: string;
  imageUrl: string;
  link: string;
}

interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  buttonText?: string;
  buttonText2?: string;
  cards: DropdownCard[];
}

const DropdownMenu = ({ isOpen, onClose, title, description, buttonText, buttonText2, cards }: DropdownMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className="absolute left-0 right-0 top-full bg-[#0095D9] shadow-2xl z-40 animate-slide-down"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-16 items-start">
          {/* Left: Text Content */}
          <div className="text-white space-y-5 lg:pr-8">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="text-base lg:text-lg leading-relaxed opacity-95">
                {description}
              </p>
            )}
            {(buttonText || buttonText2) && (
              <div className="flex flex-wrap gap-3 pt-3">
                {buttonText && (
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white text-sm lg:text-base px-6 lg:px-7 py-3 lg:py-3.5 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>{buttonText}</span>
                  </a>
                )}
                {buttonText2 && (
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white text-sm lg:text-base px-6 lg:px-7 py-3 lg:py-3.5 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span>{buttonText2}</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right: Cards Grid */}
          <div className={`grid gap-4 ${
            cards.length <= 4 
              ? 'grid-cols-2 lg:grid-cols-2' 
              : cards.length <= 6
              ? 'grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-2 lg:grid-cols-4'
          }`}>
            {cards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-white/10 hover:border-white/30"
              >
                {/* Card Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20 transition-all duration-300"></div>
                </div>

                {/* Card Title */}
                <div className="relative h-full flex items-center justify-center p-4 lg:p-5">
                  <h3 className="text-white text-center font-bold text-sm lg:text-base xl:text-lg leading-tight drop-shadow-2xl tracking-wide">
                    {card.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
