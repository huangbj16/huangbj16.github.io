import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Aboutme from './Aboutme';
import Portfolio from './Portfolio';
import Project_Perception from './projects/Project_Perception';
import Project_Suit from './projects/Project_Suit';
import Project_Hand2hand from './projects/Project_Hand2hand';
import Project_SelfReport from './projects/Project_SelfReport';
import Project_AirTyping from './projects/Project_AirTyping';
import Project_3DTelepresence from './projects/Project_3DTelepresence';
import Ideas from './Ideas'
import Article_0_haptics from './articles/Article_0_haptics';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Init(){
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path='/project_perception' element={<Project_Perception />} />
        <Route path='/project_suit' element={<Project_Suit />} />
        <Route path='/project_hand2hand' element={<Project_Hand2hand />} />
        <Route path='/project_selfreport' element={<Project_SelfReport />} />
        <Route path='/project_airtyping' element={<Project_AirTyping />} />
        <Route path='/project_3dtelepresence' element={<Project_3DTelepresence />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/Article_0_haptics" element={<Article_0_haptics />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Init />
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
