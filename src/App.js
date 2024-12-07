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
import ActiveRider from './pages/RidersActive';
import { Toaster } from 'react-hot-toast';
import { Context } from './context/Context';
import AddCity from './pages/AddCity';
import { CouponsContext } from './context/Coupons';
import Order from './pages/Order';
import DashboardChart from './pages/DashboardChart';

function App() {
  return (
    <>

      <div className='block md:hidden text-2xl text-center text-yellow-500 my-auto mt-10'>
      For the complete view, use a bigger device to access the Dashboard.
      </div>
      <div className="hidden md:block">



        <Router >
          <Context>
            <CouponsContext>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/chart" element={<DashboardChart />} />
                <Route path="/layout" element={<Layouttest />} />
                <Route path="/" element={<Login />} />
                {/* <Route path="/" element={<Signup />} /> */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/order/:id" element={<Order />} />
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
            </CouponsContext>

          </Context>
        </Router>
      </div>
    </>
  );
}

export default App;
