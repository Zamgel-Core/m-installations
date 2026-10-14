import { useState, useEffect } from 'react';
import { Language } from '../types';
import { getDictionary, Dictionary } from '../i18n';

const STORAGE_KEY = 'm_installations_lang';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check local storage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === 'en' || stored === 'es') {
        return stored;
      }
      // 2. Check navigator language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) {
        return 'es';
      }
    }
    // Default to English as specified
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    } catch {
      // localStorage may fail in restricted sandboxes
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'es' : 'en'));
  };

  const t: Dictionary = getDictionary(language);

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };
}
