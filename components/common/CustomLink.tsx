import Link from "next/link"
import { useRouter } from "next/router"
import { CustomLinkType } from "@/types/CustomLinkType"

export const CustomLink = ({ href, title, className }: CustomLinkType) => {
  const router = useRouter();
  return (
    <Link href={`${href}`} className={`${className} relative`}>
      {title}
    <span 
      className={`h-[1px] inline-block w-full 
      bg-dark absolute left-0 -bottom-0.5 group-hover: w-full
      transition-[width] ease duration-300 
      ${router.asPath === href ? `w-full` : `w-0`}`}>&nbsp;</span>
    </Link>
  )
}