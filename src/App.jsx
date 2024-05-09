import { Trans, useTranslation } from "react-i18next"
import LanguageSelector from "./components/LanguageSelector"

const App = () => {
  const { t } = useTranslation()

  // const {line1, line2} = t("description", {
  //   name: "Anudit"
  // })
  
  const description = t("description")

  return (
    <>
      <LanguageSelector />
      <div className="container top">
        <div className="description">
          <h1 className="hero-title">{t("title")}</h1>
          <span>
            <Trans 
              i18nKey = {description}
              // i18nKey = {line1}
              // values = {{
              //   name: "Anudit"
              // }}
              // components={{
              //   1:<b />
              // }}
            />
          </span>
        </div>
        <div className="image">
          <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
      <div className="container">
        <div className="image">
            <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        <div className="description">
          <h3 className="hero-title">{t("title")}</h3>
          <span>
            <Trans 
              i18nKey = {description}
              // i18nKey = {line1}
              // values = {{
              //   name: "Anudit"
              // }}
              // components={{
              //   1:<b />
              // }}
            />
          </span>
        </div>
      </div>
    </>
  )
}

export default App