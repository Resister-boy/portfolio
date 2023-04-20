import { projectBlocks, projectDatabase, projectPage } from "@/library/ProjectNotion";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  id: string
}

interface Props {
  id: string,
  project: any,
  blocks: [any]
}

const ProjectDetail:NextPage<Props> = ({id, project, blocks}) => {
  return (
    <div>Hello World</div>
  )
}



export const getStaticProps: GetStaticProps = async (context) => {
  let { id } = context.params as IParams; 
  let page_result = await projectPage(id); 
  let { results } = await projectBlocks(id); 

  return {
    props: {
      id,
      project: page_result,
      blocks: results
    }
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