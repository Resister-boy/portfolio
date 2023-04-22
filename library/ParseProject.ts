import { IProjects, IProject, ITech, ITechStack } from "@/interface/IProjectsFeed";

export const parseProject = ( projects: IProjects): IProject[] => {
  let projectList: IProject[] = [];
  let idx = 1;
  projects.results.map((project: IProject) => {
    projectList.push({
      idx: idx,
      id: project.id,
      last_edited_time: project.last_edited_time,
      properties: {
        Type: project.properties.Type.checkbox,
        Name: project.properties.Name.title[0].plain_text,
        Summary: project.properties.Summary.rich_text[0].plain_text,
        Image: project.properties.Image.files[0].name,
        DepolyUrl: project.properties.DepolyUrl?.url,
        GithubUrl: project.properties.GithubUrl.url,
        TechStacks: project.properties.TechStacks,
        TechList: parseTechStack(project.properties.TechStacks.multi_select)
      }
    })
    idx += 1;
  })
  return (projectList);
}

export const parseTechStack = (techs: ITechStack) => {
  let techList: ITech[] = [];
  techs.map((tech: ITech) => {
    techList.push({
      name: tech.name,
    })
  })
  return (techList);
}

