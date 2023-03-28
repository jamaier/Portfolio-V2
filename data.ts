import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { Service, Skill } from './types'

import { BsCircleFill } from 'react-icons/bs'


export const services: Service[] = [
   {
      Icon: RiComputerLine,
      title: 'Frontend Development',
      about:
         'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
   },
   {
      Icon: FaServer,
      title: 'Backend  Development',
      about:
         'handle database, server, api using <b>Express </b> & other popular frameworks',
   },
   {
      Icon: AiOutlineApi,
      title: 'API Development',
      about:
         'I can develop robust REST API using <b>.Net Entity </b>  & <b>Node API</b> ',
   },
   {
      Icon: MdDeveloperMode,
      title: 'Competitive Coder',
      about:
         'a daily problem solver in <b>CodeWars</b>  and <b>Leet Code</b> ',
   },
   {
      Icon: AiOutlineAntDesign,
      title: 'UI/UX designer',
      about:
         'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
   },
   {
      Icon: RiComputerLine,
      title: 'Whatever',
      about:
         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
   },
]

export const languages: Skill[] = [
   {
      Icon: BsCircleFill,
      name: 'C#',
      level: '65',
   },
   {
      Icon: BsCircleFill,
      name: 'JavaScript',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'TypeScript',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'React',
      level: '50',
   },
   {
      Icon: BsCircleFill,
      name: 'Tailwind CSS',
      level: '65',
   },

]

export const tools: Skill[] = [
   {
      Icon: BsCircleFill,
      name: '.Net Core',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'Node.js',
      level: '60',
   },
   {
      Icon: BsCircleFill,
      name: 'MySql',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'FireBase',
      level: '40',
   },
   {
      Icon: BsCircleFill,
      name: 'MSTest',
      level: '45',
   },
   {
      Icon: BsCircleFill,
      name: 'Jest',
      level: '60',
   },

]
