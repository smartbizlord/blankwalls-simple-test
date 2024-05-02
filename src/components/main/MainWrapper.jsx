import React from 'react'
import Header from './Header'
import MainSection from './MainSection'

const MainWrapper = () => {
  return (
    <div className='flex-1 flex flex-col'>
        <Header />
        <MainSection />
    </div>
  )
}

export default React.memo(MainWrapper)