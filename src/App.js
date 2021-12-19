import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import FinalLogin from './Pages/FinalLogin';
import FinalRegister from './Pages/FinalRegister';
import FinalHome from './Pages/FinalHome'
import FinalProfile from './Pages/FinalProfile';
import FinalVendor from './Pages/FinalVendor';
import FinalUserDashBoard from './Pages/FinalUserDashBoard';
import Booking1 from './Components/Booking1';
import Booking2 from './Components/Booking2';
import Booking3 from './Components/Booking3';
import Booking4 from './Components/Booking4';
import FinalQuery from './Pages/FinalQuery';

function App() {
  return (
    <Router>
      <div className='w-screen h-screen'>
        <Routes>
          <Route exact path="/" element={<FinalHome/>}/>
          <Route path="/login" element={<FinalLogin/>}/>
          <Route path="/register" element={<FinalRegister/>}/>
          <Route path="/profile" element={<FinalProfile/>}/>
          <Route path="product/cars" element={<Booking1/>}/>
          <Route path="product/appliances" element={<Booking2/>}/>
          <Route path="product/fashion" element={<Booking3/>}/>
          <Route path="product/raw" element={<Booking4/>}/>
          <Route path="/product/appliances/:model" exact element={<FinalQuery cat="appliances"/>}/>
          <Route path="/product/fashion/:model" exact element={<FinalQuery cat="fashion"/>}/>
          <Route path="/product/cars/:model" exact element={<FinalQuery cat="cars"/>}/>
          <Route path="/product/raw/:model" exact element={<FinalQuery cat="raw"/>}/>
          <Route path="/vendor" element={<FinalVendor/>}/>
          <Route path="/userdash" element={<FinalUserDashBoard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
