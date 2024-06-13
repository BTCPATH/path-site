import ProcessIcon from '../img/process.png'

export default function Process(){


    return <>
     <article>
            <header className="mb-9">
                <p className="font-display text-sm font-medium text-[#FF8D00]">Governance</p>
                <h1 className="font-display text-3xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">
                Basic process</h1>

            </header>

            <div className=" text-gray-400 text-base leading-7 mt-10 ">
                <div className="mt-0">
                    <p className="font-bold mt-5 text-gray-300">The liquidity application proposal will enter a special governance process
                    </p>

                </div>

                <div className='flex mt-10 justify-center items-center'>
                <img className="w-4/5" src={ProcessIcon} />

            </div>



                <div className="text-[#FF8D00] font-bold text-lg mt-10">Apply for liquidity</div>
                <div className="mt-0">
                   
                    <p className="font-bold mt-5 text-gray-300">The proposer needs to complete the liquidity channel API for agents(Define liquidity interface specifications and asset types). Then fill in according to the liquidity application proposal template. <br/><br/>
                    The type of DeFi will be constrained by the corresponding template (such as maximum liquidity distribution percentage).

                    </p>
                </div>


            </div>

           
            <div className=" text-gray-400 text-base leading-7 mt-10 ">
                


                <div className="text-[#FF8D00] font-bold text-lg mt-10">Open agent’s liquidity channels</div>
                <div className="mt-0">
                    
                    <p className="font-bold mt-5 text-gray-300">When this step is complete, the agent can allocate liquidity to the DeFi pool.


                    </p>
                </div>


            </div>

          

        </article>
    </>
}