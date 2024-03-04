

import { BrowserRouter,HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import What from './components/What';
import Community  from './components/Community';
import Pow from './components/Pow';
import Ecological from './components/Ecological';
import Holders from './components/Holders';
import Labs from './components/Labs';
import Roadmap from './components/Roadmap';

export default function Router() {

    return <HashRouter>

        <Routes>
            <Route path='/' element={<App />} >
                <Route path="/" element={<What />} />
                <Route path="start" element={<What />} />
                <Route path="roadmap" element={<Roadmap />} />
                <Route path="community" element={<Community />} />
                <Route path="pow" element={<Pow />} />
                <Route path="ecological" element={<Ecological />} />
                <Route path="holders" element={<Holders />} />
                <Route path="start" element={<What />} />
                <Route path="labs" element={<Labs />} />
            </Route>


        </Routes>
    </HashRouter>


}