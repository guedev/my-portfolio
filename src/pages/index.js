/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiOracle, SiPython, SiNextdotjs, SiBootstrap, SiNestjs, SiPostgresql, SiRedux, SiGit, SiFlutter, SiAmazonaws } from "react-icons/si";
import Image from "next/image";
import avatar from "../../public/avatar.png";
import front from '../../public/front.png';
import back from '../../public/back.png';
import dataBase from '../../public/database.png';
import netflix from '../../public/netflix.png';
import pokemon from '../../public/pokemon.png';
import guedmovie from '../../public/guedmovie.png';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({ name, email, message }),
      
    });

    if (res.json(200)) {
      toast.success("E-mail enviado com sucesso!");
    } else {
      toast.error("Houve um erro ao enviar o e-mail. Tente novamente mais tarde.");
    }

   
    // const result = await res.json();

  

    // console.log(result);

    

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
      dark:bg-gray-900 md:px-20 lg:px-40">

        {/* First Section */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Lucas Guedes</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Currículo
                </a>
              </li>
            </ul>
          </nav>

          {/* My bio */}
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Lucas Guedes
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Desenvolvedor Front-end.
            </h3>
            <p className="text-md mb-8 py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur lectus urna, et iaculis libero consectetur sed. Morbi sagittis nisi ut nisl scelerisque, a malesuada nisl faucibus.
            </p>

            {/* Social buttons */}
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href='#'><AiFillGithub className="hover:text-gray-800 dark:hover:text-gray-600" /></a>
              <a href='#'><AiFillLinkedin className="hover:text-gray-800 dark:hover:text-gray-600" /></a>
              <a href='#'> <AiFillInstagram className="hover:text-gray-800 dark:hover:text-gray-600" /></a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" alt='avatar 3d do lucas guedes' />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section>

          {/* My Knoledges */}
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Tecnologias</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Fusce imperdiet elementum est. Duis quis bibendum dolor, nec volutpat nunc. Vivamus scelerisque vitae justo sit amet ornare. Nam nec  <span className="text-teal-500"> agencies </span> mauris eleifend ante imperdiet semper. Mauris <span className="text-teal-500">startups </span> ullamcorper scelerisque odio, id vestibulum sem ultrices id. Nam aliquam, ipsum tincidunt.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>

          {/* Cards Conhecimentos */}
          <div className="lg:flex gap-10">

            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 lg:w-1/3 dark:bg-gray-700">
              <Image src={front} width={100} height={100} alt="icone 1" className='mx-auto' />
              <h3 className="text-lg pt-8 pb-2 font-bold dark:text-gray-200">
                Sólidos
              </h3>

              <hr></hr>

              {/* Icons Solid */}
              <div className="text-5xl flex flex-col gap-6 items-center mt-5 md:flex-row md:justify-center md:mt-8 md:flex-wrap">
                <SiJavascript className="rounded-lg text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiReact className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiHtml5 className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiCss3 className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiTailwindcss className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiBootstrap className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiPostgresql className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400 " />
                <SiGit className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
              </div>

            </div>


            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 lg:w-1/3 dark:bg-gray-700">
              <Image src={back} width={100} height={100} alt="icone 2" className='mx-auto' />
              <h3 className="text-lg font-bold pt-8 pb-2 dark:text-gray-200">
                Em Estudo
              </h3>

              <hr></hr>

              {/* Icons Estudy */}
              <div className="text-5xl flex flex-col gap-6 items-center mt-5 md:flex-row md:justify-center md:mt-8 md:flex-wrap">
                <SiNodedotjs className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiOracle className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiNextdotjs className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiRedux className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                
              </div>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 lg:w-1/3 md:flex-wrap dark:bg-gray-700">
              <Image src={dataBase} width={100} height={100} alt="icone 3" className='mx-auto' />
              <h3 className="text-lg font-bold pt-8 pb-2 dark:text-gray-200">Interesses</h3>

              <hr></hr>

              {/* Icons interesses */}
              <div className="text-5xl flex flex-col gap-6 items-center mt-5 md:flex-row md:justify-center md:mt-8 md:flex-wrap">
                <SiPython className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiNestjs className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiFlutter className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
                <SiAmazonaws className=" text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400" />
              </div>

            </div>
          </div>
        </section>

        {/* Third section */}
        <section className="py-10">

          {/* Portfolio */}
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Projetos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              // eslint-disable-next-line react/no-unescaped-entities
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
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
              <p className="mt-4 px-8 dark:text-gray-200">
                Projeto feito utilizando ReactJs e API do site <a className="hover:text-gray-500" href="https://www.themoviedb.org/?language=pt">Themoviedb.org</a>
              </p>
              {/* Projects Buttons */}
              <a
                className="flex items-center justify-center gap-2 mt-4 mb-4 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md w-1/4 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600"
                href="#"
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
              <p className="mt-4 px-8 dark:text-gray-200">
              Projeto utilizando HTML, CSS, e Javascript (Sem utilização de API).
              </p>
              {/* Projects Buttons */}
              <a
                className="flex items-center justify-center gap-2 mt-4 mb-4 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md w-1/4 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600"
                href="#"
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
              <p className="mt-4 px-8 dark:text-gray-200">
              Mostrando avalição dos filmes e alguns outros detalhes, utilizando ReactJs e API do <a className="hover:text-gray-500" href="https://www.themoviedb.org/?language=pt">Themoviedb.org</a>
              </p>
              {/* Projects Buttons */}
              <a
                className="flex items-center justify-center gap-2 mt-4 mb-4 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md w-1/4 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600"
                href="#"
              >
                Github <AiFillGithub />
              </a>
            </div>
          </div>
        </section>

        {/* Fourth Section */}
        <section>

          {/* Contate-me */}
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Entre em contato</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>


            <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Mensagem:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
      <ToastContainer />

          </div>
        </section>

      </main>
    </div>
  );
}
