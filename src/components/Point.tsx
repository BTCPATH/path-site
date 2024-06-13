import market1 from '../img/market1.png';

export default function Point() {

    return <>
        <article>
            <header className="mb-9">
                <p className="font-display text-sm font-medium text-[#FF8D00]">The Basics</p>
                <h1 className="font-display text-3xl font-bold mt-4 tracking-tight text-slate-900 dark:text-white">The point of BTC market?</h1>
                <p className="lead mt-10 text-lg text-[#FF8D00]">BTC's market capitalization is more than three times that of ETH, but its overall ecological market size is less than 1%.
                </p>
            </header>
            <div className='flex mt-4 justify-center items-center'>
                    <img className="w-4/5 " src={market1} />

                </div>

           
        </article>
    </>
}