import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Projects from "./components/projetos.jsx";
import Sobre from "./components/sobre.jsx";
import Contato from "./components/contato.jsx";
function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Hero />
      </main>
      <section 
        id="projetos"
        className=" pt-16 w-full max-w-7x1 bg-gray-200 flex items-center justify-center border-t border-gray-300"
      >
        <Projects />  
    
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="pt-16 min-h-screen bg-gray-200 flex items-center justify-center border-t border-gray-300"
      >
        <Sobre/>

      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="pt-16 min-h-screen bg-gray-200 flex items-center border-t border-gray-300 justify-center"
      >
        <Contato/>
     
      </section>
    </div>
      
    
  );
}


export default App;
