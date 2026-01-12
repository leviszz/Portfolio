import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import toggleTheme from "./components/header.jsx";

function App() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-gray-200 flex flex-col items-center justify-center">
      <Hero />
      </main>
    </div>
      
    
  );
}


export default App;
