
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
export default function Holders() {



    return <>
        <article>
            <header className="mb-9">
                <p className="font-display text-sm font-medium text-[#FF8D00]">The Basics</p>
                <h1 className="font-display text-3xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">What should holders do?</h1>
            </header>
            <div className=" text-gray-400 text-base leading-7 mt-10 ">
                <div className="text-[#FF8D00] font-bold text-lg mt-2">Yield</div>
                <div className="mt-0">
                    <p className="font-bold mt-5 text-gray-300">STEP 1: Stake</p>
                    ● Choose agent to stake BTC and delegate liquidity.
                    <br />
                    ● LPT(Liquid Principal Token) and vToken returned.<br />
                    <p className="font-bold  mt-5 text-gray-300">STEP 2: Withdraw</p>
                    ● Destroy LPT to withdraw assets.
                    <br />
                    ● Unstake BTC and YPT(Liquid Yield Token) returned.<br />
                </div>


                <div className="text-[#FF8D00] font-bold text-lg mt-2">Governance</div>
                <div className="mt-0">
                    <p className="font-bold mt-5 text-gray-300">STEP 1: Delegate</p>
                    ● Delegate vToken to the agent and grant your governance rights.
                    <br />
                    <p className="font-bold  mt-5 text-gray-300">STEP 2: Cancel delegate</p>
                    ● Cancel delegating and unlock vToken.
                    <br />
                </div>


            </div>


        </article>
    </>
}