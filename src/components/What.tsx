import DiffIcon from '../img/eco.jpg';

export default function What() {

    return <>
        <article>
            <header className="mb-9 space-y-1">
                <p className="font-display text-sm font-medium text-[#FF8D00]">The Basics</p>
                <h1 className="font-display text-3xl mt-4 tracking-tight text-slate-900 dark:text-white">What is PATH?</h1>
                <p className="lead text-lg text-[#FF8D00]">PATH PROTOCOL-Full chain ecological routing network.</p>
            </header>
            <div className=" text-gray-400 text-base leading-7 ">

                {/* <div className="mt-2">DePin/PoW+ Lightning network compatibility + Turing Complete Smart contract + Super Ecological Node + UTXO</div> */}

                <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">What problem to solve?</h1>
                <div className="text-[#FF8D00] text-lg mt-2">Cross-chain liquidity aggregation for all layers assets of the full-chains</div>
                <div className="mt-0">
                    <p className="font-bold text-gray-300">Solution - Decentralized cross-chain protocol</p>
                    ● Decentralized notary nodes<br />
                    ● Supports multi-signature verification<br />
                    ● VRF nodes selection<br />
                    ● Smart Contract liquidity guarantee<br />
                    ● Real-time scheduling fluidity<br />
                    ● Committee supervision mechanism<br />
                </div>


                <div className="text-[#FF8D00] text-lg mt-5">Infinitely scalable BTC Layer2 network</div>
                <div className="mt-0">
                    <div className="font-bold text-gray-300">Solution - Based on Lattice high availability network infrastructure</div>
                    ● Extreme sharding capability<br />
                    ● VRF PBFT + PoW<br />
                    ● Subchain customization<br />
                    ● Flexible mainnet transaction confirmation security level<br />
                    ● Maximize off-chain computing power<br />


                </div>

                <div className="text-[#FF8D00] text-lg mt-5">Supports customized and highly available eco-subchain
                </div>
                <div className="mt-2 font-bold text-gray-300">Solution - Support for Turing-complete EVM subchain
                </div>
                <div className='flex mt-4 items-center'>
                    <img className="w-4/5 " src={DiffIcon} />

                </div>
            </div>

            <h1 className="font-display text-3xl mt-10 tracking-tight text-slate-900 dark:text-white">Roadmap</h1>
        </article>
    </>
}