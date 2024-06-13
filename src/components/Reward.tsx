import reward1 from '../img/reward1.png'
import reward2 from '../img/reward2.png'
import reward3 from '../img/reward3.png'


export default function Reward() {


    return <>
        <article>
            <header className="mb-9">
                <p className="font-display text-sm font-medium text-[#FF8D00]">Proof of liquidity efficiency(POLE)</p>
                <h1 className="font-display text-3xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">
                    Calculate POLE's reward</h1>

            </header>

            <div className=" text-gray-400 text-base leading-7 mt-10 ">
                <div className="text-[#FF8D00] font-bold text-lg mt-2">Incentive liquidity value(LV) algorithm
                </div>
                <div className="mt-0">
                    <div className=" mt-5 text-gray-300">
                        If the liquidity is inherited from the previous settlement cycle and the current cycle = cycle(t)<br />
                        <div className='text-[#FF8D00] text-center mt-2'>Price(i) = Average Price(t-1) of the total Pool</div><br />
                        Else:<br />
                        <div className='text-[#FF8D00] text-center'>Price(i) = Input Price of liquidity(i)</div>
                    </div>

                </div>


                <img className="w-4/5 mx-auto my-5" src={reward1} />

                <div className=" mt-5 text-gray-300">
                    Then<br />
                    <div className='text-[#FF8D00] text-center'>LV[i,cycle(t)] =   A(i) * Price(i) * T(i);</div><br />
                    Remark:<br />
                    <div className='text-gray-500'>A(i): Amount of Each liquidity;</div>
                    <div className='text-gray-500'>T(i): Total add time of each liquidity in cycle;</div>
                    <div className='text-gray-500'>Price(i): The input price of each liquidity;</div>
                </div>




                <div className="text-[#FF8D00] font-bold text-lg mt-10">POLE Reward Engine</div>
                <div className="mt-0">
                    <p className="mt-5 text-gray-300">How to calculate the vToken reward of your liquidity(i)</p>
                    <img className="w-4/5 mx-auto my-5" src={reward2} />
                    <div className='text-gray-300'>Reward of vToken in one cycle(t):</div>
                    <div className='text-[#FF8D00] mt-2 text-center'>S(i) = Percentage of vtoken in this agent delegated by user(i)</div>
                    <div className='text-[#FF8D00] mt-2 text-center'>{"V(i,t) = Mint(cycle[t]) * [LV(i,t)*S(i)] / ∑\{LV[i,cycle(t)] * S(i)}"} (i=1,2,3,..) </div>
                </div>


            </div>



            <div className=" text-gray-400 text-base leading-7 mt-10 ">



                <div className="text-[#FF8D00] font-bold text-lg mt-10">Yield Engine
                </div>
                <div className="mt-0">
                    <p className="font-bold mt-5 text-gray-300">How to calculate the yield reward of your liquidity(i)</p>
                    <img className="w-4/5 text-center mx-auto my-5" src={reward3} />
                    <p className="font-bold mt-5 text-gray-300">● STEP 1: </p>
                    50% YPT will be exchange to the PBT and destroy
                    <br />
                    <p className="font-bold mt-5 text-gray-300">● STEP 2: </p>
                    Allocation yield to the agent by liquidity during each DeFi yield liquid cycle
                    <br />
                    <p className="font-bold mt-5 text-gray-300">● STEP 3: </p>
                    Agent reward YPT to "Stakers" by "LV algorithm"
                    <br />
                    
                </div>


            </div>

           

        </article>
    </>

}