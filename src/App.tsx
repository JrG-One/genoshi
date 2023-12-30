// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Homepage from './components/page';
import PricingPage from './components/pricing/page';
import ProfilePage from './components/profile/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Homepage /></Layout>} />
        <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
