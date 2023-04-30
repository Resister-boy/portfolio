export type PropertyType = {
  DeployUrl: NotionUrlType;
  GithubUrl: NotionUrlType;
  Image: NotionImageType;
  Name: NotionNameType;
  Summary: NotionSummaryType;
  TechStacks: NotionTechStackType;
  Categories: NotionCategoriesType;
  Title: NotionTitleType;
  Type: NotionCheckType;
}

export type NotionUrlType = {
  Url: {
    id: string;
    type?: string;
    url: string;
  };
}

export type NotionImageType = {
  files: {
    name: string;
    type: string;
  }[];
  id: string;
  type: string | null;
}

export type NotionNameType = {
  id: string;
  title: {
    href?: string | null;
    plain_text: string;
    type: string;
  }[] ;
  type: string;
}

export type NotionSummaryType = {
  id: string;
  rich_text: {
    href?: string | null;
    plain_text: string;
    type: string;
  }[];
  type: string;
}

export type NotionTechStackType = {
  id: string;
  multi_select: {
    id: string;
    name: string;
  }[];
  type: string;
}

export type NotionCategoriesType = {
  id: string;
  multi_select: {
    id: string;
    name: string;
  }[];
  type: string;
}

export type NotionTitleType = {
  id: string;
  rich_text: {
    href?: string | null;
    plain_text: string;
  }[];
  type: string;
}

export type NotionCheckType = {
  checkbox: boolean;
  id: string;
  type: string;
}