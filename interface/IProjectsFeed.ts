export interface IProjects {
  results: IProject[];
}

export interface IProject {
  id: string;
  last_edited_time: string;
  properties: IProperty;
}

export interface IProperty {
  Type: IType;
  Name: {
    title: IName[]
  }
  Summary: {
    rich_text: ISummary[];
  };
  Image: {
    files: IImage[];
  };
  DepolyUrl: IDeployUrl
  GithubUrl: IGithubUrl;
  TechStacks: {
    multi_select: ITechStack;
  }
  TechList: ITech[]
}

export interface IType {
  checkbox: IType;
}

export interface IName {
  plain_text: {
    title: IName[];
  };
}

export interface ISummary {
  plain_text: {
    rich_text: ISummary[];
  };
}

export interface IImage {
  name: {
    files: IImage[];
  };
}

export interface IDeployUrl {
  url: IDeployUrl;
}

export interface IGithubUrl {
  url: IGithubUrl;
}

export interface ITechStack {
  map(arg0: (tech: ITech) => void): unknown;
  multi_select: ITech[]
}

export interface ITech {
  name: string;
}