import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages/Home.css';
import Training from './pages/Training';
import Fuel from './pages/Fuel';
import Story from './pages/Story';
import Mindset from './pages/Mindset';
import Exercises from './pages/Exercises';
import Splits from './pages/Splits';
import './utils/exploreBtn.css';
import BroSplit1 from './pages/BroSplit1';
import PplSplit1 from './pages/PplSplit1';
import ArnoldSplit1 from './pages/ArnoldSplit1';
import ProteinPage from './fuelPages/ProteinPage';
import MuscleFoodsPage from './fuelPages/MuscleFoodsPage';
import FatLossFoods from './fuelPages/FatLossFoods';
import GetShredded from './fuelPages/GetShredded';
import TrainingPage from './pages/TrainingPage';






function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/fuel" element={<Fuel />} />
          <Route path="/story" element={<Story />} />
          <Route path="/mindset" element={<Mindset />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/splits" element={<Splits />}/>
          <Route path="/bro" element={<BroSplit1/>}/>
          <Route path="/ppl" element={<PplSplit1/>}/>
          <Route path="/arnold" element={<ArnoldSplit1/>}/>
          <Route path="/protein" element={<ProteinPage/>}/>
          <Route path="/musclefoods" element={<MuscleFoodsPage/>}/>
          <Route path="/fatlossfoods" element={<FatLossFoods/>}/>
          <Route path="/getshredded" element={<GetShredded/>}/>
          <Route path="/trainingPage" element={<TrainingPage/>}/>
          
          
          
          
        </Routes>
        
      </>
    </BrowserRouter>
    
  );
}

export default App;
