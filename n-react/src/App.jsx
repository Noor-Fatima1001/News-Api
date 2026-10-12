import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsLetter from './Components/NewsLetter';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ProtectedPage from './Components/ProtectedPage';

const Layout = () => {
  return (
    <ProtectedPage>
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <Header />
      <Navbar />
      <News />
      <NewsLetter /> 
      <Footer />
    </div>
    </ProtectedPage>
  );
};

const App = () => (
  <Router>
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      
      <Route path="*" element={<Layout />} />
    </Routes>
  </Router>
);

export default App;
