import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { DeliverRiderDashBoard } from './components/pages/DeliveryRider/DeliverRiderDashBoard';
import { AdminDashBoard } from "./components/pages/AdminDashBoard";
import {AdminHome} from "./components/pages/Home";
import {DeliveryManagerDashBoard} from "./components/pages/DeliveryManager/DeliveryMangerDashBoard";
import {DeliveryManagerOrders} from "./components/pages/DeliveryManager/DeliveryManagerOrders";
import { DeliveryManagerProfile } from './components/pages/DeliveryManager/Profile';
import { ReservationManagerDashboard } from './components/pages/ReservationManager/ReservationManagerDashboard';
import { Employees } from './components/pages/EmployeeManager/Employees';
import { EmployeesProfile } from './components/pages/EmployeeManager/EmployeesProfile';


function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/delivery' element={<DeliverRiderDashBoard/>}></Route>
          <Route path="/admin" element={<AdminDashBoard />} />
          <Route exact path="/" element={<AdminHome />} />
          <Route exact path="/deliveryManager" element={<DeliveryManagerDashBoard />} />
          <Route exact path="/deliveryManager/orders" element={<DeliveryManagerOrders />} />
          <Route exact path="/deliveryManager/profile" element={<DeliveryManagerProfile />} />
          <Route exact path="/reservationManager" element={<ReservationManagerDashboard />} />
          <Route exact path="/employees" element={<Employees />} />
          <Route exact path="/employeesProfile" element={<EmployeesProfile />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;