import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Projects from "./components/projetos.jsx";
import Sobre from "./components/sobre.jsx";
import Contato from "./components/contato.jsx";
import Footer from "./components/footer.jsx";
import { useEffect, useState } from "react";
import pt from "./i18n/pt.js";
import en from "./i18n/en.js";
function App() {

  const [dark, setDark] = useState(false);

    useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

    const [lang, setLang] = useState("pt");

    const t = lang === "pt" ? pt : en;



  return (
    <div className="scroll-smooth">
      
      <Header dark={dark} setDark={setDark} lang={lang} setLang={setLang} t={t} />
      <main className="min-h-screen  bg-gray-200 dark:bg-slate-900 flex flex-col items-center justify-center">
      <Hero lang={lang} setLang={setLang} t={t} />
      </main>
      <section 
        id="projects"
        className=" pt-16 w-full max-w-7x1 bg-gray-200 dark:bg-slate-900 flex items-center justify-center border-t border-gray-300 dark:border-slate-800"
      >
        <Projects lang={lang} setLang={setLang} t={t} />  
    
      </section>

      {/* SOBRE */}
      <section
        id="about"
        className="pt-16 min-h-screen bg-gray-200 dark:bg-slate-900 flex items-center justify-center border-t border-gray-300 dark:border-slate-800"
      >
        <Sobre lang={lang} setLang={setLang} t={t} />

      </section>

      {/* CONTATO */}
      <section
        id="contact"
        className="pt-16 min-h-screen bg-gray-200 dark:bg-slate-900 flex items-center border-t border-gray-300 justify-center dark:border-slate-800"
      >
        <Contato lang={lang} setLang={setLang} t={t} />
     
      </section>

      <section>
      <Footer lang={lang} setLang={setLang} t={t} />
      </section>
    </div>
      
    
  );
}


export default App;
