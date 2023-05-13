import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Orders from './pages/Orders';
import Riders from './pages/Riders';
import PriceManipulation from './pages/PriceManipulation';
import ApproveARider from './pages/ApproveARider';
import Transaction from './pages/Transaction';
import CouponsAndOffer from './pages/CouponsAndOffer';
import Layouttest from './components/Layouttest';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/layout" element={<Layouttest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/riders" element={<Riders />} />
          <Route path="/pricemanipulation" element={<PriceManipulation />} />
          <Route path="/approvearider" element={<ApproveARider />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/couponsandoffer" element={<CouponsAndOffer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
