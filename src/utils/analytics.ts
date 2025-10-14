// Google Analytics configuration
// Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics measurement ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID'; // Replace with your actual ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID') {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common events
export const trackContactForm = () => {
  trackEvent('contact_form_submit', 'engagement', 'contact_form');
};

export const trackServiceClick = (serviceName: string) => {
  trackEvent('service_click', 'engagement', serviceName);
};

export const trackPortfolioClick = (projectName: string) => {
  trackEvent('portfolio_click', 'engagement', projectName);
};
