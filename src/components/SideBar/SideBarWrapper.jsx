import React from 'react'
import SideBarHeader from './SideBarHeader'
import AddNewProject from './AddNewProject'
import NavsSection from './NavsSection'
import AccountInfoCard from './AccountInfoCard'

const SideBarWrapper = () => {
  return (
    // <div className='w-[18vw] h-[100vh] shadow-xl flex flex-col overflow-none'>
    <div className='w-[15vw] h-[100vh] shadow-xl flex flex-col overflow-none'>
        <div className='px-4 flex flex-col flex-1'>
          <SideBarHeader />
          <AddNewProject />
          <NavsSection />
        </div>
        <AccountInfoCard />
    </div>
  )
}

export default React.memo(SideBarWrapper)