import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AppLayout from './components/layout/AppLayout';
import SearchPage from './pages/SearchPage';
import AboutPage from './pages/AboutPage';
function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
