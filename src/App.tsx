import React, { Fragment, useEffect, useState } from 'react';
import logo from './img/logo.png';
import DiffIcon from './img/diff.png';
import Icon5 from './img/banner1.jpg';
import Icon6 from './img/6.jpg';
import Icon7 from './img/7.jpg';
import twitter from './img/twitter.png';
import github from './img/github.png';
import telegram from './img/telegram.png';

import { Outlet, useLocation } from "react-router";
import { slide as Menu } from 'react-burger-menu';
import MenuUi from './components/MenuUi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css';
import './App.css';


function App() {

  const location = useLocation();
  const pathname = location.pathname;
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const list = [Icon5]

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    console.log("pathname==", pathname)
    setIsOpen(false)
  }, [pathname])

  const handleStateChange = (state: any) => {

    setIsOpen(state.isOpen)
  }


  return <>
    {isOpen && <Menu isOpen={isOpen} pageWrapId={"page-wrap"} onStateChange={handleStateChange} >

      <MenuUi />

    </Menu>}
    <div className={!darkMode ? 'bg-white' : 'dark bg-black'}>

      <header className="sticky top-0 z-50 backdrop-blur-md flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-transparent">
        <div className="mr-6 flex lg:hidden">
          <button onClick={() => {
            setIsOpen(true)
          }} type="button" className="relative" aria-label="Open navigation">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" className="h-6 w-6 stroke-slate-500">
              <path d="M4 7h16M4 12h16M4 17h16"></path>
            </svg></button>
          {/* <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div> */}
        </div>
        <div className="relative flex flex-grow basis-0 items-center">

          <a className='flex items-center' aria-label="Home page" href="/"><img className='w-9 h-9 mr-2' src={logo} /><span className="flex font-display text-sm font-bold text-slate-900 dark:text-sky-100 md:text-3xl">PATH-BTC</span></a>
        </div>
        <div className="relative flex basis-0 justify-end gap-4 md:gap-6 flex-grow">
          <a href='https://twitter.com/PATH_Protocol' target='_blank'>
            <img className='w-6 h-6 md:w-7 md:h-7 hover:scale-105' src={twitter} />
          </a>
          <a href='https://t.me/PATH_Protocol' target='_blank'>
            <img className='w-6 h-6 md:w-7 md:h-7 hover:scale-105' src={telegram} />
          </a>
          <a href='https://github.com/pathbtc' target='_blank'>
            <img className='w-6 h-6 md:w-7 md:h-7 hover:scale-105' src={github} />
          </a>

        </div>
      </header>
      {pathname == "/" && <div className="overflow-hidden  dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
        <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-[88rem] lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
            <div className="relative z-10 md:text-center lg:text-left ">
              {/* <img alt="" src={blurCyan} width="530" height="530" decoding="async" data-nimg="1" className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50 text-transparent" /> */}
              <div className="relative leading-10">
                <p className="inline bg-gradient-to-r font-bold from-amber-500 via-[#FF8D00] to-amber-500  bg-clip-text font-display text-4xl tracking-tight text-transparent">PATH-BTC<br/> Activate the liquidity of long-term held Bitcoin</p>
                <div className="mt-3 text-base tracking-tight leading-10 text-slate-400">

                  <span className='text-[#FF8D00]'>▶ </span>Proof of liquidity efficiency (POLE)<br />
                  <span className='text-[#FF8D00]'>▶ </span>Reward engine<br />
                  <span className='text-[#FF8D00]'>▶ </span>Governance engine<br />
                  <span className='text-[#FF8D00]'>▶ </span>Yield engine<br />

                </div>
                <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <a className="rounded-full bg-gray-500 py-2 px-4 text-sm font-semibold text-black focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 " href="">Gitbook</a>

                  <a className="rounded-full bg-gray-500 py-2 px-4 text-sm font-semibold text-black  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 " href={''}>Start from here</a>

                </div>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="object-cover"
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: any) => console.log(swiper)}
              >
                {
                  list.map((item: any, index: number) => {
                    return <SwiperSlide key={index}>
                      <img className=' cursor-pointer object-cover h-banner' style={{ width: '100%' }} src={item} />
                    </SwiperSlide>
                  })
                }

              </Swiper>
              {/* <img style={{ width: 530, height: 330 }} className="w-4/5 " src={DiffIcon} /> */}

            </div>
          </div>
        </div>
      </div>}
      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden"></div>
          <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block"></div>
          <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block"></div>
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
            <MenuUi />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <Outlet />
        </div>
      </div>
    </div>
  </>

}

export default App;
