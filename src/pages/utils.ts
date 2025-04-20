import { NavigateFunction } from "react-router-dom"
import { EN_LANG, ZH_LANG } from "./const";
import { Dispatch, SetStateAction } from "react";

export const nav2Home = (navigate: NavigateFunction)=>{
    navigate('/')
}

export  const changeLanguage = (lang: string, setLang: Dispatch<SetStateAction<string>>, i18n: any) => {
    if (lang === EN_LANG) {
      setLang(ZH_LANG);
      i18n.changeLanguage(ZH_LANG);
    } else {
      setLang(EN_LANG);
      i18n.changeLanguage(EN_LANG);
    }
  };
