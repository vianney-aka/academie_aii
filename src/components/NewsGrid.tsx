import React from 'react';

interface NewsItem {
  title: string;
  imageUrl: string;
  date?: string;
}

interface NewsGridProps {
  title: string;
  items: NewsItem[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ title, items }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-sm text-gray-900 line-clamp-3">
                  {item.title}
                </h3>
                {item.date && (
                  <p className="text-xs text-gray-500 mt-2">{item.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
