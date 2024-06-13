
import logo from '../img/logo.png';
import iGS from '../img/igs.png';
import IC1101 from '../img/IC1101.png';
import IERC_Protocol from '../img/IERC_Protocol.png';
import noahswap from '../img/noahswap.png';
import giveaway from '../img/giveaway.png';
import BiHelix from '../img/BiHelix.png';
import bitsat from '../img/bitsat.png';
import SOD from '../img/sod.png';
import Merlin from '../img/Merlin.png';
import Bitmap from '../img/Bitmap.png';
import Tristan from '../img/Tristan.png';
import ARC20 from '../img/ARC-20.png';
import BSquared from '../img/BSquared.png';
import Icon1 from '../img/1.png';
export default function Partner() {



    return <>
        <article>
            <header className="mb-9 space-y-1">
                <p className="font-display text-lg font-bold text-[#FF8D00]">Ecological Partners</p>

            </header>
            <div className=" text-gray-400 text-base leading-7 ">


                <div className="grid gap-4 grid-cols-2 md:grid-cols-4 text-sm  font-bold  w-full text-gray-300 ">
                    <a href='https://igames.world' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md w-full text-center flex flex-col items-center justify-center' >

                        <img className=' ' src={iGS} />

                    </a>
                    <a href='https://space.ic1101.world' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className=' ' src={IC1101} />
                        {/* IC1101 */}
                    </a>
                    <a href='https://www.ierc20.com' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className=' ' src={IERC_Protocol} />
                        {/* IERC_Protocol */}
                    </a>
                    <a href='https://noahswap.io/home' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className='' src={noahswap} />

                    </a>
                    <a href='https://giveaway.com' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className=' ' src={giveaway} /></a>
                    <a href='https://www.bihelix.net' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className=' ' src={BiHelix} /></a>
                    <a href='https://bitsat.ai' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className='' src={bitsat} /></a>
                    <div  className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className=' ' src={SOD} /></div>
                    <a href='https://merlinchain.io' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className=' ' src={Merlin} /></a>
                    <a href='https://bitmap.tech' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className='' src={Bitmap} /></a>
                    <a href='https://tristan.land' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className=' ' src={Tristan} /></a>
                    <a href='https://arc20.cc' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A] cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className=' ' src={ARC20} /></a>
                    <a href='https://www.bsquared.network' target='_blank' className='hover:bg-[#333333] bg-[#1A1A1A]  cursor-pointer rounded-md  w-full text-center flex flex-col items-center justify-center' >
                        <img className='' src={BSquared} /></a>

                </div>


            </div >
        </article >
    </>
}