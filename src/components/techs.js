import React from 'react';
import Image from 'next/image';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiOracle,
  SiPython,
  SiNextdotjs,
  SiBootstrap,
  SiNestjs,
  SiPostgresql,
  SiGit,
  SiFlutter,
  SiAmazonaws,
  SiRedux,
  SiAngular,
} from 'react-icons/si';

import front from '../../public/front.png';
import back from '../../public/back.png';
import dataBase from '../../public/database.png';

const solidTechnologies = [
  { name: 'JavaScript', icon: <SiJavascript title="JavaScript" className='text-yellow-300 hover:text-yellow-500'/> },
  { name: 'React', icon: <SiReact title="React" className='text-blue-300 hover:text-blue-500'/> },
  { name: 'HTML5', icon: <SiHtml5 title="HTML5" className='text-orange-400 hover:text-orange-500'/> },
  { name: 'CSS3', icon: <SiCss3 title="CSS3" className='text-blue-600 hover:text-blue-700'/> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss title="Tailwind CSS" className='text-blue-300 hover:text-blue-500'/> },
  { name: 'Bootstrap', icon: <SiBootstrap title="Bootstrap" className='text-purple-400 hover:text-purple-600'/> },
  { name: 'PostgreSQL', icon: <SiPostgresql title="PostgreSQL" className='text-blue-800 hover:text-blue-700'/> },
  { name: 'Git', icon: <SiGit title="Git" className='text-orange-800 hover:text-orange-900' /> },
  { name: 'Redux', icon: <SiRedux title="Redux" className='text-purple-700 hover:text-purple-600'/> },
  { name: 'Node.js', icon: <SiNodedotjs title="Node.js" className='text-green-700 hover:text-green-600'/> },
];

const studyTechnologies = [
  { name: 'Oracle', icon: <SiOracle title="Oracle" /> },
  { name: 'Next.js', icon: <SiNextdotjs title="Next.js" /> },
  { name: 'Angular', icon: <SiAngular /> },
];

const interestTechnologies = [
  { name: 'Python', icon: <SiPython title="Python" /> },
  { name: 'Nest.js', icon: <SiNestjs title="Nest.js" /> },
  { name: 'Flutter', icon: <SiFlutter title="Flutter" /> },
  { name: 'Amazon AWS', icon: <SiAmazonaws title="Amazon AWS" /> },
];

const techImages = {
  solid: front,
  study: back,
  interest: dataBase,
};

export default function Techs() {
  const renderTechCard = (title, technologies, image) => {
    return (
      <div className="text-center shadow-lg p-10 rounded-xl my-10 flex-1 lg:w-1/3 dark:bg-gray-700">
        <Image src={image} alt={`icone ${title.toLowerCase()}`} width={100} height={100} className="mx-auto" />
        <h3 className="text-lg pt-8 pb-2 font-bold dark:text-gray-200">{title}</h3>
        <hr />
        <div className="text-5xl flex flex-col gap-6 items-center mt-5 md:flex-row md:justify-center md:mt-8 md:flex-wrap">
          {technologies.map((tech, index) => (
            <div key={index} title={tech.name} className=' ttext-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-400 flex flex-col items-center'>
              {tech.icon}
              <p className='text-sm mt-2'>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Tecnologias</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Ao longo da minha carreira como desenvolvedor, adquiri habilidades em diversas tecnologias para{' '}
          <span className="text-teal-500">desenvolvimento web e bancos de dados</span>. Meu conhecimento me permite criar soluções completas e eficientes, que atendem às necessidades do projeto. Busco sempre estar atualizado com as últimas tendências e tecnologias para fornecer soluções modernas e de qualidade aos meus clientes.
        </p>
      </div>

      <div className="lg:flex gap-10">
        {renderTechCard('Sólidos', solidTechnologies, techImages.solid)}
        {renderTechCard('Em Estudo', studyTechnologies, techImages.study)}
        {renderTechCard('Interesses', interestTechnologies, techImages.interest)}
      </div>
    </div>
  );
}
