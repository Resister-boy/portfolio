import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../icons';
import DefaultButton  from './button/DefaultButton'
import { IProject, ITech } from '@/interface/IProjectsFeed';
import { motion } from 'framer-motion';
import { parseText } from '@/library/ParseText';
import TechBadge from './badge/TechBadge';

export const ProjectFeed = ({ project }: IProject | any) => {
  return (
    <motion.div className='w-full flex items-center justify-between border border-dark border-solid rounded-2xl overflow-hidde bg-light shadow-2xl p-8'>
      <Link href={`projects/${project.id}`} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={project.properties.Image} alt={project.properties.Name} className="w-full h-auto" width={100} height={100} />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className={`font-semibold text-sm ${project.properties.Type ? 'text-primary' : 'text-primaryDark'}`}>{
          project.properties.Type ? 'Featured Project' : 'Normal Project'
        }</span>
        <Link href={`projects/${project.id}`} className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-[#333] text-2xl font-bold'>{project.properties.Name}</h2>
        </Link>
        <p className='my-2 text-gray-700 text-sm'>{parseText('Summary', project.properties.Summary, 100)}</p>
        <div className='flex justify-start items-center'>
          {project.properties.TechList.map(({ name }: ITech, i: number) => {
            return (
              <TechBadge key={i} title={name}/>
            )})
          }
        </div>
        <div className='w-full mt-2 flex items-center justify-end'>
          <motion.a href={project.properties.GithubUrl} target='_blank' className='mr-2' whileHover={{y: -2}}>
            <GithubIcon className='w-10 mr-5' />
          </motion.a>
          <DefaultButton link={project.properties.DeployUrl} title={`Deploy`} icon={false} className='py-1 px-2 bg-[#878787]' assets={`/assets/Cancel_Icon.svg`}/>
        </div>
      </div>
    </motion.div>
  )
}