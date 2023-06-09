import { Key } from "react";
import Head from "next/head";
import { projectDatabase, projectPage } from "@/library/ProjectNotion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import TechBadge from "@/components/common/badge/TechBadge";
import { BlockMapType } from "react-notion";
import ProjectCard from "@/components/common/ProjectCard";
import { PageType } from "@/types/PageType";
import { GetPageResponse } from "@notionhq/client/build/src/api-endpoints";
import RenderBlocks from "@/components/common/RenderBlocks";
import parseHeadContent from "@/library/ParseHeadContent";

interface IParams extends ParsedUrlQuery {
  id: string
}

const ProjectDetail:NextPage<PageType & BlockMapType> = ({ page, blocks }) => {
  const title = page.properties.Title.rich_text[0].plain_text;
  const techStacks = page.properties.TechStacks.multi_select;
  const name = page.properties.Name.title[0].plain_text;
  const imageUrl = page.properties.Image.files[0].name;
  const categories = page.properties.Categories;
  const summary = page.properties.Summary.rich_text[0].plain_text
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keyword" content={`${parseHeadContent(categories)}`} />
        <meta name='description' content={`${summary}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="resister-boy" />      
      </Head>
      <main className="w-4/5 mx-auto">
        <div className="w-full flex justify-center mt-20">
          <h1 className="w-4/5 text-5xl text-center font-semibold">{name}</h1>
        </div>
        <div className="flex justify-center itmes-center mt-16 mb-12">
          {techStacks.map((tech: { name: string }, index: Key ) => {
            return (
              <TechBadge key={index} title={tech.name} />
          )})}
        </div>
        <div className="mx-auto">
          <Image src={imageUrl} alt={title} width={1000} height={500} className="w-full rounded-3xl shadow-xl"/>
        </div>
        <div className="flex justify-end">
          <div className="w-2/3 mt-12 px-20">
            <RenderBlocks
              blocks={blocks}
            />
          </div>
          <div className="w-1/3">
            <ProjectCard 
              page={page}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams; 
  const page: GetPageResponse = await projectPage(id); 
  const blocks: BlockMapType = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`).then(res => res.json());
  return {
    props: {
      page,
      blocks
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let { results } = await projectDatabase(); 
  return {
    paths: results.map((post) => { 
      return {
        params: { 
          id: post.id
        }
      }
    }),
    fallback: false
  }
} 

export default ProjectDetail;