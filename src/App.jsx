import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

const App = () => {
  const { t } = useTranslation();

  const { feat1: a, feat2: b, feat3: c, feat4: d } = t("features");

  const description = t("description");

  return (
    <>
      <LanguageSelector />
      <div className="container top">
        <div className="description">
          <h1 className="title">{t("title")}</h1>
          <p>{description}</p> {/* Use t() directly for simple text */}
        </div>
        <div className="image">
          <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
      <div className="container">
        <div className="image">
          <img src="https://img.freepik.com/free-photo/top-view-safety-first-key-keyboard_23-2149919540.jpg?t=st=1715236404~exp=1715240004~hmac=7bdb34658fad158dafa2600aa97fcbd1969e41e85a122c9c7e76b0fc6d741897&w=1380" />
        </div>
        <div className="description">
          <h2 className="title">{t("second")}</h2>
          <ul>
            <li>{a}</li>
            <li>{b}</li>
            <li>{c}</li>
            <li>{d}</li>
          </ul>
          <button className="btn">{t("button")}</button>
        </div>
      </div>
      <footer>
        
      </footer>
    </>
  );
};

export default App;
