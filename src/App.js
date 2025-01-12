import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import CryptoPage from './pages/CryptoPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#EFF2F5]">
        <Navbar />
        <CryptoPage />
      </div>
    </Router>
  );
}

export default App;
