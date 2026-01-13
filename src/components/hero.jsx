

function Hero() {
  return (
    <section className="w-full bg-gray-200 flex flex-col items-center justify-center text-center -translate-y-16">
        <div className="max-w-4xl mx-auto text-center py-12 px-6 margin-top-20">
            <h1 className="font-blod text-xl">Desenvolvedor Frontend</h1>
            <p className="mt-2 mb-5 text-base text-gray-600">Criando interfaces modernas e responsivas com React e Tailwind</p>
            
            <div className="flex flex-col items-center mt-1 ">
                <a href="#contato" className="border border-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition mt-1 mb-1">Entre em contato</a>
                <a href="#projetos"className="
                     bg-black text-white 
                        px-8 py-4 rounded-2xl 
                        font-medium text-lg
                        transition-all duration-300 ease-out
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:scale-[1.02]
                        active:scale-[0.98] mt-3
                        ">Ver Projetos
                </a>
                
            </div>
        </div>
    </section>
  );
}

export default Hero;