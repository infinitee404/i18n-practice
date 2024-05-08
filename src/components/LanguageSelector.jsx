import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const languages= [
  {code: "en", lang: "English"},
  {code: "fr", lang: "French"},
  {code: "np", lang: "Nepali"},
  {code: "ar", lang: "Arabic"},
]

const LanguageSelector = () => {
  
  const {i18n} = useTranslation()
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)  
  }

  // handle RTL languages (for example arabic)
  useEffect(()=>{
    document.body.dir = i18n.dir()
  },[i18n, i18n.language])
  
  return (
    <div className="button-container">
      {languages.map((lng) => {
        return (
          <button 
            className={lng.code === i18n.language ? "selected" : ""} 
            key={lng.code} 
            onClick={() => changeLanguage(lng.code)} 
          >
            {lng.lang}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSelector