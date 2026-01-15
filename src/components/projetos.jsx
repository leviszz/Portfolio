import GithubIcon from "../assets/icons/github.svg?react";
import SiteIcon from "../assets/icons/site.svg?react";
import CssIcon from "../assets/icons/css.svg?react";
import JSIcon from "../assets/icons/javascript.svg?react";
import HTMLIcon from "../assets/icons/html5.svg?react";
import FigmaIcon from "../assets/icons/figma.svg?react";
import ReactIcon from "../assets/icons/react.svg?react";
import ViteIcon from "../assets/icons/vite.svg?react";
import SupabaseIcon from "../assets/icons/supabase.svg?react";
import PostsqlIcon from "../assets/icons/postgresql.svg?react";
function Projects({t}) {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-200 dark:bg-slate-900 px-6 py-10"
    >
            <h1 className="text-4xl font-light text-center mb-5 dark:text-slate-300 ">
      {t.projects.title}
    </h1>
    <h3 className="text-xl font-thin mb-16  dark:text-slate-300   border-gray-900 leading-snug text-center opacity-50"> 
      {t.projects.note}
    </h3>
    
{/* Projeto 1 - Redesing do site do Alistamento Militar Brasileiro*/} 
<div id="Projeto 1" className=" relative flex flex-col h-full mt-10
                 bg-white
                rounded-2xl
                dark:bg-slate-950
                pt-4 pb-4 px-10
                shadow-md
                hover:shadow-xl
                transition
                max-w-6x1
                 
                ">
  <h3 className="text-xl font-normal mb-1 pb-3 mt-3 border-b border-gray-100 dark:text-slate-300 dark:border-gray-900 leading-snug ">
  {t.projects.projectTitle}
  </h3>

  <p className=" mt-3 max-w-3xl text-gray-600 leading-relaxed dark:text-slate-300">
    {t.projects.projectDescription1}</p>
    <p className="max-w-3xl mt-3 text-gray-600 leading-relaxed dark:text-slate-300">
    {t.projects.projectDescription2}
  </p>
<div className="mt-auto pt-10 flex justify-between items-center sm:items-end">
  <div className="flex gap-4 text-gray-500 hover:text-black transition-colors">
    <a href="https://github.com/thiagosilva-git/Atividades-Facens" className="flex flex-col items-center text-gray-500 hover:text-black transition dark:hover:text-white">
      <GithubIcon className="w-6 h-6" />
      <span className="text-xs mt-1">GitHub</span>
    </a>

    <a href="https://atividades-facens.vercel.app/index.html" className="flex flex-col items-center text-gray-500 hover:text-black transition dark:hover:text-white">
      <SiteIcon className="w-6 h-6" />
      <span className="text-xs mt-1">Demo</span>
    </a>
  </div>

  <div className="flex gap-2">
    <HTMLIcon className="w-6 h-6 text-[#E34F26] opacity-80 hover:opacity-100 transition" />
    <JSIcon className="w-6 h-6 text-[#F7DF1E] opacity-80 hover:opacity-100 transition" />
    <CssIcon className="w-6 h-6 text-[#663399] opacity-80 hover:opacity-100 transition" />
  </div>
</div>
  
  
  
</div>

{/* Projeto 2 - Task Manager*/} 
<div id="Projeto 1" className=" relative flex flex-col h-full mt-10
                 bg-white
                rounded-2xl
                dark:bg-slate-950
                pt-4 pb-4 px-10
                shadow-md
                hover:shadow-xl
                transition
                max-w-6x1
                 
                ">
  <h3 className="text-xl font-normal mb-1 pb-3 mt-3 border-b border-gray-100 dark:text-slate-300 dark:border-gray-900 leading-snug ">
  {t.projects.project2Title}
  </h3>

  <p className=" mt-3 max-w-3xl text-gray-600 leading-relaxed dark:text-slate-300">
    {t.projects.project2Description1}</p>
    <p className="max-w-3xl mt-3 text-gray-600 leading-relaxed dark:text-slate-300">
    {t.projects.project2Description2}
  </p>
<div className="mt-auto pt-10 flex justify-between items-center sm:items-end">
  <div className="flex gap-4 text-gray-500 hover:text-black transition-colors">
    <a href="https://github.com/leviszz/Task-Manager" className="flex flex-col items-center text-gray-500 hover:text-black transition dark:hover:text-white">
      <GithubIcon className="w-6 h-6" />
      <span className="text-xs mt-1">GitHub</span>
    </a>

    <a href="https://task-manager-phi-sandy.vercel.app/" className="flex flex-col items-center text-gray-500 hover:text-black transition dark:hover:text-white">
      <SiteIcon className="w-6 h-6" />
      <span className="text-xs mt-1">Demo</span>
    </a>
  </div>

  <div className="flex gap-1">
    <HTMLIcon className="w-6 h-6 text-[#E34F26] opacity-80 hover:opacity-100 transition" />
    <JSIcon className="w-6 h-6 text-[#F7DF1E] opacity-80 hover:opacity-100 transition" />
    <CssIcon className="w-6 h-6 text-[#663399] opacity-80 hover:opacity-100 transition" />
    <ReactIcon className="w-6 h-6 text-[#61DAFB] opacity-80 hover:opacity-100 transition" />
    <ViteIcon className="w-6 h-6 text-[#646CFF] opacity-80 hover:opacity-100 transition" />
    <SupabaseIcon className="w-6 h-6 text-[#3ECF8E] opacity-80 hover:opacity-100 transition" />
    <PostsqlIcon className="w-6 h-6 text-[#336791] opacity-80 hover:opacity-100 transition" />
  </div>
</div>
  
  
  
</div>







{/* Adicionar mais projetos conforme necessário (Procedimento é copiar do primeiro DIV até o ultimo DIV)*/}





{/*Area do Portfolio*/}
<div>
  <h3 className="text-xl font-normal mb-4 mt-16 border-gray-300 leading-snug text-center opacity-50 dark:text-slate-300">
    {t.projects.portfolioInvite}
  </h3>

  <div className="flex justify-center gap-6">

    <div className="flex flex-col items-center">
      <a
        href="https://github.com/leviszz/Portfolio"
        className="flex flex-col items-center text-gray-500 hover:text-black transition dark:hover:text-white"
      >
        <GithubIcon className="w-6 h-6 transition-colors" />
        <span className="text-xs mt-1">GitHub</span>
      </a>
    </div>

    <div className="flex flex-col items-center">
      <a
        href="https://www.figma.com/site/b5GXxZTxkDMkYECKgJYm8r/Untitled?node-id=1-568&t=6c1fULuf7VDduaIX-1"
        className="flex flex-col items-center text-gray-500 hover:text-[#F24E1E] transition"
      >
        <FigmaIcon className="w-6 h-6 transition-colors" />
        <span className="text-xs mt-1">Figma</span>
      </a>
    </div>
    

  </div>
  <h2 className="text-center mt-3 font-normal opacity-50 dark:text-slate-300">{t.projects.technologiesFooter}</h2>
</div>
    </section>
  );
}

export default Projects;
