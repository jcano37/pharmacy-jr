import React, { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Services from './components/layout/Services';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import './styles/variables.css';

const Location = lazy(() => import('./components/layout/Location'));

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Suspense fallback={<div style={{ height: '450px', backgroundColor: '#f3f4f6' }} />}>
          <Location />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
