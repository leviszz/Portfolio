function Sobre ({t}) {
  return (
    <section id="about" className="relative min-h-screen bg-gray-200 dark:bg-slate-900 px-6 py-10">
    <div>
        <h1 className="text-4xl font-light text-center mb-5 dark:text-slate-300">
            {t.about.title}
        </h1>
    </div>
    <div className=" max-w-3xl">
      <div className="mt-12 max-w-4xl mx-auto text-gray-700  text-left">
        <p className="text-lg font-medium text-gray-800 dark:text-slate-200 mb-6">
          {t.about.intro}
        </p>
        <p className="mb-6 dark:text-slate-400">
          {t.about.text1}
        </p>
        <p className="mb-6 dark:text-slate-400">
       {t.about.text2}
        </p>
      </div>


      <div className="mt-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-950 border rounded-lg px-4 py-3 shadow-sm dark:border-gray-900">

        <p className="text-sm font-medium mb-2 dark:text-white">{t.about.certifications}</p>

        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
          <li>{t.about.cert1}</li>
          <li>{t.about.cert2}</li>
          <li>{t.about.cert3}</li>
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