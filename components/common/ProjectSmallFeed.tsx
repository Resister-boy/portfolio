import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../icons';
import DefaultButton  from './button/DefaultButton'
import { IProject, ITech } from '@/interface/IProjectsFeed';
import { motion } from 'framer-motion';
import { parseText } from '@/library/ParseText';
import TechBadge from './badge/TechBadge';

const ProjectSmallFeed = ({ project }: IProject | any) => {
  return (
    <article className='w-full my-8 px-4 relative border border-dark border-solid 
        rounded-3xl bg-light shadow-2xl p-8 rounded-br-3xl'>
      <div className='absolute top-0 left-0 w-[102%] h-[102%] rounded-3xl bg-dark rounded-br-3xl -z-10' />
      <Link href={`projects/${project.id}`} className='w-full cursor-pointer overflow-hidden rounded-xl flex justify-center'>
        <Image src={project.properties.Image} alt={project.properties.Name} className="w-full h-60 overflow-y-hidden rounded-xl" width={70} height={60} />
      </Link>
      <div className='w-full flex flex-col items-start justify-between pl-6 mt-6'>
        <div className='w-full flex justify-between items-center'>
          <Link href={`projects/${project.id}`} className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-[#333] text-xl font-bold'>{project.properties.Name}</h2>
          </Link>
          <span className={`text-sm ${project.properties.Type ? 'text-primary' : 'text-primaryDark'}`}>{
            project.properties.Type ? 'Featured Project' : 'Normal Project'
          }</span>
        </div>
        <div className='flex justify-start items-center'>
          {project.properties.TechList.map(({ name }: ITech, i: number) => {
            return (
              <TechBadge key={i} title={name}/>
            )})
          }
        </div>
        <div className='w-full mt-2 flex items-center justify-end'>
          <motion.a href={project.properties.GithubUrl} target='_blank' className='mr-2' whileHover={{y: -2}}>
            <GithubIcon className='w-10 mr-3' />
          </motion.a>
          <DefaultButton link={project.properties.DeployUrl} title={`Deploy`} icon={false} className='py-1 px-1 bg-[#878787] text-xs' assets={`/assets/Cancel_Icon.svg`}/>
        </div>
      </div>
    </article>
  )
}

export default ProjectSmallFeed