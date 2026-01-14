

function Hero({lang, setLang, t}) {
  return (
    <section className="w-full bg-gray-200 dark:bg-slate-900 flex flex-col items-center justify-center text-center -translate-y-16">
        <div className="max-w-4xl mx-auto text-center py-12 px-6 margin-top-20">
            <h1 className="font-blod text-xl dark:text-white">{t.hero.title}</h1>
            <p className="mt-2 mb-5 text-base text-gray-600 dark:text-gray-400">{t.hero.subtitle}</p>
            
            <div className="flex flex-col items-center mt-1 ">
                <a href="#contato" className="border border-black dark:border-white dark:text-white dark:hover:text-black dark:hover:bg-white px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition mt-1 mb-1">{t.hero.ctaContact}</a>
                <a href="#projetos"className="
                     bg-black text-white dark:bg-gray-200 dark:text-black border border-black 
                        px-8 py-4 rounded-2xl 
                        font-medium text-lg
                        transition-all duration-300 ease-out
                        hover:-translate-y-1
                        hover:shadow-xl
                        hover:scale-[1.02]
                        active:scale-[0.98] mt-3
                        ">{t.hero.ctaProjects}
                </a>
                
            </div>
        </div>
    </section>
  );
}

export default Hero;