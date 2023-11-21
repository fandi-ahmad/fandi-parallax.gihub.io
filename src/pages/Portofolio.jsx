import React from 'react'
import { useGlobalState } from '../state/state'
import { CardPorto } from '../components/Cards'

import webPena from '../assets/images/portofolio/web-pena.webp'
import honeyProduction from '../assets/images/portofolio/honey-production.webp'
import whackamole from '../assets/images/portofolio/whackamole.webp'
import todolist from '../assets/images/portofolio/todolist-app.webp'
import sipsApp from '../assets/images/portofolio/SIPS-app.webp'
import weatherApp from '../assets/images/portofolio/weather-app.webp'

const Portofolio = () => {
  const [portofolioPage, setPortofolioPage] = useGlobalState('portofolioPage')

  const Canvas = () => {
    return (
      portofolioPage === 'all' ? 
      <>
        <CardPorto src={webPena} title='PENA Website 2022-2023' detail='Company Profile' />
        <CardPorto src={honeyProduction} title='Honey Production' detail='Landing Page' />
        <CardPorto src={weatherApp} title='Weather App' detail='weather forecast' />
        <CardPorto src={sipsApp} title='SIPS App' detail='Application for managing Balaroa sub-district letters' />
        <CardPorto src={whackamole} title='Whack a Mole' detail='mini game app' />
        <CardPorto src={todolist} title='to do list' detail='tools app' />
      </> :
      portofolioPage === 'html | css | js' ? 
      <>
        <CardPorto src={webPena} title='PENA Website 2022-2023' detail='Company Profile' />
        <CardPorto src={honeyProduction} title='Honey Production' detail='Landing Page' />
        <CardPorto src={whackamole} title='Whack a Mole' detail='mini game app' />
        <CardPorto src={todolist} title='to do list' detail='tools app' />
      </> :
      portofolioPage === 'react & express' ? 
      <>
        <CardPorto src={sipsApp} title='SIPS App' detail='Application for managing Balaroa sub-district letters' />
      </> :
      portofolioPage === 'vue' ? 
      <>
        <CardPorto src={weatherApp} title='Weather App' detail='weather forecast' />
      </> :
      null
    );
  }

  const classNav = 'cursor-pointer hover:text-blue-400 duration-200 capitalize'

  const SubMenu = (props) => {
    return (
      <li onClick={props.onClick} className={portofolioPage === props.text ? classNav+' text-blue-400' : classNav}>{props.text}</li>
    )
  }

  return (
    <div className='px-4 md:px-8 mt-8'>

      {/* navbar portofolio */}
      <ul className='hidden md:flex flex-row gap-8'>
        <SubMenu text='all' onClick={() => setPortofolioPage('all')} />
        <SubMenu text='html | css | js' onClick={() => setPortofolioPage('html | css | js')} />
        <SubMenu text='react & express' onClick={() => setPortofolioPage('react & express')} />
        <SubMenu text='vue' onClick={() => setPortofolioPage('vue')} />
      </ul>

      {/* content portofolio */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
        <Canvas/>
      </div>
      
    </div>
  )
}

export default Portofolio