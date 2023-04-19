import axios from "axios"
import { commitType } from "@/pages";
import { INewsFeed } from "@/interface/INewsFeed";
import { IError } from "@/interface/IError";
export const sortRecentRepo = async (count: number) => {
  let commitArray: commitType[] = [];
  const userCommitInfos = await axios.get(`https://api.github.com/users/Resister-boy/repos`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_APIKEY}`
    }
  });
    userCommitInfos.data.map(({ name, id, updated_at }: commitType) => commitArray.push({
    name,
    id,
    updated_at,
  }))
  return (commitArray.sort(function (a: commitType, b: commitType) {
    return (+new Date(a.updated_at)) - (+new Date(b.updated_at));
  })).reverse().slice(0, count)
}

export const fetchRecentRepo = async (name: string): Promise<INewsFeed | IError> => {
  const response = await axios.get(`https://api.github.com/repos/Resister-boy/${name}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_APIKEY}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  const commitMessage = await fetchCommitMessage(name);
  console.log(response);
  try {
    return ({
      id: response.data.id,
      name: response.data.name,
      isForked: response.data.fork,
      updated_at: response.data.updated_at,
      description: response.data.description,
      repoUrl: response.data.url,
      branch: response.data.default_branch,
      message: commitMessage.response,
      owner: response.data.owner.login,
      ownerImageUrl: response.data.owner.avatar_url,
    })
  } catch (err) {
    console.log(err)
    return ({
      status: response.status,
      message: response.statusText
    })
  }
}

export const fetchCommitMessage = async(name: string) => {
  const response = await axios.get(`https://api.github.com/repos/Resister-boy/${name}/commits`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_APIKEY}`,
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  if (response.status !== 200)
    return ({
      status: "request failed",
      response: ""
    })
  return ({
    status: "request fulfilled",
    response: response.data[0].commit.message
  })
}