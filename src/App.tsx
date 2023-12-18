import React, { Fragment, useEffect, useState } from 'react';
import logo from './img/logo.png';
import DiffIcon from './img/diff.jpg';
import twitter from './img/twitter.png';
import blurCyan from './img/blur-cyan.webp';
import blurIndigo from './img/blur-indigo.webp';
import './App.css';
import { Outlet, useLocation } from "react-router";
import { slide as Menu } from 'react-burger-menu';
import MenuUi from './components/MenuUi';

function App() {

  const location = useLocation();
  const pathname = location.pathname;
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    console.log("pathname==", pathname)
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
          <button onClick={()=>{
            setIsOpen(true)
          }} type="button" className="relative" aria-label="Open navigation">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" className="h-6 w-6 stroke-slate-500">
              <path d="M4 7h16M4 12h16M4 17h16"></path>
            </svg></button>
          {/* <div style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div> */}
        </div>
        <div className="relative flex flex-grow basis-0 items-center">

          <a className='flex items-center' aria-label="Home page" href="/"><img className='w-9 h-9 mr-2' src={logo} /><span className="flex font-display text-2xl font-bold text-slate-900 dark:text-sky-100 md:text-3xl">PATH</span></a>
        </div>
        <div className="relative flex basis-0 justify-end gap-6 flex-grow">
          <a href='https://twitter.com/Satoseed_' target='_blank'>
            <img className='w-7 h-7 hover:scale-105' src={twitter} />
          </a>
        </div>
      </header>
      {pathname == "/" && <div className="overflow-hidden  dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
        <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-[88rem] lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
            <div className="relative z-10 md:text-center lg:text-left ">
              {/* <img alt="" src={blurCyan} width="530" height="530" decoding="async" data-nimg="1" className="absolute bottom-full right-full -mr-72 -mb-56 opacity-50 text-transparent" /> */}
              <div className="relative leading-10">
                <p className="inline bg-gradient-to-r from-amber-500 via-[#FF7841] to-amber-500  bg-clip-text font-display text-5xl tracking-tight text-transparent">PATH - Layer2 on BTC for web3</p>
                <p className="mt-3 text-2xl tracking-tight leading-10 text-slate-400">UTXO + Turing Complete Smart contract + PoW + Super Ecological Node +
                  Lightning network compatibility</p>
                <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                  <a className="rounded-full bg-amber-500 py-2 px-4 text-sm font-semibold text-black hover:bg-[#FF7841]focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-[#FF7841]" href="/#/community">How to Join</a>

                </div>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <img style={{width:530,height:330,background:"red"}} className="w-4/5 " src={DiffIcon} />
              {/* <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]"> */}

              {/* <svg aria-hidden="true" viewBox="0 0 668 1069" width="668" height="1069" fill="none" className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]">
                  <defs>
                    <clipPath id=":r1j:-clip-path">
                      <path fill="#fff" transform="rotate(-180 334 534.4)" d="M0 0h668v1068.8H0z"></path>
                    </clipPath>
                  </defs>
                  <g opacity=".4" clip-path="url(#:r1j:-clip-path)" stroke-width="4">
                    <path opacity=".3" d="M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474" stroke="#FF7841"></path>
                    <path d="M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588" stroke="#FF7841"></path>
                    <path d="M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175" stroke="#FF7841"></path>
                    <circle cx="83.5" cy="384.1" r="10.438" transform="rotate(-180 83.5 384.1)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="83.5" cy="200.399" r="10.438" transform="rotate(-180 83.5 200.399)" stroke="#FF7841"></circle>
                    <circle cx="83.5" cy="81.412" r="10.438" transform="rotate(-180 83.5 81.412)" stroke="#FF7841"></circle>
                    <circle cx="183.699" cy="375.75" r="10.438" transform="rotate(-180 183.699 375.75)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="183.699" cy="563.625" r="10.438" transform="rotate(-180 183.699 563.625)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="384.1" cy="651.3" r="10.438" transform="rotate(-180 384.1 651.3)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="484.301" cy="574.062" r="10.438" transform="rotate(-180 484.301 574.062)" fill="#0EA5E9" fill-opacity=".42" stroke="#0EA5E9"></circle>
                    <circle cx="384.1" cy="749.412" r="10.438" transform="rotate(-180 384.1 749.412)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="384.1" cy="1027.05" r="10.438" transform="rotate(-180 384.1 1027.05)" stroke="#FF7841"></circle>
                    <circle cx="283.9" cy="924.763" r="10.438" transform="rotate(-180 283.9 924.763)" stroke="#FF7841"></circle>
                    <circle cx="183.699" cy="870.487" r="10.438" transform="rotate(-180 183.699 870.487)" stroke="#FF7841"></circle>
                    <circle cx="283.9" cy="738.975" r="10.438" transform="rotate(-180 283.9 738.975)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="83.5" cy="695.138" r="10.438" transform="rotate(-180 83.5 695.138)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="83.5" cy="484.3" r="10.438" transform="rotate(-180 83.5 484.3)" fill="#0EA5E9" fill-opacity=".42" stroke="#0EA5E9"></circle>
                    <circle cx="484.301" cy="432.112" r="10.438" transform="rotate(-180 484.301 432.112)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="584.5" cy="432.112" r="10.438" transform="rotate(-180 584.5 432.112)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="584.5" cy="642.95" r="10.438" transform="rotate(-180 584.5 642.95)" fill="#1E293B" stroke="#FF7841"></circle>
                    <circle cx="484.301" cy="851.699" r="10.438" transform="rotate(-180 484.301 851.699)" stroke="#FF7841"></circle>
                    <circle cx="384.1" cy="256.763" r="10.438" transform="rotate(-180 384.1 256.763)" stroke="#FF7841"></circle>
                  </g>
                </svg> */}
              {/* </div> */}
              {/* <div className="block md:relative">
                <img alt="" src={blurCyan} width="530" height="530" decoding="async" data-nimg="1" className="absolute -top-64 -right-64 text-transparent" />
                <img alt="" src={blurIndigo} width="567" height="567" decoding="async" data-nimg="1" className="absolute -bottom-40 -right-44 text-transparent" />
                <div className="absolute inset-0 rounded-2xl ">

                </div>

              </div> */}
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
