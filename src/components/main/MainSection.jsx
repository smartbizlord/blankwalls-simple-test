import React, { useState } from 'react'
import { ChevronForwardOutline, ChevronBackOutline, PlayCircle, TimeOutline, BusinessOutline, ListOutline, TrashBinOutline, Close, FunnelOutline, HelpCircleOutline } from 'react-ionicons'
import { SortablePane } from 'react-sortable-pane'
import TestStep from './TestStep'
import ExampleCard from './ExampleCard'

const MainSection = () => {

  
  const [testList, setTestList] = useState(["1", "2", "3", "5", "6", "8"])


  return (
    <div className='bg-[#ebebeb77] flex-1 px-16 py-8 flex flex-col gap-8 h-[90vh]'>
        <div className='bg-white flex h-[15vh] items-center rounded-md shadow-md'>
          <div className="flex-[7.5] flex justify-between pl-6">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <span className='text-gray-400 text-xs'>Status</span>
                  <PlayCircle
                    color={'transparent'} 
                    title={"Ready"}
                    height="7px"
                    width="7px"
                    cssClasses={"bg-green-900 rounded-full"}
                  />
              </div>
              <span className='text-green-900 font-bold'>Ready</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className='text-gray-400 text-xs'>Created By</span>
              <p>
                <span className='text-green-900 font-bold'>John Doe</span> on April 15, 2024
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className='text-gray-400 text-xs'>Assignee</span>
              <span className='text-green-900 font-bold'>John Doe</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className='text-gray-400 text-xs'>Review By</span>
              <span className='text-green-900 font-bold'>-</span>
            </div>
          </div>
          <div className="flex-[2.5] flex justify-end pr-1">
            <ChevronForwardOutline
              color={'#c242a0'} 
              title={"Go"}
              height="20px"
              width="20px"
              cssClasses={"cursor-pointer"}
            />
          </div>
        </div>
        <div className='flex max-h-[60vh] gap-2 flex-1'>
          <div className="flex flex-col flex-[2] gap-2">
            <div className="bg-white rounded-md shadow-md flex-[1] flex items-center px-4 py-4 justify-between">
              <div className="flex gap-6">
                <div className='flex gap-1 border-base border-solid border rounded-md py-1 px-2 items-center cursor-pointer w-[110px] h-[28px] justify-center hover:bg-[#c242ee] bg-base text-white'>
                  <ListOutline
                    color={'#fff'} 
                    title={"Test"}
                    height="15px"
                    width="15px"
                    // cssClasses={"border border-base p-1 rounded-md"}
                  />
                  <span className='text-xs'>Test Steps (1)</span>
                </div>
                <div className='flex gap-1 border-base border-solid border rounded-md py-1 px-2 items-center cursor-pointer w-[110px] h-[28px] justify-center hover:bg-[#eeeeee] bg-white text-base'>
                  <BusinessOutline
                    color={'#c242a0'} 
                    title={"Run"}
                    height="15px"
                    width="15px"
                    // cssClasses={"border border-base p-1 rounded-md"}
                  />
                  <span className='text-xs'>Dry Runs</span>
                </div>
                <div className='flex gap-1 border-base border-solid border rounded-md py-1 px-2 items-center cursor-pointer w-[110px] h-[28px] justify-center hover:bg-[#eeeeee] bg-white text-base'>
                  <TimeOutline
                    color={'#c242a0'} 
                    title={"Activity"}
                    height="15px"
                    width="15px"
                    // cssClasses={"border border-base p-1 rounded-md"}
                  />
                  <span className='text-xs'>Activity</span>
                </div>
              </div>
              <div className="">
                <input type="search" name="" id="" placeholder='Search' className='border-none outline-none bg-gray-200 pl-4 rounded-md w-[100px]' />
              </div>
            </div>
            <div className="bg-white rounded-md shadow-md flex-[9] p-1 overflow-hidden">
              <div className="px-4 pr-20 w-full flex justify-between items-center border-b h-[40px]">
                <input type="checkbox" name="all" id="" className='border-gray-100 border bg-blue-300' />
                <div className="flex gap-4 items-center">
                  <span className="text-[#e2e2e2] text-xs">1-1 of 1</span>
                  <ChevronBackOutline
                    color={'#e2e2e2'} 
                    title={"back"}
                    height="18px"
                    width="18px"
                    cssClasses={"cursor-pointer"}
                  />
                  <ChevronForwardOutline
                    color={'#e2e2e2'} 
                    title={"forward"}
                    height="18px"
                    width="18px"
                    cssClasses={"cursor-pointer"}
                  />
                </div>
              </div>
              <div className="flex-1 flex h-minus-50">
                <SortablePane
                  defaultOrder={testList}
                  direction='vertical'
                  onOrderChange={(order) => {setTestList(order); console.log(order, "order")}}
                  className='overflow-y-scroll flex-1'
                  // isSortable={true}
                >
                  {/* <div key={1}>1</div>
                  <div key={2}>2</div>
                  <div key={3}>3</div> */}
                  {/* {testList?.map((item, index) => <TestStep key={item} index={index} stepTitle={item} />)} */}
                  {/* {testList?.map((item, index) => <div key={item} className='h-[20]'>{item}</div>)} */}
                  <TestStep key={1} index={0} stepTitle={"1"} firstText={"Navigate to"} linkText={"https://practice.stdunecons.com/"} />
                  <TestStep key={2} index={1} stepTitle={"2"} firstText={"CLick on svg Tag"} />
                  <TestStep key={3} index={2} stepTitle={"3"} firstText={"Click on S:inputSearch1"} />
                  <TestStep key={5} index={3} stepTitle={"3"} firstText={"Enter"} linkText={"Marketing"} afterText={"in the S:inputSearch1 field"} />
                  <TestStep key={6} index={4} stepTitle={"3"} firstText={"Press Enter/Return key"} />
                  <TestStep key={8} index={5} stepTitle={"3"} firstText={"Click on"} linkText={"MArketingSearchHeading"} />
                  <TestStep key={9} index={6} stepTitle={"3"} firstText={"Click on"} linkText={"MArketingSearchSubHeading"} />
                </SortablePane>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow-md flex-1 flex gap-2">
            <div className="shadow-md w-[6px] h-11/12 long-stuff mb-2"></div>
            <div className="flex flex-col flex-1 py-4 gap-4">
              <div className="flex gap-4 px-1 items-center">
                <TrashBinOutline
                  color={'#c242a0'} 
                  title={"filter"}
                  height="15px"
                  width="15px"
                  cssClasses={"cursor-pointer"}
                />
                <span className="flex-1 text-base font-bold">Example</span>
                <Close
                  color={'#838383'} 
                  title={"close"}
                  height="20px"
                  width="20px"
                  cssClasses={"cursor-pointer"}
                />
              </div>
              <div className="flex justify-between pr-6 items-center">
                <div className="bg-pink-200 p-[6px] rounded-md">
                  <Close
                    color={'#c242a0'} 
                    title={"close"}
                    height="13px"
                    width="13px"
                    cssClasses={"cursor-pointer border border-2 forty-deg rounded-sm border-base"}
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-2 items-center">
                    <FunnelOutline
                      color={'#838383'} 
                      title={"filter"}
                      height="20px"
                      width="20px"
                      // cssClasses={"cursor-pointer border border-2 forty-deg rounded-sm border-base"}
                    />
                    <span className="">Filter</span>
                  </div>
                  <input type="search" name="" id="" placeholder='Search' className='border-none outline-none bg-gray-200 pl-4 rounded-sm w-[80px]' />
                </div>
              </div>
              <div className="flex flex-1 gap-4 overflow-y-scroll">
                <div className="w-[30px] h-full flex justify-center">
                  <HelpCircleOutline  
                    color={'#c242a0'} 
                    title={"Help"}
                    height="25px"
                    width="25px"
                    // cssClasses={"cursor-pointer border border-2 forty-deg rounded-sm border-base"}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <ExampleCard firstText={"Navigate to the"} linkText={"test-data"} />
                  <ExampleCard firstText={"Wait until the current page is loaded completely"} />
                  <ExampleCard firstText={"Enter"} linkText={"test-data"} afterText={"in the element field"} />
                  <ExampleCard firstText={"Click on element"} />
                  <ExampleCard firstText={"Verify that the current page title is"} linkText={"test-data"} />
                  <ExampleCard firstText={"Verify that the current page URL is"} linkText={"test-data"} />
                  <ExampleCard firstText={"Verify that the current page URL is"} linkText={"test-data"} />
                  <ExampleCard firstText={"Verify that the current page URL is"} linkText={"test-data"} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default React.memo(MainSection)