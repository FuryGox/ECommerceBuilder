"use client";
import { createContext, useContext } from 'react';
import i18n from '@/i18next/i18next_config';

interface I18nContextProps {
  changeLanguage: (lang: string) => void;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <I18nContext.Provider value={{ changeLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useChangeLanguage = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useChangeLanguage must be used within I18nProvider');
  }
  return context;
};
