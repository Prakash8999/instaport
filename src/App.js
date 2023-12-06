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
import { Toaster } from 'react-hot-toast';
import { Context } from './context/Context';
import AddCity from './pages/AddCity';

function App() {
  return (
    <>
      <Router>
        <Context>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/test/create-order" element={<TestForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/layout" element={<Layouttest />} />
          <Route path="/" element={<Login />} />
          {/* <Route path="/" element={<Signup />} /> */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/riders" element={<Riders />} />
          <Route path="/riders/active" element={<ActiveRider />} />
          <Route path="/price-manipulation" element={<PriceManipulation />} />
          <Route path="/pending" element={<ApproveARider />} />
          {/* <Route path="/approve-rider/approved" element={<ApprovedRiderPage />} /> */}
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/coupons-and-offers" element={<CouponsAndOffer />} />
          <Route path="/add-city" element={<AddCity />} />
          {/* <Route path="/riders/availablerider" element={<AvailableRiderTable />} /> */}
        </Routes>
        <Toaster />
    
        </Context>
      </Router>
    </>
  );
}

export default App;
