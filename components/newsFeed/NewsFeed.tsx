import React, { useEffect, useState } from 'react'
import { commitType } from '@/pages'
import Link from 'next/link'
import Image from 'next/image'
import { INewsFeed } from '@/interface/INewsFeed'
import { fetchRecentRepo } from '@/library/RecentCommit'
import { fetchRelatedTime } from '@/library/DateFormat'

const NewsFeed = ({ name, ...rest }: commitType) => {
  const [isForked, setIsForked] = useState<boolean | undefined>(undefined);
  const [updatedAt, setUpdatedAt] = useState<string | undefined>(undefined);
  const [commitMsg, setCommitMsg] = useState<string | undefined>(undefined);
  const [owner, setOwner] = useState<string | undefined>(undefined);
  const [ownerImgUrl, setOwnerImgUrl] = useState<string>();
  const [description, setDescription] = useState<string | undefined>(undefined);

  useEffect(() => {
    const callFetchRecentRepo = async(name: string) => {
      const repo: INewsFeed = await fetchRecentRepo(name);
      setIsForked(repo.isForked);
      setUpdatedAt(repo.updated_at);
      setCommitMsg(repo.message);
      setOwner(repo.owner);
      setOwnerImgUrl(repo.ownerImageUrl);
      setDescription(repo.description);
    }
    callFetchRecentRepo(name);
  }, [])
  return (
    <main className="w-full h-40 pt-6 pb-2 px-4 bg-white border border-gray-200 rounded-lg shadow">
      <div className='flex items-center'>
        <Image src={ownerImgUrl || '/assets/Ghost.png '} alt="Profile" width={35} height={35}  className='rounded-full'/>
        <Link href={'https://github.com/Resister-boy'}>
          <h5 className="text-[#6F6F6F] hover:underline duration-150 mb-2 text-xl tracking-tight ml-6">{name}</h5>
        </Link>
      </div>
      <div className='w-full my-2 ml-1'>
        <span className='text-xs text-[#B0AEAE] font-medium'>Description..</span>
        <span className="ml-2 my-2 text-sm text-gray-700 dark:text-gray-400">{description ? description?.slice(0, 30) + "..." : "Descriptoin deos not exist"}</span> <br />
        <span className='text-xs text-[#B0AEAE] font-medium'>Commit message..</span>
        <span className="ml-4 mb-3 text-sm text-gray-700 dark:text-gray-400">{commitMsg?.slice(0, 30) + "..."}</span>
      </div>
        <div className='flex justify-end items-center'>
          <span className='text-xs text-[#B0AEAE] font-medium mr-4'>{fetchRelatedTime(`${updatedAt}`)}</span>
          {isForked && (
            <div className='border-2 border-[#9BF072] rounded w-[60px] flex justify-evenly items-center'>
              <Image src={'/assets/Fork_Icon.svg'} alt="icon" width={10} height={10} />
              <span className='text-[#9BF072] font-semibold text-[12px]'>Fork</span>
            </div>
          )}
        </div>
    </main>
  )
}

export default NewsFeed