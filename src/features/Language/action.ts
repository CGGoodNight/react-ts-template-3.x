import { CHANGE_LANGUAGE } from './constants';

export interface IChangeLanguage {
  type: CHANGE_LANGUAGE;
  payload: string
}

export function changeLanguage(lang: string): IChangeLanguage {
  return {
    payload: lang,
    type: CHANGE_LANGUAGE
  }
}