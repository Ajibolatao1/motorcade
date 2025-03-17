import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="es">Español</option>
      <option value="de">Deutsch</option>
      <option value="zh">中文</option>
      <option value="ar">العربية</option>
      <option value="hi">हिन्दी</option>
      <option value="ru">Русский</option>
      <option value="ja">日本語</option>
      <option value="pt">Português</option>
    </select>
  );
};

export default LanguageSwitcher;
