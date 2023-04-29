import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/common/AnimatedText'
import { GetServerSideProps, NextPage } from 'next'
import ProjectSmallFeed from '@/components/common/ProjectSmallFeed'
import { GetDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'
import { DataBaseType } from '@/types/DataBaseType'

const Projects:NextPage<DataBaseType> = (projects) => {
  return (
    <>
      <Head>
        <title>Resister-boy | Projects</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center'>
        <div className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge!" className='text-3xl mt-8 text-[#333]'/>
          <div className='w-2/3 mt-12 mx-auto flex flex-wrap justify-evenly'>
            {projects.results.map((project, index: number) => {
              return (
                <ProjectSmallFeed
                  key={index}
                  project={project}
                />
                )})}
          </div>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json', 
      'Notion-Version': '2022-02-22',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.PROJECT_PASSWORD}`
    },
    body: JSON.stringify({
      sorts: [
          {
              "property": "Name",
              "direction": "ascending"
          }
      ],
      page_size: 100
    })
  };
  const response = await fetch(`https://api.notion.com/v1/databases/${process.env.PROJECT_APIKEY}/query`, options)
  const projects: GetDatabaseResponse = await response.json()
  return {
    props: projects
  }
}


export default Projects