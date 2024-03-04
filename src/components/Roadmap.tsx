


export default function Roadmap() {

    return <>
        <article>
            <header className="mb-9 space-y-1">
                <p className="font-display text-sm font-medium text-[#FF8D00]">The Basics</p>
                <h1 className="font-display text-3xl mt-4 tracking-tight text-slate-900 dark:text-white">
                    Roadmap</h1>
            </header>
            <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-600 lg:mt-4 lg:space-y-4 lg:border-slate-600">
                <li className="relative"><a className={`block  w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-[18px] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${true ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} >

                <div className="border border-gray-800 p-2 rounded-md">
                        <div className="text-[#FF8D00]">Mar. 2024: AlphaNet Launch</div>
                        <div className="mt-3 font-normal text-gray-400">
                            Support Bitcoin Chain, Ethereum, BSC asset cross-chain and pledge
                            Release the first whitelist list of assets that can be airdropped.
                        </div>
                    </div>
                </a></li>

                <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-[18px] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${true ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `}>
                <div className="border border-gray-800 p-2 rounded-md">
                    <div className="text-[#FF8D00]">Apr.2024: BetaNet Launch</div>
                    <div className="mt-3 font-normal text-gray-400">
                        Open the PATH Bridge Node to set up and start cross-chain verification
                        Support more major blockchain assets to pledge across chains
                        ARC-20 cross-chain and pledge support
                        Release a new whitelist of assets that can be airdropped.
                    </div>
                    </div>
                </a></li>

                <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-[18px] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${true ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `}>
                <div className="border border-gray-800 p-2 rounded-md">
                    <div className="text-[#FF8D00]">June,2024: MainNet Launch</div>
                    <div className="mt-3 font-normal text-gray-400">
                        Airdropped points will be exchanged for mainnet tokens
                        Activate cross-chain verification rewards
                        The PATH Node (BTC Layer2) protocol is released, supporting customized BTC Layer2 generation.
                    </div>
                    </div>
                </a></li>
            </ul>
        </article>
    </>
}