import React from "react"
import { IconType } from "@/types/IconType"

const LinkChain = ({ className, ...rest }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M378.5.6c-23.3 3.6-42.2 11.2-58.7 23.8-4 3-32 30.3-62.3 60.6-41.6 41.7-54.3 54.9-52 54.3 1.7-.4 10.4-.7 19.5-.7 18.5.1 29.6 1.7 44.8 6.6l9.5 3 39.1-39C355 72.8 358 70 365 66.6c24.1-11.7 50.4-7.4 69.1 11.3 16.1 16.1 21.7 38.6 15 60.1-4.2 13.5-5.8 15.2-68 77.3-56.1 56-58.9 58.6-66.2 62.2-5.2 2.5-10.7 4.2-17.3 5.3-8.9 1.5-10.3 1.5-19.2 0-12.1-2-21.1-6.4-31.6-15.1-9.4-8-15.2-10.2-24.8-9.5-9.3.7-14.6 3.9-27 16.3l-10.3 10.3 4.9 7.4c17.2 25.9 46.5 44.3 79.3 49.9 10 1.7 31.2 1.5 41.4-.5 10-1.9 23.5-6.5 32.2-10.9 15.2-7.6 19.6-11.6 80.3-72.1 32.6-32.5 61.8-62.4 64.9-66.4 10.5-14 18.9-32.8 22.4-50.7.8-4 1.4-13.2 1.4-21.5 0-15.8-1.2-23.5-5.6-37.3-13-39.9-46.5-70.3-87.9-79.8C409.7 1 385.3-.4 378.5.6z" />
    <path d="M205.5 169.6c-16.9 2.6-33.7 9.2-48.9 19.1C147.9 194.4 33 308.3 24.1 320c-10 13.3-18 30.9-21.7 48-2.6 11.8-2.6 36.2 0 48 10.2 47.3 46.3 83.4 93.6 93.6 11.8 2.6 36.2 2.6 48 0 17.1-3.7 34.7-11.7 48-21.8 4.1-3.1 32.3-30.5 62.5-60.8 54.8-55 55-55.2 50.5-54.4-7.7 1.2-33 .6-42.5-1-4.9-.9-13.6-3-19.3-4.8l-10.3-3.2-39.2 39.1C157 439.2 154 442 147 445.4c-24.1 11.7-50.4 7.4-69.1-11.3-16.1-16.1-21.7-38.6-15-60.1 4.2-13.5 5.7-15.2 68.5-77.7 56.9-56.7 59.4-59.1 66.2-62.1 23.4-10.6 48.4-7.1 67.3 9.3 8.4 7.4 13.2 9.7 21.1 10.2 11 .8 16.3-1.9 29.7-15 6.2-6.1 11.3-11.4 11.3-11.8 0-.4-2.3-4.2-5.2-8.5-24.1-36-71.1-55.8-116.3-48.8z" />
  </svg>
)
export default LinkChain;