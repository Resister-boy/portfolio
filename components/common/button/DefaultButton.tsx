import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { DefaultBtnType } from '@/types/DefaultBtnType'
import { LinkArrow } from '@/components/icons'

const DefaultButton = ({ link, title, icon, className, assets }: DefaultBtnType) => {
  if (link === null || link === undefined) {
    link = "";
  }
  return (
    <Link href={link} target={"_blank"}
      className={`flex items-center justify-between text-light rounded-lg text-md
       border-solid border-2 border-dark duration-200 mr-4 ${className}
      ${!link ? "cursor-default opacity-30" : "hover:bg-light hover:text-dark"}`}>
        {assets && (
          <Image src={assets} alt={title} width={22} height={22} className='mr-1'/>
        )}
        <div>
          {title}
        </div>
        {icon && (
          <LinkArrow className='w-8 ml-2' />
        )}
    </Link>
  )
}

export default DefaultButton