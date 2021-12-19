// import { Route, Routes } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={FinalHome}/>
          <Route path="/login" component={FinalLogin}/>
          <Route path="/register" component={FinalRegister}/>
          {/* <Route path="/profile" component={<FinalProfile/>}/>
          <Route path="product/cars" component={<Booking1/>}/>
          <Route path="product/appliances" component={<Booking2/>}/>
          <Route path="product/fashion" component={<Booking3/>}/>
          <Route path="product/raw" component={<Booking4/>}/>
          <Route path="/product/appliances/:model" exact component={<FinalQuery cat="appliances"/>}/>
          <Route path="/product/fashion/:model" exact component={<FinalQuery cat="fashion"/>}/>
          <Route path="/product/cars/:model" exact component={<FinalQuery cat="cars"/>}/>
          <Route path="/product/raw/:model" exact component={<FinalQuery cat="raw"/>}/>
          <Route path="/vendor" component={<FinalVendor/>}/>
          <Route path="/userdash" component={<FinalUserDashBoard/>}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
