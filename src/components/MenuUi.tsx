import { useLocation } from "react-router";



export default function MenuUi() {

    const location = useLocation();
    const pathname = location.pathname;
    
    return <>

        <nav className="text-base lg:text-sm w-64 pr-8 xl:w-72 xl:pr-16 dark">
            <ul role="list" className="space-y-9  ml-1">
                <li><h2 className="font-display font-medium text-slate-900 dark:text-white">The Basics</h2>
                    <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname == "/" ? 'text-[#FF7841] font-bold before:bg-[#FF7841] hover:text-[#FF7841] dark:hover:text-[#FF7841] dark:before:bg-[#FF7841]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/">What is PATH?</a></li>
                        {/* <li className="relative"><a className="block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300" href="/#/start">Get started</a></li> */}
                    </ul></li>

                <li><h2 className="font-display font-medium text-slate-900 dark:text-white">How to Join</h2>
                    <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("community") != -1 ? 'text-[#FF7841] font-bold before:bg-[#FF7841] hover:text-[#FF7841] dark:hover:text-[#FF7841] dark:before:bg-[#FF7841]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/community">Community</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("pow") != -1 ? 'text-[#FF7841] font-bold before:bg-[#FF7841] hover:text-[#FF7841] dark:hover:text-[#FF7841] dark:before:bg-[#FF7841]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/pow">PoW miners</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("ecological") != -1 ? 'text-[#FF7841] font-bold before:bg-[#FF7841] hover:text-[#FF7841] dark:hover:text-[#FF7841] dark:before:bg-[#FF7841]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/ecological">Ecological node</a></li>
                    </ul></li>
                <li><h2 className="font-display font-medium text-slate-900 dark:text-white">Others welcome partners</h2>
                    <ul role="list" className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200">
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("holders") != -1 ? 'text-[#FF7841] font-bold before:bg-[#FF7841] hover:text-[#FF7841] dark:hover:text-[#FF7841] dark:before:bg-[#FF7841]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/holders">Inscription Holders</a></li>
                        <li className="relative"><a className={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full   ${pathname.indexOf("labs") != -1 ? 'text-[#FF7841] font-bold before:bg-[#FF7841] hover:text-[#FF7841] dark:hover:text-[#FF7841] dark:before:bg-[#FF7841]' : 'text-slate-500 before:bg-slate-300 hover:text-slate-600 dark:hover:text-slate-300 before:hidden dark:before:bg-slate-700'} hover:before:block  `} href="/#/labs">Organization and Labs</a></li>
                    </ul></li>

            </ul>
        </nav>
    </>

}