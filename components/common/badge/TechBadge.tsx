import React from 'react'
import { BadgeColorType, BadgeType } from '@/types/BadgeType'
import Image from 'next/image'

const TechBadge = ({ title }: BadgeType) => {
  return (
    <div className={`flex justify-center items-center text-xs text-[#fff] py-1 px-2 mr-1 rounded-md ${BadgeColor[title]}`}>
      <Image src={BadgeIcon[title]} alt={title} title={title} width={13} height={13} className='mr-1.5'/>
      {title}
    </div>
  )
}

const BadgeColor: BadgeColorType = {
  'React': "bg-[#61DAFB]",
  'Vue.js': 'bg-[#41B8B3]',
  'Next.js': 'bg-[#000000]',
  'TypeScript': 'bg-[#3178C6]',
  'TailwindCSS': 'bg-[#06B6D4]',
  'JavaScript': 'bg-[#F7DF1E]',
  'SCSS': 'bg-[#CC6699]',
  'Solidity': 'bg-[#363636]',
  'MySQL': 'bg-[#4479A1]',
  'Node.js': 'bg-[#339933]',
  'Redux': 'bg-[#764ABC]',
  'HTLM': 'bg-[#E34F26]',
}

const BadgeIcon: BadgeColorType = {
  'React': '/assets/Badge/react.svg',
  'JavaScript': '/assets/Badge/javascript.svg',
  'TypeScript': '/assets/Badge/typescript.svg',
  'Next.js': '/assets/Badge/next.svg',
  'Vue.js': '/assets/Badge/vue.svg',
  'TailwindCSS': '/assets/Badge/tailwind.svg',
  'SCSS': '/assets/Badge/sass.svg',
  'Solidity': '/assets/Badge/solidity.svg',
  'MySQL': '/assets/Badge/mysql.svg',
  'Node.js': '/assets/Badge/node.svg',
  'Redux': '/assets/Badge/redux.svg',
  'HTML': '/assets/Badge/html.svg'
}

export default TechBadge
