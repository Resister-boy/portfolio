import { renderBlockObject } from '@/library/parseBlock'
import React from 'react'

const RenderBlock = (block: any) => {
  return (
    <div className={`${renderBlockObject(block).background} text-[#333]`}>
      <p className={`${renderBlockObject(block).styles}`}>
        {renderBlockObject(block).content}
      </p>
    </div>
  )
}

export default RenderBlock