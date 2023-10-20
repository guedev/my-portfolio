/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import Image from "next/image";

import netflix from "../../public/netflix.png";
import pokemon from "../../public/pokemon.png";
import guedmovie from "../../public/guedmovie.png";
import miranha from "../../public/miranha.png";
import emailSend from "../../public/email_send.svg";
import Navbar from "@/components/navBar";
import MyBio from "@/components/myBio";
import Techs from "@/components/techs";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  
  // Email function configuration

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        throw new Error("Erro ao enviar email");
      } else {
        toast.success("E-mail enviado com sucesso!");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "Houve um erro ao enviar o e-mail. Tente novamente mais tarde."
      );
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Lucas Guedes - Dev Portfolio</title>
        <meta name="description" content="Feito com amor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="bg-white px-10 
      dark:bg-gray-900 md:px-20 lg:px-40"
      >
        {/* First Section */}
        <section className="min-h-screen">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <MyBio />
        </section>

        {/* Second Section */}
        <section>
          <Techs />
        </section>

        {/* Third section */}
        <section className="py-10">
          {/* Portfolio */}
          {/* Componente 4 */}
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projetos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Aqui estão alguns dos meus projetos. Cada projeto foi uma oportunidade para aprimorar minhas habilidades e aprender novas tecnologias. Confira alguns dos projetos que já desenvolvi e entre em contato para saber como posso ajudar a tornar sua ideia em realidade.
            </p>
          </div>

          {/* Project Images   */}

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/* Netflix clone */}
            <div className="flex-1 text-center flex flex-col items-center shadow-lg rounded-xl dark:bg-gray-700 lg:w-1/3">
              <Image
                className="rounded-lg object-cover mb-8 rounded-t-xl"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={netflix}
                alt="Print do projeto netflix clone"
              />
              <h3 className="font-burtons dark:text-gray-200">Netflix Clone</h3>
              <p className="mt-4 px-8 dark:text-gray-200 lg:h-44">
                Projeto feito utilizando ReactJs e API do site
                <a
                  className="hover:text-gray-500"
                  href="https://www.themoviedb.org/?language=pt"
                >
                  Themoviedb.org
                </a>
              </p>
              {/* Projects Buttons */}
              <a
                className="flex items-center justify-center gap-2 mt-4 mb-4 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md w-1/4 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 md:w-1/2"
                href="https://github.com/guedev/clone_netflix"
              >
                Github <AiFillGithub />
              </a>
            </div>

            {/* Pokedex */}
            <div className="flex-1 text-center flex flex-col items-center shadow-lg rounded-xl dark:bg-gray-700 lg:w-1/3">
              <Image
                className="rounded-lg object-cover mb-8 rounded-t-xl"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={pokemon}
                alt="Print do projeto pokemon"
              />
              <h3 className="font-burtons dark:text-gray-200">Pokedex</h3>
              <p className="mt-4 px-8 dark:text-gray-200 lg:h-44">
                Projeto utilizando HTML, CSS, e Javascript (Sem utilização de
                API).
              </p>
              {/* Projects Buttons */}
              <a
                className="flex items-center justify-center gap-2 mt-4 mb-4 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md w-1/4 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 md:w-1/2"
                href="https://github.com/guedev/ProjetoPokedex"
              >
                Github <AiFillGithub />
              </a>
            </div>

            {/* GuedMovie */}
            <div className="flex flex-col flex-1 text-center items-center shadow-lg rounded-xl dark:bg-gray-700 lg:w-1/3">
              <Image
                className="rounded-lg object-cover mb-8 rounded-t-xl"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={guedmovie}
                alt="Print do projeto guedmovie"
              />
              <h3 className="font-burtons dark:text-gray-200">GuedMovie</h3>
              <p className="mt-4 px-8 dark:text-gray-200 lg:h-44">
                Mostrando avalição dos filmes e alguns outros detalhes,
                utilizando ReactJs e API do{" "}
                <a
                  className="hover:text-gray-500"
                  href="https://www.themoviedb.org/?language=pt"
                >
                  Themoviedb.org
                </a>
              </p>
              {/* Projects Buttons */}
              <a
                className="flex items-center justify-center gap-2 mt-4 mb-4 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md w-1/4 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 md:w-1/2"
                href="https://github.com/guedev/guedMovie"
              >
                Github <AiFillGithub />
              </a>
            </div>

             {/* Portfolio */}
             <div className="flex flex-col flex-1 text-center items-center shadow-lg rounded-xl dark:bg-gray-700 lg:w-1/3">
              <Image
                className="rounded-lg object-cover mb-8 rounded-t-xl"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={miranha}
                alt="Print do projeto portfolio"/>
              <h3 className="font-burtons dark:text-gray-200">Esse site</h3>
              <p className="mt-4 px-8 dark:text-gray-200 lg:h-44">
                Site construído com as tecnologias Next.js e Tailwind CSS, a biblioteca nodemailer para o envio de email, e utilizando o Vercel para o Deploy.
              </p>
              {/* Projects Buttons */}
              <a
                className="flex items-center justify-center gap-2 mt-4 mb-4 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md w-1/4 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 md:w-1/2"
                href="https://github.com/guedev/my-portfolio"
              >
                Github <AiFillGithub />
              </a>
            </div>
          </div>
          {/* FIm Componente 4 */}
        </section>

        {/* Fourth Section */}
        <section>
          {/* Contate-me */}
          {/* Componente 5 */}
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Entre em contato</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Se você está procurando um desenvolvedor front-end experiente em JavaScript e React, fique à vontade para entrar em contato comigo para discutirmos suas necessidades e como posso ajudar.
            </p>

            {/* <div className="p-8 flex justify-center">
            <Image src={emailSend} alt="Email" className="w-3/4 lg:w-2/5" />
            </div> */}

            <div className="p-8 mt-8 lg:gap-16 lg:flex lg:flex-row items-center justify-center ">
              <Image
                src={emailSend}
                alt="Email"
                className="mb-8 w-3/4 lg:w-1/3 sm:w-full "
              />
              <form onSubmit={handleSubmit} action="" className=" lg:w-2/5">
                <div class="mb-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="appearance-none block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none "
                  />
                </div>
                <div class="mb-4">
                  <textarea
                    placeholder="Mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    class="appearance-none block resize-none w-full px-4 py-3 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none "
                  />
                </div>
                <div class="mb-4">
                  <button
                    type="submit"
                    class="inline-block w-full px-8 py-4 leading-none text-white bg-gradient-to-r from-cyan-500 text- to-teal-500 font-semibold rounded shadow hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600"
                  >
                    Enviar
                  </button>
                </div>
              </form>
              <ToastContainer />
            </div>

            <hr></hr>

            <footer className="mt-8 flex flex-col items-center">
              
              <div className="text-5xl flex justify-center mt-4 md:gap-16 sm:gap-8 py-3 text-gray-600 dark:text-gray-400">
                <a
                  href="https://api.whatsapp.com/send?phone=5591988719255&text=Olá,%20Lucas.%20Acessei%20seu%20site%20e%20tenho%20interesse%20em%20conversar%20sobre%20alguns%20projetos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <SiWhatsapp className="hover:text-gray-800 dark:hover:text-gray-600" />
                </a>

                <a
                  href="https://github.com/guedev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                  <AiFillGithub className="hover:text-gray-800 dark:hover:text-gray-600" />
                </a>

                <a
                  href="https://www.linkedin.com/in/lucasguedes27/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="hover:text-gray-800 dark:hover:text-gray-600" />
                </a>
                <a
                  href="https://www.instagram.com/gued_1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram className="hover:text-gray-800 dark:hover:text-gray-600" />
                </a>
              </div>
              <span className="mt-4 mb-8 font-bold dark:text-gray-200">
                Desenvolvido com ❤️ por Lucas Guedes
              </span>
            </footer>
          </div>
          {/* FIm Componente 5 */}
        </section>
      </main>
    </div>
  );
}
