import { en } from './en';
import { es } from './es';
import { Language } from '../types';

export const translations = {
  en,
  es,
};

export function getDictionary(lang: Language): typeof en {
  return translations[lang] || translations.en;
}

export type Dictionary = typeof en;
