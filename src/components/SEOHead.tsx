import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

const SEOHead = ({
  title,
  description,
  keywords,
  image = 'https://jsagency.com/og-image.jpg',
  type = 'website',
  noindex = false
}: SEOHeadProps) => {
  const location = useLocation();
  const { language } = useLanguage();
  const baseUrl = 'https://jsagency.com';
  const currentUrl = `${baseUrl}${location.pathname}${location.search}`;

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update lang attribute
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('id', 'html-root');

    // Basic SEO
    if (description) {
      updateMetaTag('description', description);
    }
    
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    // Robots
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    updateMetaTag('og:title', title || '.js agency — Soluciones digitales con otra perspectiva', true);
    updateMetaTag('og:description', description || 'Agencia de desarrollo web, recorridos virtuales, automatizaciones con IA y contenido aéreo en Almería.', true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:locale', language === 'es' ? 'es_ES' : 'en_US', true);
    updateMetaTag('og:site_name', '.js agency', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', title || '.js agency — Soluciones digitales con otra perspectiva', true);
    updateMetaTag('twitter:description', description || 'Agencia de desarrollo web, recorridos virtuales, automatizaciones con IA y contenido aéreo en Almería.', true);
    updateMetaTag('twitter:image', image, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Alternate language links (hreflang)
    const alternateEs = document.querySelector('link[rel="alternate"][hreflang="es"]') as HTMLLinkElement;
    const alternateEn = document.querySelector('link[rel="alternate"][hreflang="en"]') as HTMLLinkElement;
    const alternateXDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]') as HTMLLinkElement;

    const createAlternate = (lang: string, href: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    createAlternate('es', `${baseUrl}${location.pathname}?lang=es`);
    createAlternate('en', `${baseUrl}${location.pathname}?lang=en`);
    createAlternate('x-default', `${baseUrl}${location.pathname}`);

  }, [title, description, keywords, image, type, noindex, currentUrl, language, location]);

  return null;
};

export default SEOHead;



