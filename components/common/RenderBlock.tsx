import { renderBlockObject } from '@/library/parseBlock'
import React, { Dispatch, useEffect, useRef } from 'react'
import { SetAccessorDeclaration } from 'typescript';

const RenderBlock = (block: any, setIsHeading: Dispatch<SetAccessorDeclaration>) => {
  const heading = useRef<HTMLDivElement>(null);
  console.log(heading?.current);
  useEffect(() => {
    // setIsHeading(heading);
  }, [heading])
  return (
    <div className={`${renderBlockObject(block).background} text-[#333]`} 
      ref={block.block.type === "heading_2" ? heading : null}>
      <p className={`${renderBlockObject(block).styles}`}>
        {renderBlockObject(block).content}
      </p>
    </div>
  )
}

export default RenderBlock