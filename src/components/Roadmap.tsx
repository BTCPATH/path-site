


export default function Roadmap() {

    return <>
        <article>
            <header className="mb-9 space-y-1">
                <h1 className="font-display text-3xl mt-4 tracking-tight text-slate-900 dark:text-white">
                    Roadmap</h1>
            </header>
            <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-600 lg:mt-4 lg:space-y-4 lg:border-slate-600">
                <li className="relative"><a className={`block  w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-[18px] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${true ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} >

                    <div className="border border-gray-800 p-2 rounded-md">
                        <div className="text-[#FF8D00]">Period 1 2024.5-2024.7</div>
                        <div className="mt-3 font-normal text-gray-400">
                            Run test network (based on BSC)<br />
                            ● Run a decentralized Martingale policy application<br />
                            ● Allocate rewards based on effective liquidity<br />
                            ● Community node construction<br />
                            ● Apply token pledge<br />
                        </div>
                    </div>
                </a></li>

                <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-[18px] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${true ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `}>
                    <div className="border border-gray-800 p-2 rounded-md">
                        <div className="text-[#FF8D00]">Period 2 2024.8</div>
                        <div className="mt-3 font-normal text-gray-400">
                            ● Mainnet Beta release<br />
                            ● Deploy the infrastructure to the Layer 2 network<br />
                            ● Complete POL Consensus and Beta bonus drops<br />
                        </div>
                    </div>
                </a></li>

                <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-[18px] before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${true ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `}>
                    <div className="border border-gray-800 p-2 rounded-md">
                        <div className="text-[#FF8D00]">Period 3 2024.10</div>
                        <div className="mt-3 font-normal text-gray-400">
                            ● Mainnet publishing<br />
                            ● PATH tokens are produced<br />
                            ● Launched the Token Ecosystem, supporting the exchange PBT and repurchase mechanism to take effect<br />
                            ● Launch infrastructure Dapps such as DEX/LEND<br />
                        </div>
                    </div>
                </a></li>
            </ul>
        </article>
    </>
}