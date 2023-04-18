import React, { useEffect, useState } from 'react'
import { commitType } from '@/pages'
import Link from 'next/link'
import { INewsFeed } from '@/interface/INewsFeed'
import { fetchRecentRepo } from '@/library/RecentCommit'



const NewsFeed = ({ name, ...rest }: commitType) => {
  const [isForked, setIsForked] = useState<INewsFeed | undefined>()
  useEffect(() => {
    const callFetchRecentRepo = async(name: string) => {
      const repo: INewsFeed = await fetchRecentRepo(name);
      return (repo);
    }
    callFetchRecentRepo(name);
  }, [])
  return (
    <main>
      <Link href={`https://github.com/Resister-boy/${name}`} target={`_blank`}>
        Github
      </Link>
      {name}
      <div>
        {isForked ? "Forked" : null}
      </div>
    </main>
  )
}

export default NewsFeed