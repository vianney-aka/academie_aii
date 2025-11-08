import React from 'react';

interface ContentSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
  buttonText?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  imageUrl,
  imagePosition = 'left',
  buttonText = 'En savoir plus'
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-8 items-center ${imagePosition === 'right' ? 'md:grid-flow-col-dense' : ''}`}>
          {/* Image */}
          <div className={imagePosition === 'right' ? 'md:col-start-2' : ''}>
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className={imagePosition === 'right' ? 'md:col-start-1 md:row-start-1' : ''}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {title}
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>
            <button className="bg-unesco-blue hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold transition duration-300">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
