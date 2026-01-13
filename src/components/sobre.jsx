function Sobre () {
  return (
    <section id="sobreMim" className="relative min-h-screen bg-gray-200 px-6 py-10">
    <div>
        <h1 className="text-4xl font-light text-center mb-5 ">
            Sobre Mim
        </h1>
    </div>
    <div className=" max-w-3xl">
      <div className="mt-12 max-w-4xl mx-auto text-gray-700  text-left">
        <p className="text-lg font-medium text-gray-800 mb-6">
          Sou desenvolvedor front-end em início de carreira, focado em criar interfaces modernas, responsivas e acessíveis.
        </p>
        <p className="mb-6 ">
          Trabalho com HTML, CSS, JavaScript, React e Tailwind, sempre buscando transformar ideias em experiências digitais funcionais e bem projetadas.
        </p>
        <p className="mb-6">
       Tenho experiência com projetos acadêmicos e pessoais, e estou em constante aprendizado para evoluir tecnicamente e acompanhar as tendências do mercado. Busco oportunidades para crescer como desenvolvedor e contribuir com soluções de qualidade.
        </p>
      </div>


      <div className="mt-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white border rounded-lg px-4 py-3 shadow-sm ">

        <p className="text-sm font-medium mb-2">Certificações</p>

        <ul className="text-sm text-gray-600 space-y-1">
          <li>• HTML & CSS: Classes, Posicionamento e Flexbox -  Alura (2023)</li>
          <li>• HTML & CSS: Estrutura de Arquivos e Tags  - Alura (2023)</li>
          <li>• Laços e Listas com JavaScript - Alura (2023)</li>
          <li>• UX & UI Design – Codecademy (2025)</li>
          <li>• Power BI - Codecademy (2025)</li>
        </ul>
      </div>
      </div>


    </div>
    </section>
  )
} 
export default Sobre;