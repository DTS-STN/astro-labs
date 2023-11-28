import { ui } from "./ui";

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key] as string
  };
}
