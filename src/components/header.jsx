import GithubIcon from "../assets/icons/github.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";



function Header() {
  return (
    <header className=" h-16 fixed top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex items-center justify-between px-6 py-4">
      
      
      {/* Logo / Nome */}
      <span className="font-medium text-xl ">
        &lt;Leví Dias/&gt;
      </span>

      {/* Navegação */}
      <nav className="flex gap-12 font-light text-lg">
        <a href="#projetos" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[1px] 
    after:w-0  after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Projetos
        </a>
        <a href="#sobre" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[1px] 
    after:w-0  after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Sobre
        </a>
        <a href="#contato" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[1px] 
    after:w-0  after:bg-black after:transition-all after:duration-300 hover:after:w-full">
          Contato
        </a>
        

      </nav>

      {/* Area das redes */}
      <div className="flex gap-4 items-center">
      <a href="https://github.com/leviszz"><GithubIcon className="w-6 h-6 text-gray-500 hover:text-black transition-colors bottom-0 "/></a>
      <a href="https://www.linkedin.com/in/lev%C3%AD-dias/"> <LinkedinIcon className="w-6 h-6 text-gray-500 hover:text-[#0A66C2]  transition-colors "/></a>
      

    </div>

    </div>
    </header>
  )
}


export default Header
