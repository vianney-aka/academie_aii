import { HERO_CONTENT } from '../data/constants';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-black -mt-[180px] pt-[180px]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_CONTENT.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
        <div className="text-white max-w-3xl pt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
            {HERO_CONTENT.description}
          </p>
          <button className="group bg-[#0095D9] hover:bg-[#0077B6] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2">
            <span>{HERO_CONTENT.buttonText}</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-4 right-6 text-white text-xs opacity-75">
        © Fabien Campoverde/Shutterstock.com
      </div>
    </section>
  );
};

export default Hero;
