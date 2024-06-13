import factorIcon from '../img/factor.png'


export default function Factor() {


    return <>
        <article>
            <header className="mb-9">
                <p className="font-display text-sm font-medium text-[#FF8D00]">Governance</p>
                <h1 className="font-display text-3xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">
                Governance DeFi factors</h1>

            </header>

            <div className=" text-gray-400 text-base leading-7 mt-10 ">
                <div className="mt-0">
                    <p className="font-bold mt-5 text-gray-300">Risk Degree

                    </p>

                    <p className="mt-0 text-gray-500">The DeFi application has A risk rating ascending from A to E

                    </p>

                    <p className="font-bold mt-5 text-gray-300">POLE Factor

                    </p>

                    <p className="mt-0 text-gray-500">The weighted value provided for the facility's liquidity allocation when calculating the POLE reward

                    </p>

                    <p className="font-bold mt-5 text-gray-300">Liquid limited

                    </p>

                    <p className="mt-0 text-gray-500">The maximum percentage of network-wide liquidity provided by the agent for this DeFi facility

                    </p>

                </div>

                <div className='flex mt-10 justify-center items-center'>
                    <img className="w-4/5 " src={factorIcon} />

                </div>





            </div>






        </article>

    </>

}