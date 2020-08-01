import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Entre em contato com o #timeAVALON</h1>
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative map">
            <div className="bg-white relative flex flex-wrap py-6 contact-info">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                  ENDEREÇO
                </h2>
                <p className="leading-relaxed">
                  HeadQuarters do time AVALON
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  jonaslocke@gmail.com
                </a>
                <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">
                  TELEFONE
                </h2>
                <p className="leading-relaxed">+55 (71) 999-999-9999</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 feedback">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Formulário de contato
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Envie sua dúvida, sugestão ou reclamação.
            </p>
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Nome"
              type="text"
            />
            <input
              className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
            />
            <textarea
              className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Menssagem"
            ></textarea>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Enivar!
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Responderemos assim que possível. Esse não é o canal para report de bugs, para tal utilze o caminho: <strong>avalon/bugs</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
