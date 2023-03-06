import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Contacts from './components/Post';
import NewContactBtn from './components/NewContactBtn';
import NewContact from './components/NewContact';
import EditContact from './components/EditContact';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kit.fontawesome.com/b9a8cc2a2e.js';
    script.crossOrigin = 'anonymous';
    script.async = true;
    document.head.appendChild(script);
    document.title = "Contact APP";
  }, []);

  return (
    <div>
      <header><a href='./'><h1>Contact APP</h1></a></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Contacts /><NewContactBtn /></>} />
          <Route path="/new" element={<NewContact />} />
          <Route path="/:id" element={<EditContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
