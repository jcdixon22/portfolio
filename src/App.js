import logo from './logo.svg';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import TopNavbar from './components/TopNavbar'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage.js'
import EngineeringPage from './pages/EngineeringPage.js'

function App() {
  return (
    <div className='App-background'>
        <TopNavbar/>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="engineering" element={<EngineeringPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
