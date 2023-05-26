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
import Home from './pages/Home';
import ApprovedRiderPage from './pages/ApprovedRiderPage';
import TestForm from './components/Test.jsx/TestForm';
import ActiveRider from './pages/RidersActive';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test/create-order" element={<TestForm />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/layout" element={<Layouttest />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/riders/available" element={<Riders />} />
          <Route path="/riders/active" element={<ActiveRider />} />
          <Route path="/price-manipulation" element={<PriceManipulation />} />
          <Route path="/approve-rider/pending" element={<ApproveARider />} />
          <Route path="/approve-rider/approved" element={<ApprovedRiderPage />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/coupons-and-offers" element={<CouponsAndOffer />} />
          {/* <Route path="/riders/availablerider" element={<AvailableRiderTable />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
