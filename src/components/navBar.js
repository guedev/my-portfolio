import { BsFillMoonStarsFill, BsFillEmojiSunglassesFill } from "react-icons/bs";

export default function Navbar({ darkMode, setDarkMode }) {

    const icon = darkMode ? (
        <BsFillEmojiSunglassesFill />
      ) : (
        <BsFillMoonStarsFill />
      );
    

    return (
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl">Lucas Guedes</h1>
        <ul className="flex items-center">
          <li>
            <a
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            >
              {icon}
            </a>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600"
              href="/curriculumVitaeLucasGuedes.pdf" download
            >
              Currículo
            </a>
          </li>
        </ul>
      </nav>
    );
  }