import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage.js'
import EngineeringPage from './pages/EngineeringPage.js'
import ProjectPage from './pages/ProjectPage.js'
import ContactPage from './pages/ContactPage.js';
import AthleticsPage from './pages/AthleticsPage.js';
import TravelPage from './pages/TravelPage.js';
import ModellingPage from './pages/ModellingPage.js';

function App() {
  return (
    <div className='App-background'>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/modeling" element={<ModellingPage />} />
              <Route path="engineering" element={<EngineeringPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/:projectId" element={<ProjectPage />} />
              <Route path="/sports" element={<AthleticsPage />} />
              <Route path="/travel" element={<TravelPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
