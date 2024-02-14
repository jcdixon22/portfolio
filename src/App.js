import logo from './logo.svg';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import TopNavbar from './components/TopNavbar'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage.js'
import EngineeringPage from './pages/EngineeringPage.js'
import ProjectPage from './pages/ProjectPage.js'
import PortfolioPage from './pages/PortfolioPage.js';
import CeloxisPage  from './pages/CeloxisPage.js';
import LabjackPage from './pages/LabjackPage.js';
import BbagPage from './pages/BbagPage.js';
import ArmPage from './pages/ArmPage.js';
import PumpPage from './pages/PumpPage.js';
import SarrPage from './pages/SarrPage.js';
import TissuePage from './pages/TissuePage.js';
import BluetoothPage from './pages/BluetoothPage.js';
import ShutterPage from './pages/ShutterPage.js';
import BikePage from './pages/BikePage.js';
import ContactPage from './pages/ContactPage.js';
import AthleticsPage from './pages/AthleticsPage.js';
import TravelPage from './pages/TravelPage.js';


function App() {
  return (
    <div className='App-background'>
        <TopNavbar/>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="engineering" element={<EngineeringPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/datatransfer" element={<CeloxisPage />} />
              <Route path="/daq" element={<LabjackPage />} />
              <Route path="/bbag" element={<BbagPage />} />
              <Route path="/arm" element={<ArmPage />} />
              <Route path="/pump" element={<PumpPage />} />
              <Route path="/sarr" element={<SarrPage />} />
              <Route path="/tissue" element={<TissuePage />} />
              <Route path="/bluetooth" element={<BluetoothPage />} />
              <Route path="/shutter" element={<ShutterPage />} />
              <Route path="/bike" element={<BikePage />} />
              <Route path="/athletics" element={<AthleticsPage />} />
              <Route path="/travel" element={<TravelPage />} />

          </Routes>
        </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
