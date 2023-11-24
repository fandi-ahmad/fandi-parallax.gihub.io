import React from 'react'
import SubMenu from './Submenu'
import { useGlobalState } from '../../state/state'

const BottomNavbar = () => {
  const [content, setContent] = useGlobalState('content')

  return (
    <div className='fixed sm:hidden z-30 bottom-0 w-full bg-gray-600 bg-opacity-95 rounded-xl rounded-bl-none rounded-br-none py-4 px-8 text-white border-gray-500 border-t flex justify-center'>
      <ul className='flex flex-row gap-8 font-medium'>
        <SubMenu title='about' onClick={() => setContent('about')} />
        <SubMenu title='resume' onClick={() => setContent('resume')} />
        <SubMenu title='portfolio' onClick={() => setContent('portfolio')} />
        <SubMenu title='contact' onClick={() => setContent('contact')} />
      </ul>
    </div>
  )
}

export default BottomNavbar