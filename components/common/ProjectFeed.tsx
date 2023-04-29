import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '../icons';
import DefaultButton  from './button/DefaultButton'
import { IProjectFeed, ITech } from '@/interface/IProjectsFeed';
import { motion } from 'framer-motion';
import { parseText } from '@/library/ParseText';
import TechBadge from './badge/TechBadge';
import { ProjectType } from '@/types/ProjectType';

export const ProjectFeed = ({ project } : ProjectType) => {
  const id = project.id;
  const imageUrl = project.properties.Image.files[0].name;
  const name = project.properties.Title.rich_text[0].plain_text;
  const summary = project.properties.Summary.rich_text[0].plain_text;
  const techStacks = project.properties.TechStacks.multi_select
  const githubUrl = project.properties.GithubUrl.Url?.url;
  const deployUrl = project.properties.DeployUrl.Url?.url;
  return (
    <article className='w-full my-8 flex items-center relative justify-between hover:cursor-pointer hover:bg-gray-200 duration-200
        rounded-3xl bg-light shadow-2xl p-8 rounded-br-3xl'>
      <Link href={`projects/${id}`} className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
        <Image src={imageUrl} alt={name} className="w-full h-64" width={500} height={250} />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <Link href={`projects/${project.id}`} className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-[#333] text-2xl font-bold'>{name}</h2>
        </Link>
        <p className='my-2 text-gray-700 text-sm'>{parseText('Summary', summary, 150)}</p>
        <div className='flex justify-start items-center mt-2'>
          {techStacks.map(({ name }: ITech, i: number) => {
            return (
              <TechBadge key={i} title={name}/>
            )})
          }
        </div>
        <div className='w-full mt-2 flex items-center justify-end'>
          <motion.a href={githubUrl} target='_blank' className='mr-2' whileHover={{y: -2}}>
            <GithubIcon className='w-10 mr-5' />
          </motion.a>
          <DefaultButton link={deployUrl} title={`Deploy`} icon={false} className='py-1 px-2 bg-[#878787]' assets={`/assets/Cancel_Icon.svg`}/>
        </div>
      </div>
    </article>
  )
}