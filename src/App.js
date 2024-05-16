import logo from './asset/img/logo.svg';
import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from './component/Header';
import Footer from './component/Footer';
import SideBar  from './component/SideBar';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage'
import MVTITestPage from './pages/MVTITestPage';
import { Switch } from '@material-ui/core';



function App() {
   return (
      <div>
         <Header />
         <SideBar />
         <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/DetailPage' element={<DetailPage />}/>
            <Route path='/MyPage' element={<MyPage />}/>
            <Route path='/MVTITestPage' element={<MVTITestPage />}/>
         </Routes>
         <Footer/>
      </div>
   );
 }
 export default App;