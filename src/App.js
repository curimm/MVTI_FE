//import logo from './asset/img/logo.svg';
import './App.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import SideBar  from './component/SideBar';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage'
import MVTITestPage from './pages/MVTITestPage';
import MVTIResultPage from'./pages/MVTIResultPage';


function App() {
   return (
     <BrowserRouter>
       <div>
         <Header />
         <SideBar />
         <Routes>
           <Route path='/' element={<HomePage />} />
           <Route path='/DetailPage' element={<DetailPage />} />
           <Route path='/MyPage' element={<MyPage />} />
           <Route path='/MVTITestPage' element={<MVTITestPage />} />
         </Routes>
         <Footer />
       </div>
     </BrowserRouter>
   );
 }
 
 const rootElement = document.getElementById('root');
 const root = createRoot(rootElement);
 root.render(<App />);
 
 export default App;