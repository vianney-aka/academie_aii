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
      className="absolute left-0 right-0 top-full bg-[#0095D9] shadow-2xl z-40 animate-fade-in"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20 items-start">
          {/* Left: Text Content */}
          <div className="text-white space-y-6">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold leading-snug tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="text-base lg:text-lg leading-relaxed opacity-95">
                {description}
              </p>
            )}
            {(buttonText || buttonText2) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {buttonText && (
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white text-sm lg:text-base px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
                  >
                    <span>{buttonText}</span>
                  </a>
                )}
                {buttonText2 && (
                  <a 
                    href="#" 
                    className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white text-sm lg:text-base px-5 lg:px-6 py-2.5 lg:py-3 rounded-full font-medium transition-all duration-200 hover:scale-105"
                  >
                    <span>{buttonText2}</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right: Cards Grid */}
          <div className={`grid gap-3 lg:gap-4 ${cards.length <= 4 ? 'grid-cols-2' : 'grid-cols-2 lg:grid-cols-4'}`}>
            {cards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                className="group relative overflow-hidden rounded-xl aspect-video shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                {/* Card Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10 transition-all duration-300"></div>
                </div>

                {/* Card Title */}
                <div className="relative h-full flex items-center justify-center p-3 lg:p-4">
                  <h3 className="text-white text-center font-semibold text-xs lg:text-sm xl:text-base leading-tight drop-shadow-lg">
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
