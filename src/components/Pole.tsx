import PoleIcon from '../img/pole.png';


export default function Pole() {


    return <>
        <article>
            <header className="mb-9">
                <p className="font-display text-sm font-medium text-[#FF8D00]">Proof of liquidity efficiency(POLE)</p>
                <h1 className="font-display text-3xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">
                What is POLE?</h1>
                <p className="lead mt-10 text-lg text-[#FF8D00]">Delegate liquidity to agents will get passive yield. As infra L2, only low-risk pools of flow that are voted by the community can be allowed to be chosen by agents.


                </p>
            </header>

            <div className='flex mt-4 justify-center items-center'>
                    <img className="w-4/5 " src={PoleIcon} />

                </div>

        </article>
    </>

}