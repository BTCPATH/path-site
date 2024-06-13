

import { BrowserRouter,HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import What from './components/What';
import Community  from './components/Community';
import Pow from './components/Pow';
import Ecological from './components/Ecological';
import Holders from './components/Holders';
import Labs from './components/Labs';
import Roadmap from './components/Roadmap';
import Point from './components/Point';
import Partner from './components/Partner';
import Allocation from './components/Allocation';
import Pole from './components/Pole';
import Reward from './components/Reward';
import Process from './components/Process';
import Liquidity from './components/Liquidity';
import Factor from './components/Factor';
import Path from './components/Path';
import PBT from './components/PBT';

export default function Router() {

    return <HashRouter>

        <Routes>
            <Route path='/' element={<App />} >
                <Route path="/" element={<Point />} />
                <Route path="what" element={<What />} />
                <Route path="roadmap" element={<Roadmap />} />
                <Route path="community" element={<Community />} />
                <Route path="pow" element={<Pow />} />
                <Route path="ecological" element={<Ecological />} />
                <Route path="partner" element={<Partner />} />
                <Route path="holders" element={<Holders />} />
                <Route path="labs" element={<Labs />} />
                <Route path="pole" element={<Pole />} />
                <Route path="allocation" element={<Allocation />} />
                <Route path="reward" element={<Reward />} />
                <Route path="process" element={<Process />} />
                <Route path="liquidity" element={<Liquidity />} />
                <Route path="factor" element={<Factor />} />
                <Route path="path" element={<Path />} />
                <Route path="pbt" element={<PBT />} />
            </Route>


        </Routes>
    </HashRouter>


}