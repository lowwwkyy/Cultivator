import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import InvestorPage from './pages/InvestorPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/investor" element={<InvestorPage />} />
      </Routes>
    </BrowserRouter>
  );
}