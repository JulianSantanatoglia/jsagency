import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  locale?: string;
}

const SEO = ({
  title = ".js agency — Soluciones digitales con otra perspectiva",
  description = "Agencia de desarrollo web, recorridos virtuales, automatizaciones con IA y contenido aéreo en Almería. Especialistas en React, tours 360° con Insta360 X5 y fotografía aérea. Soluciones digitales profesionales.",
  keywords = "desarrollo web, recorridos virtuales, tours 360, Insta360, React, JavaScript, Almería, España, agencia digital, automatización IA, fotografía aérea, inmobiliarias, hoteles",
  image = "https://jsagency.com/og-image.jpg",
  url = "https://jsagency.com",
  type = "website",
  author = ".js agency",
  publishedTime,
  modifiedTime,
  locale = "es_ES"
}: SEOProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'Spanish');
    updateMetaTag('geo.region', 'ES-AL');
    updateMetaTag('geo.placename', 'Almería');
    updateMetaTag('geo.position', '36.8381;-2.4597');
    updateMetaTag('ICBM', '36.8381, -2.4597');

    // Update Open Graph tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:locale', locale, true);
    updateMetaTag('og:site_name', '.js agency', true);

    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Update structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "Organization",
      ...(type === "article" ? {
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": ".js agency",
          "logo": {
            "@type": "ImageObject",
            "url": "https://jsagency.com/logo.png"
          }
        },
        "datePublished": publishedTime,
        "dateModified": modifiedTime || publishedTime
      } : {
        "name": ".js agency",
        "url": url,
        "logo": "https://jsagency.com/logo.png",
        "description": description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Almería",
          "addressCountry": "ES"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34-XXX-XXX-XXX",
          "contactType": "customer service",
          "email": "hola@jsagency.com",
          "availableLanguage": "Spanish"
        },
        "sameAs": [
          "https://linkedin.com/company/jsagency",
          "https://twitter.com/jsagency"
        ],
        "foundingDate": "2024",
        "numberOfEmployees": "2-10",
        "serviceArea": {
          "@type": "Country",
          "name": "Spain"
        }
      })
    };

    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, locale]);

  return null; // This component doesn't render anything
};

export default SEO;
