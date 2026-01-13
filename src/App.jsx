import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import Projects from "./components/projetos.jsx";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Hero />
      </main>
      <section 
        id="projetos"
        className=" w-full max-w-7x1 bg-gray-200 flex items-center justify-center border-t border-gray-300"
      >
        <Projects />  
    
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="min-h-screen bg-gray-200 flex items-center justify-center border-t border-gray-300"
      >

      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="min-h-screen bg-gray-200 flex items-center justify-center"
      >
     
      </section>
    </div>
      
    
  );
}


export default App;
