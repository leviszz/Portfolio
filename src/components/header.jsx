import GithubIcon from "../assets/icons/github.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import { useEffect, useState } from "react";


function Header({ dark, setDark, lang, setLang, t }) {
  return (
    <header className=" h-16 fixed top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-slate-900 dark:bg-slate-950">
      <div className="mx-auto flex items-center justify-between px-6 py-4">
      <button
  onClick={() => setDark(!dark)}
  className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-lg 
             bg-white text-white 
             dark:bg-gray-800 dark:text-black
             shadow-md transition"
>
  {dark ? "🌙" : "☀️"}
</button>



      
      {/* Logo / Nome */}
      <span className="font-medium text-xl dark:text-white ">
        &lt;Leví Dias/&gt;
      
      </span>

      {/* Navegação */}
      <nav className="flex gap-12 font-light text-lg">
        <a href="#projetos" className="dark:text-white relative after:content-['']  after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[1px] 
    after:w-0  after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          {t.header.projects}
        </a>
        <a href="#sobre" className="dark:text-white relative after:content-['']  after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[1px] 
    after:w-0  after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          {t.header.about}
        </a>
        <a href="#contato" className="dark:text-white relative after:content-['']  after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[1px] 
    after:w-0  after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
          {t.header.contact}
        </a>
        

      </nav>

      {/* Area das redes */}
      <div className="flex gap-4 items-center">
      <a href="https://github.com/leviszz"><GithubIcon className="w-6 h-6 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors bottom-0 "/></a>
      <a href="https://www.linkedin.com/in/lev%C3%AD-dias/"> <LinkedinIcon className="w-6 h-6 text-gray-500 dark:text-gray-400 dark:hover:text-[#0A66C2] hover:text-[#0A66C2]  transition-colors "/></a>
      <button
  onClick={() => setLang(lang === "pt" ? "en" : "pt")}
  className="px-2 py-1 text-sm border rounded hover:bg-gray-100 dark:hover:bg-slate-700 transition"
>
  {lang === "pt" ? "PT" : "EN"}
</button>

    </div>

    </div>
    </header>
  )
}


export default Header
