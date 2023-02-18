import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from "./pages/Login"
import Home from "./pages/Home"
import Box from "./Box"

function App() {
  return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Box" element={<Box />} />
    <Route path="/Home" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
