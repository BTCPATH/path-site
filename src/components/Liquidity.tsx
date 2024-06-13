import liquidityIcon from '../img/liquidity.png'

export default function Liquidity() {


    return <>
        <article>
            <header className="mb-9">
                <p className="font-display text-sm font-medium text-[#FF8D00]">Governance</p>
                <h1 className="font-display text-3xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">
                Liquidity governance</h1>

            </header>

            <div className=" text-gray-400 text-base leading-7 mt-10 ">
                <div className="mt-0">
                    <p className="font-bold mt-5 text-gray-300">With the process of Proof of liquidity efficiency, the degree of decentralized governance of the entire PATH-BTC network will gradually improve.<br/><br/>
                    The amount of liquidity available depends on how many vTokens are supported.
                    </p>

                </div>

                <div className='flex mt-10 justify-center items-center'>
                    <img className="w-4/5 " src={liquidityIcon} />

                </div>



                

            </div>


        



        </article>
    </>

}