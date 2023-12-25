

export default function What() {

    return <>
        <article>
            <header className="mb-9 space-y-1">
                <p className="font-display text-sm font-medium text-[#FF7841]">The Basics</p>
                <h1 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white">What is PATH?</h1>
            </header>
            <div className=" text-gray-400 text-base leading-7 ">
                <p className="lead text-2xl text-[#FF7841]">PATH - Layer2 on BTC for web3 </p>
                <div className="mt-2">DePin/PoW+ Lightning network compatibility + Turing Complete Smart contract + Super Ecological Node + UTXO</div>


                <div className="text-[#FF7841] text-lg mt-10">UTXO + Turing-complete smart contract, compatible with EVM</div>
                <div className="mt-2">PATH is an extended chain based on BTC Layer2, a UTXO model based on the PoW consensus mechanism. <br />
                    On the basis of
                    the high concurrency advantages of the UTXO model, it completely solves the expansion problem, supports the core assets to share
                    the consensus security of the BTC network, supports the Turing complete smart contract, is fully compatible with the mainstream EVM
                    system, supports the mainstream DApp one-click migration deployment, and aims to become the cornerstone of the BTC network
                    Web3 ecosystem.</div>


                <div className="text-[#FF7841] text-lg mt-10">PoW Consensus + Expansion without limit</div>
                <div className="mt-2">PATH also uses POW consensus to ensure sufficient decentralization even in the BTC Layer2 layer, but at the same time, it
                    independently develops a software-based MVC model, supports zero transaction confirmation mechanism, makes full use of off-chain
                    computing power and super node VRF random algorithm, and ensures that each miner can handle massive data, in fact, can achieve
                    unlimited expansion. Achieve or even exceed Web2's computing performance in a decentralized manner.</div>

                <div className="text-[#FF7841] text-lg mt-10">Lightning network compatible
                </div>
                <div className="mt-2">PATH is an extended chain based on BTC Layer2, a UTXO model based on the PoW consensus mechanism. <br />
                    PATH supports the RELAY+CLIENT mode. The Client publishes information and the Relay transmits information. Therefore, the
                    release and transmission of information are resistant to censorship. Any user can create public and private keys, regardless of third-party server restrictions.
                    PATH is also compatible with Lightning network payments.</div>
            </div>
        </article>
    </>
}