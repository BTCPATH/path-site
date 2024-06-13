
import Agent1 from '../img/agent.png'
import Agent2 from '../img/agent2.png'


export default function Allocation() {


    return <>
        <article>
            <header className="mb-9">
                <p className="font-display text-sm font-medium text-[#FF8D00]">Proof of liquidity efficiency(POLE)</p>
                <h1 className="font-display text-3xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">
                    Liquidity allocation</h1>

            </header>

            <div className=" text-gray-400 text-base leading-7 mt-10 ">
                <div className="text-[#FF8D00] font-bold text-lg mt-2">Agents</div>
                <div className="mt-0">
                    <p className="font-bold mt-5 text-gray-300">Agent accepts the entrustment to allocate the pledged liquidity to the corresponding DeFi Pool, so that it can get the maximum benefit.
                    </p>

                </div>


                <div className="text-[#FF8D00] font-bold text-lg mt-10">Configuration Module</div>
                <div className="mt-0">
                    <p className="font-bold mt-5 text-gray-300">Steps:</p>
                    ● Choose the asset;
                    <br />
                    ● Fill in the ratio for different DeFi liquidity pools
                    <br />
                    <p className="font-bold mt-5 text-gray-300">Each amount of liquidity delegated to the agent is automatically allocated proportionally to each pool.

                    </p>
                </div>


            </div>

            <div className='flex mt-10 justify-center items-center'>
                <img className="w-4/5 " src={Agent1} />

            </div>

            <div className=" text-gray-400 text-base leading-7 mt-10 ">
                


                <div className="text-[#FF8D00] font-bold text-lg mt-10">Manual Module</div>
                <div className="mt-0">
                    <p className="font-bold mt-5 text-gray-300">Steps:</p>
                    ● Choose the asset;
                    <br />
                    ● Fill in the quantity for different DeFi liquidity pools
                    <br />
                    <p className="font-bold mt-5 text-gray-300">Sometimes the pool of automatic allocation is full, and the agent can configure it manually.


                    </p>
                </div>


            </div>

            <div className='flex mt-10 justify-center items-center'>
                <img className="w-4/5 " src={Agent2} />

            </div>

        </article>
    </>

}