import React from 'react'
import Link from 'next/link'
import { DefaultBtnType } from '@/types/DefaultBtnType'
import { LinkArrow } from '@/components/icons/LinkArrow'

const DefaultButton = ({ link, title, download }: DefaultBtnType) => {
  return (
    <Link href={link} target={"_blank"} download={`${download ? true : false}`}
      className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text0-lg font-semibold 
      hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark duration-200 mr-4'>
      {title}
      {download
        ? <LinkArrow className={"w-5 ml-2"}/>
        : null}
    </Link>
  )
}

export default DefaultButton