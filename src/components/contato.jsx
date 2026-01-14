import GithubIcon from "../assets/icons/github.svg?react";
import LinkedinIcon from "../assets/icons/linkedin.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import WhatsappIcon from "../assets/icons/whatsapp.svg?react";

function Contato({t}) {
  return (
    <section id="contato" className="relative min-h-screen bg-gray-200 dark:bg-slate-900 px-6 py-10">
        <div>
      <h1 className="text-4xl font-light text-center mb-5 dark:text-slate-300 ">
            {t.contact.title}
        </h1>
        <p className="text-gray-600 dark:text-slate-400 max-w-xl mx-auto mb-12 mt-12 text-left">
      {t.contact.text}
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="mailto:seuemail@email.com"
        className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition border-gray-300 hover:dark:bg-slate-800 dark:border-slate-950"
      >
        <MailIcon className="text-black dark:text-white"/>
      </a>

      <a
        href="https://linkedin.com/in/seuperfil"
        target="_blank"
        className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition  border-gray-300 hover:dark:bg-slate-800 dark:border-slate-950"
      >
        <LinkedinIcon className="w-6 h-6 text-[#0A66C2]" />

      </a>

      <a
        href="https://github.com/seugithub"
        target="_blank"
        className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition  border-gray-300 hover:dark:bg-slate-800 dark:border-slate-950"
      >
        <GithubIcon className="w-6 h-6 stroke-black dark:text-white dark:stroke-white overflow-visible"/>
      </a>

      <a
        href="https://linkedin.com/in/seuperfil"
        target="_blank"
        className="px-6 py-3 border rounded-lg hover:bg-white transition  border-gray-300 hover:dark:bg-slate-800 dark:border-slate-950"
      >
        <WhatsappIcon className="w-6 h-6 text-[#00ff5e]"/>
      </a>
    </div>
        </div>
        </section>
                );
                }
                export default Contato;