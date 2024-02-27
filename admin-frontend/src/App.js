import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { DeliverRiderDashBoard } from './components/pages/DeliveryRider/DeliverRiderDashBoard';
import { AdminDashBoard } from "./components/pages/AdminDashBoard";
import {AdminHome} from "./components/pages/Home";
import {DeliveryManagerDashBoard} from "./components/pages/DeliveryManager/DeliveryMangerDashBoard";
import {DeliveryManagerOrders} from "./components/pages/DeliveryManager/DeliveryManagerOrders";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
