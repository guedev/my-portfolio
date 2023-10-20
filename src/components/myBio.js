import Image from "next/image";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import avatar from "../../public/avatar.png";


export default function MyBio() {
    return (
        <div className="text-center p-10 py-10 sm:p-2">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Lucas Guedes
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Desenvolvedor Front-end.
        </h3>
        <p className="text-md font-semibold mb-8 py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-6xl mx-auto md:text-2xl">
        Olá, sou um desenvolvedor front-end com experiência em <span className="text-teal-500">JavaScript e React.</span> Trabalho com desenvolvimento web, e meu foco principal é fornecer soluções de alta qualidade e escaláveis.
        Sou uma pessoa apaixonada pelo que faço e estou sempre procurando novas tecnologias e tendências para me manter atualizado. Trabalhar em equipe é essencial para mim, e estou sempre disposto a colaborar com outros desenvolvedores e designers para alcançar os melhores resultados.
        </p>

        {/* Social buttons */}
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
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
        <div className="mb-16 mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
          <Image
            src={avatar}
            layout="fill"
            objectFit="cover"
            alt="avatar 3d do lucas guedes"
          />
        </div>
      </div>
    );
  }