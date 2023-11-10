import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LAYOUT_EN from "../locales/en/layout.json";
import LAYOUT_VI from "../locales/vi/layout.json";
import LAYOUT_JP from "../locales/jp/layout.json";
import LAYOUT_ZH from "../locales/zh/layout.json";
import LAYOUT_KO from "../locales/ko/layout.json";
const resources = {
  en: {
    layout: LAYOUT_EN,
  },
  vi: {
    layout: LAYOUT_VI,
  },
  jp: {
    layout: LAYOUT_JP,
  },
  zh: {
    layout: LAYOUT_ZH,
  },
  ko: {
    layout: LAYOUT_KO,
  },
};

const defaultNS = "layout";

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  ns: ["layout"],
  fallbackLng: "vi",
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});
