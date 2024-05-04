import React from 'react'
import { CopyOutline, } from 'react-ionicons'

const SideBarHeader = () => {
  return (
    <div className='h-[10vh] w-full flex items-center gap-2'>
        <CopyOutline
            color={'#ffffff'} 
            title={"Copy"}
            height="25px"
            width="25px"
            cssClasses={"border border-base p-1 bg-base"}
        />
        <h2 className='text-base font-bold text-lg'>Simple Test</h2>
    </div>
  )
}

export default React.memo(SideBarHeader)