interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  category?: string;
  date?: string;
  featured?: boolean;
}

const ArticleCard = ({ title, excerpt, imageUrl, category, date, featured = false }: ArticleCardProps) => {
  return (
    <article className={`group cursor-pointer ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-2xl transition-all duration-300 h-full">
        {/* Image */}
        <div className={`relative overflow-hidden ${featured ? 'h-96' : 'h-56'}`}>
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {category && (
            <span className="absolute top-4 left-4 bg-[#0095D9] text-white px-3 py-1 text-xs font-semibold rounded-full">
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className={`p-6 ${featured ? 'lg:p-8' : ''}`}>
          {date && (
            <time className="text-sm text-gray-500 mb-2 block">{date}</time>
          )}
          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-[#0095D9] transition-colors ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
            {title}
          </h3>
          <p className={`text-gray-600 leading-relaxed ${featured ? 'text-base lg:text-lg' : 'text-sm'}`}>
            {excerpt}
          </p>
          <div className="mt-4 flex items-center text-[#0095D9] font-semibold text-sm group-hover:translate-x-2 transition-transform">
            <span>Lire la suite</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
