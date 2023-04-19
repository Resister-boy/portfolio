import React, { useEffect, useState } from 'react'
import { commitType } from '@/pages'
import Link from 'next/link'
import Image from 'next/image'
import { INewsFeed } from '@/interface/INewsFeed'
import { fetchRecentRepo } from '@/library/RecentCommit'
import { fetchRelatedTime } from '@/library/DateFormat'
import { parseText } from '@/library/ParseText'

const styles = {
  skeleton_box: 'w-4/5 h-[30px] bg-[#D9D9D9] rounded-xl animate-pulse',
  skeleton_content: 'w-4/5 h-1/2 bg-[#D9D9D9] rounded-xl my-4 animate-pulse'
}

const NewsFeed = ({ name, ...rest }: commitType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isForked, setIsForked] = useState<boolean | undefined>(undefined);
  const [updatedAt, setUpdatedAt] = useState<string | undefined>(undefined);
  const [commitMsg, setCommitMsg] = useState<string | undefined>(undefined);
  const [owner, setOwner] = useState<string | undefined>(undefined);
  const [ownerImgUrl, setOwnerImgUrl] = useState<string>();
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [branch, setBranch] = useState<string | undefined>(undefined);

  useEffect(() => {
    const callFetchRecentRepo = async(name: string) => {
      setIsLoading(true);
      const repo: INewsFeed = await fetchRecentRepo(name);
      setIsForked(repo.isForked);
      setUpdatedAt(repo.updated_at);
      setCommitMsg(repo.message);
      setOwner(repo.owner);
      setOwnerImgUrl(repo.ownerImageUrl);
      setDescription(repo.description);
      setBranch(repo.branch);
      setIsLoading(false);
    }
    callFetchRecentRepo(name);
  }, [])
  return (
    <main className="w-full h-40 pt-6 pb-2 px-4 bg-white border border-gray-200 rounded-lg shadow mr-4 relative">
      <div className='flex items-center'>
        <Image src={ownerImgUrl || '/assets/Ghost.png '} alt="Profile" width={35} height={35}  className={`${isLoading ? 'hidden' : 'rounded-full'}`}/>
        <Link href={'https://github.com/Resister-boy'}>
          <h5 className={`${isLoading ? 'hidden' : 'text-[#6F6F6F] hover:underline duration-150 mb-2 text-lg tracking-tight ml-6'}`}>{name}</h5>
        </Link>
        <div className={`${isLoading ? `${styles.skeleton_box}` : 'hidden'}`}/>
        <div className={`${isLoading ? 'hidden' : 'absolute top-8 right-8 flex'}`}>
          <div className='border-2 border-[#B0AEAE] rounded w-[50px] flex justify-evenly items-center mr-1'>
            <span className='text-[#B0AEAE] font-semibold text-[10px]'>{branch}</span>
          </div>
          {isForked && (
            <div className='border-2 border-[#9BF072] rounded w-[50px] flex justify-evenly items-center'>
              <Image src={'/assets/Fork_Icon.svg'} alt="icon" width={8} height={8} />
              <span className='text-[#9BF072] font-semibold text-[10px]'>Fork</span>
            </div>
          )}
        </div>
      </div>
      <div className={`${isLoading ? 'hidden' : 'w-full my-2 ml-1'}`}>
        <span className='text-xs text-[#B0AEAE] font-medium'>Description..</span>
        <span className="ml-2 my-2 text-sm text-gray-700 dark:text-gray-400">{parseText("Description", description, 45)}</span><br />
        <span className='text-xs text-[#B0AEAE] font-medium'>Commit message..</span>
        <span className="ml-4 mb-3 text-sm text-gray-700 dark:text-gray-400">{parseText("Commit Message", commitMsg, 45)}</span>
      </div>
      <div className={`${isLoading ? 'hidden' : 'flex justify-end items-center mt-1'}`}>
        <span className='text-xs text-[#B0AEAE] font-medium mr-4'>{fetchRelatedTime(`${updatedAt}`)}</span>
      </div>
      <div className={`${isLoading ? `${styles.skeleton_content}` : 'hidden'}`} />
    </main>
  )
}

export default NewsFeed