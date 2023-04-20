import { IconType } from "@/types/IconType";

export const ArrowUp = ({ className, ...rest }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width=".5em"
    height=".5em"
    className={`w-full h-auto ${className}`}
    viewBox="0 0 32 32"
    {...rest}
  >
    <path d="M9 6.5c-5 5.1-6.2 6.7-5.2 7.7.9.9 2 .4 5-2.5 2.1-2 4.1-3.7 4.5-3.7.3 0 .8 5.3.9 11.7.2 9.7.6 11.8 1.8 11.8 1.2 0 1.6-2.1 1.8-11.8.1-6.4.6-11.7.9-11.7.4 0 2.4 1.7 4.5 3.7 3 2.9 4.1 3.4 5 2.5 1-1-.2-2.6-5.2-7.7C19.5 2.9 16.3 0 16 0c-.3 0-3.5 2.9-7 6.5z" />
  </svg>
)