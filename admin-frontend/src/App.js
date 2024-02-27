import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { DeliverRiderDashBoard } from './components/pages/DeliveryRider/DeliverRiderDashBoard';
import { AdminDashBoard } from "./components/pages/AdminDashBoard";
import {AdminHome} from "./components/pages/Home";

function App() {


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/delivery' element={<DeliverRiderDashBoard/>}></Route>
          <Route path="/admin" element={<AdminDashBoard />} />
          <Route exact path="/adminhome" element={<AdminHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
