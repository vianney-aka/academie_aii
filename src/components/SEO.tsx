import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEO = ({ 
  title, 
  description, 
  keywords = 'AII, Académie Internationale Interuniversitaire, enseignement supérieur, recherche collaborative, universités africaines, excellence académique',
  image = 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&h=630&fit=crop',
  url,
  type = 'website'
}: SEOProps) => {
  
  useEffect(() => {
    // Update title
    document.title = `${title} | AII - Académie Internationale Interuniversitaire`;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph
    updateMetaTag('og:title', `${title} | AII`, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:image', image, true);
    if (url) {
      updateMetaTag('og:url', url, true);
    }
    updateMetaTag('og:site_name', 'Académie Internationale Interuniversitaire', true);
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', `${title} | AII`);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Additional SEO
    updateMetaTag('author', 'Académie Internationale Interuniversitaire');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'French');
    
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;
