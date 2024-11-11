import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
//import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Memories } from './pages/Memories';
import { Messages } from './pages/Messages';
import { Footer } from './components/Footer';

const PageWrapper = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <div className={`min-h-screen bg-gradient-to-br from-pink-100 via-red-100 to-pink-200 ${isHome ? 'relative' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
        {isHome && <div className="absolute bottom-8 left-0 right-0"><Footer /></div>}
        {!isHome && <Footer />}
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <PageWrapper />
    </BrowserRouter>
  );
}

export default App;