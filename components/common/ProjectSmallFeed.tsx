import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../icons';
import { ITech } from '@/interface/IProjectsFeed';
import { motion } from 'framer-motion';
import TechBadge from './badge/TechBadge';
import { ProjectType } from '@/types/ProjectType';
import { parseText } from '@/library/ParseText';

const ProjectSmallFeed = ({ project } : ProjectType) => {
  const id = project.id;
  const imageUrl = project.properties.Image.files[0].name;
  const name = project.properties.Title.rich_text[0].plain_text;
  const summary = project.properties.Summary.rich_text[0].plain_text;
  const techStacks = project.properties.TechStacks.multi_select
  const githubUrl = project.properties.GithubUrl.Url?.url;
  return (
    <article className={`w-2/5 mx-1 my-8 px-4 relative hover:cursor-pointer hover:bg-gray-200 duration-200
        rounded-3xl bg-light shadow-2xl p-4 rounded-br-3xl`}>
      <Link href={`projects/${id}`} className='w-full cursor-pointer overflow-hidden rounded-xl flex justify-center'>
        <Image src={imageUrl} alt={name} className="w-full h-60 overflow-y-hidden rounded-xl" width={500} height={250} />
      </Link>
      <div className='w-full flex flex-col items-start justify-between pl-6 mt-6'>
        <div className='w-full flex justify-between items-center'>
          <Link href={`projects/${project.id}`} className='hover:underline underline-offset-2'>
            <h2 className='w-full text-left text-[#333] text-xl font-medium'>{name}</h2>
          </Link>
        </div>
        <p className='my-1 text-gray-700 text-sm'>{parseText('Summary', summary, 50)}</p>
        <div className='mt-1 flex justify-start items-center'>
          {techStacks.map(({ name }: ITech, index: number) => {
            return (
              <TechBadge key={index} title={name}/>
            )})
          }
        </div>
        <div className='w-full mt-2 flex items-center justify-end'>
          <motion.a href={githubUrl} target='_blank' className='mr-2' whileHover={{y: -2}}>
            <GithubIcon className='w-10 mr-4' />
          </motion.a>
        </div>
      </div>
    </article>
  )
}

export default ProjectSmallFeed