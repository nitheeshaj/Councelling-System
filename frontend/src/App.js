import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Counsellor from './components/Counsellor';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import Hello from './components/Hello';
import FetchRegistrations from './components/FetchRegistrations';


function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/Signup" element={<Signup/>} exact/>
        <Route path="/Signin" element={<Signin/>} exact/>
        <Route path="/Counsellor" element={<Counsellor/>} exact/>
        <Route path="/Visitor" element={<Visitor/>} exact/>
        <Route path="/Appointment" element={<Appointment/>} exact/>
        <Route path="/Hello" element={<Hello/>} exact/>
        <Route path="/fetch" element={<FetchRegistrations/>} exact/>
      </Routes>
    </main>
  </React.Fragment>
}

export default App;