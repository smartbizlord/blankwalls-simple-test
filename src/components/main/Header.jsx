import React from 'react'
import { ArrowBackOutline, CopyOutline, HomeSharp, PlayCircle, TrashBinOutline, PencilOutline } from 'react-ionicons'

const Header = () => {
  return (
    <div className='h-[10vh] w-full shadow-md flex justify-between px-16 items-center'>
        {/*  */}
        <div className='flex gap-3 text-gray-500'>
          <ArrowBackOutline
            color={'#6b7280'} 
            title={"Go Back"}
            height="25px"
            width="25px"
            cssClasses={"cursor-pointer"}
          />
          <h2>Sample Test Case</h2>
        </div>
        <div className='flex gap-6 items-center'>
          <div className='flex gap-4'>
            <div className='flex gap-1 border-base border-solid border rounded-md py-1 px-4 items-center cursor-pointer hover:bg-[#eeeeee]'>
              <HomeSharp
                color={'#c242a0'} 
                title={"Launch Debugger"}
                height="15px"
                width="15px"
                // cssClasses={"border border-base p-1 rounded-md"}
              />
              <span className='text-base text-xs'>Launch Debugger</span>
            </div>
            <div className='flex gap-1 border-base border-solid border rounded-md py-1 px-4 items-center cursor-pointer hover:bg-[#c242ee] bg-base'>
              <PlayCircle
                color={'#fff'} 
                title={"Run"}
                height="15px"
                width="15px"
                // cssClasses={"border border-base p-1 rounded-md"}
              />
              <span className='text-white text-xs'>Run</span>
            </div>
            <div className='flex gap-1 border-base border-solid border rounded-md py-1 px-4 items-center cursor-pointer hover:bg-[#eeeeee]'>
              <PlayCircle
                color={'transparent'} 
                title={"Stop"}
                height="10px"
                width="10px"
                cssClasses={"bg-red-500 rounded-full"}
              />
              <span className='text-base text-xs'>Stop</span>
            </div>
          </div>
          <span className="w-[1px] h-8 bg-gray-300"></span>
          <div className='flex gap-4'>
            <CopyOutline
              color={'#c242a0'} 
              title={"Copy"}
              height="25px"
              width="25px"
              cssClasses={"border border-base p-1 rounded-md cursor-pointer hover:bg-[#eeeeee]"}
            />
            <PencilOutline
              color={'#c242a0'} 
              title={"Edit"}
              height="25px"
              width="25px"
              // cssClasses={"border-b-2 border-base p-1 rounded-md cursor-pointer hover:bg-[#eeeeee]"}
              cssClasses={"border border-base p-1 rounded-md cursor-pointer hover:bg-[#eeeeee]"}
            />
            <TrashBinOutline
              color={'#c242a0'} 
              title={"Delete"}
              height="25px"
              width="25px"
              cssClasses={"border border-base p-1 rounded-md cursor-pointer hover:bg-[#eeeeee]"}
            />
          </div>
        </div>
    </div>
  )
}

export default React.memo(Header)