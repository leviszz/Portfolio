import HTMLIcon from "../assets/icons/html5.svg?react";
import JSIcon from "../assets/icons/javascript.svg?react";
import TailIcon from "../assets/icons/tailwindcss.svg?react";
import ReactIcon from "../assets/icons/react.svg?react";
import FigmaIcon from "../assets/icons/figma.svg?react";
import CssIcon from "../assets/icons/css.svg?react";
function Footer() {
  return (
    <footer className="py-6 text-sm text-gray-500 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 items-center">
        
        {/* Coluna esquerda vazia */}
        <div />

        {/* Texto perfeitamente centralizado */}
        <p className="text-center">
          © 2026 Levi Dias
        </p>

        {/* Ícone à direita */}
        <div className="flex justify-end">
            <HTMLIcon className="w-5 h-5 text-[#E34F26]" />
            <JSIcon className="w-5 h-5 text-[#F7DF1E] ml-2" />
            <TailIcon className="w-5 h-5 text-[#06B6D4] ml-2" />
            <ReactIcon className="w-5 h-5 text-[#61DAFB] ml-2" />
            <FigmaIcon className="w-5 h-5 text-[#F24E1E] ml-2" />
            <CssIcon className="w-5 h-5 text-[#663399] ml-2" />
            
        </div>

      </div>
    </footer>
  );
}

export default Footer;
