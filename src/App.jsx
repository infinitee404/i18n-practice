import { Trans, useTranslation } from 'react-i18next'
import LanguageSelector from './components/LanguageSelector'

const App = () => {
  const { t } = useTranslation()

  // const {line1, line2} = t("description", {
  //   name: "Anudit"
  // })
  
  const {line1, line2} = t("description")

  return (
    <div className='container'>
      <LanguageSelector />
      <h1>{t("greeting")}</h1>
      <span>
        <Trans 
          // i18nKey = {description.line1}
          i18nKey = {line1}
          values = {{
            name: "Anudit"
          }}
          components={{
            1:<b />
          }}
        />
      </span>
      <p>{line2}</p>
    </div>
  )
}

export default App