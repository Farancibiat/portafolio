import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { translations } from '../data/translations'; // Ajusta la ruta si es necesario

// Crear el contexto
export const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    // Intentar obtener el idioma de localStorage, o usar 'es' por defecto
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'es';
  });

  // Guardar el idioma en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Función para cambiar el idioma
  const setLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
    } else {
      console.warn(`Language '${lang}' not found in translations. Defaulting to 'es'.`);
      setLanguageState('es');
    }
  }, []);

  // Función de traducción 't'
  const t = useCallback((key) => {
    const keys = key.split('.');
    let current = translations[language];

    for (let k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        // Si la clave no se encuentra, devolver la clave misma o un mensaje de error
        console.warn(`Translation key '${key}' not found for language '${language}'.`);
        return key; 
      }
    }
    return typeof current === 'string' ? current : key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar las traducciones
export const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context;
}; 