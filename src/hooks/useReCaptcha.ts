import { useCallback } from 'react';

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

// IMPORTANTE: Reemplaza esta clave con tu Site Key de reCAPTCHA v3
// O configura la variable de entorno VITE_RECAPTCHA_SITE_KEY en tu archivo .env
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

export const useReCaptcha = () => {
  const executeRecaptcha = useCallback(async (action: string = 'submit'): Promise<string | null> => {
    return new Promise((resolve) => {
      if (!window.grecaptcha) {
        console.error('reCAPTCHA no está cargado');
        resolve(null);
        return;
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action })
          .then((token: string) => {
            resolve(token);
          })
          .catch((error: Error) => {
            console.error('Error ejecutando reCAPTCHA:', error);
            resolve(null);
          });
      });
    });
  }, []);

  return { executeRecaptcha };
};
