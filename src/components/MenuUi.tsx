import { useLocation } from "react-router";



export default function MenuUi() {

    const location = useLocation();
    const pathname = location.pathname;

    return <>

        <nav className="text-base lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16 dark">
            <ul role="list" className="space-y-9  ml-1">
                <li><h2 className="font-display  text-xs font-medium text-slate-900 dark:text-white">The Basics</h2>
                    <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname == "/" ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/">The point of BTC market</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("what") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/what">What is PATH-BTC</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full  ${pathname.indexOf("holders") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/holders">What should holders do</a></li>

                    </ul></li>

                    <li><h2 className="font-display text-xs font-medium text-slate-900 dark:text-white">Proof of liquidity efficiency(POLE)</h2>
                    <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("pole") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/pole">What is POLE</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("allocation") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/allocation">Liquidity allocation</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("reward") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/reward">Calculate POLE's reward</a></li>
                    </ul></li>

                    <li><h2 className="font-display text-xs font-medium text-slate-900 dark:text-white">Governance</h2>
                    <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("process") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/process">Basic process</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("liquidity") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/liquidity">Liquidity governance</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("factor") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/factor">Governance DeFi factors</a></li>
                    </ul></li>

                <li><h2 className="font-display font-medium text-slate-900 dark:text-white">Tokens</h2>
                    <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("path") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/path">PATH</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("pbt") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/pbt">PBT</a></li>
                       
                    </ul></li>

                    <li><h2 className="font-display font-medium text-slate-900 dark:text-white">Roadmap</h2>
                    <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("roadmap") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/roadmap">Roadmap</a></li>
                        
                       
                    </ul></li>

                
                <li><h2 className="font-display  text-xs font-medium text-slate-900 dark:text-white">Our Partners</h2>
                    <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("partner") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/partner">Ecological Partners</a></li>
                        {/* <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("labs") != -1 ? 'text-[#FF8D00] font-bold before:bg-[#FF8D00] hover:text-[#FF8D00] dark:hover:text-[#FF8D00] dark:before:bg-[#FF8D00]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/labs">Organization and Labs</a></li> */}
                    </ul></li>

            </ul>
        </nav>
    </>

}