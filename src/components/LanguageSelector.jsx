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
    <>
    <nav>
      <div className="logo">ABC</div>
      <div className="select-container">
        <select
          name="languages"
          id="languages"
          value={i18n.language} // Set the selected value to the current language
          onChange={(e) => changeLanguage(e.target.value)} // Call changeLanguage with the selected language code
          >
          {languages.map((lng) => (
            <option key={lng.code} value={lng.code}>
              {lng.lang}
            </option>
          ))}
        </select>
      </div>
    </nav>
    </>
  )
}

export default LanguageSelector