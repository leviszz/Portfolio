import GithubIcon from "../assets/icons/github.svg?react";
import SiteIcon from "../assets/icons/site.svg?react";
import CssIcon from "../assets/icons/css.svg?react";
import JSIcon from "../assets/icons/javascript.svg?react";
import HTMLIcon from "../assets/icons/html5.svg?react";
function Projects() {
  return (
    <section
      id="projetos"
      className="min-h-screen bg-gray-200 px-6 py-10"
    >
            <h1 className="text-3xl font-light text-center mb-5 ">
      Projetos
    </h1>
    <h3 className="text-xl font-thin mb-16    border-gray-300 leading-snug text-center opacity-50"> 
      Obs: Os ícones presentes no canto inferior de cada projeto representam as principais tecnologias utilizadas em seu desenvolvimento.
    </h3>
    
{/* Projeto 1 - Redesing do site do Alistamento Militar Brasileiro*/} 
<div id="Projeto 1" className=" relative mt-10
                 bg-white
                rounded-2xl
                pt-4 pb-12 px-12
                shadow-md
                hover:shadow-xl
                transition
                max-w-6x1
                 
                ">
  <h3 className="text-xl font-semibold mb-1 pb-3 mt-3 border-b border-gray-100 leading-snug ">
  Redesing do Site do Alistamento Militar Brasileiro
  </h3>

  <p className=" mt-3 max-w-3xl text-gray-600 leading-relaxed">
    Projeto acadêmico de redesign do site do Alistamento Militar Brasileiro, com foco em melhorar a usabilidade e a navegação.</p>
    <p className="max-w-3xl text-gray-600 leading-relaxed">
    A proposta buscou modernizar a interface, tornando o site mais intuitivo e funcional, corrigindo problemas de layout e experiência do usuário presentes na versão original.
  </p>

  <div className="flex gap-6 absolute top-5 right-10 ">
    <a href="https://github.com/leviszz" className="flex flex-col items-center text-gray-500 hover:text-black transition">
    <GithubIcon className="w-6 h-6  text-gray-500 hover:text-black transition-colors bottom-1 "/><span className="text-xs mt-1">GitHub</span>
    </a>
    <a href="https://atividades-facens.vercel.app/index.html" className="flex flex-col items-center text-gray-500 hover:text-black transition">
    <SiteIcon className="w-6 h-6 text-gray-500 hover:text-black transition-colors bottom-0 "/><span className="text-xs mt-1">Demo</span>
    </a>
  </div>
  <CssIcon className="w-6 h-6 text-[#663399] absolute bottom-4 right-4 opacity-80 hover:opacity-100 transition"/>
  <JSIcon className="w-6 h-6 text-[#F7DF1E] absolute bottom-4 right-14 opacity-80 hover:opacity-100 transition"/>
  <HTMLIcon className="w-6 h-6 text-[#E34F26] absolute bottom-4 right-24 opacity-80 hover:opacity-100 transition"/>
  
</div>

{/* Adicione mais projetos conforme necessário (Procedimento é copiar do primeiro DIV até o ultimo DIV)*/}

    </section>
  );
}

export default Projects;
