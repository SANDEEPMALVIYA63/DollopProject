import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Authenticate from './screens/Authenticate';
import LoginUser from './screens/LoginUser';
import ForgerPassword from './screens/ForgerPassword';
import Otp from './screens/Otp';
import NewPassword from './screens/NewPassword';
import Home from './screens/Home';
import ShowUser from './screens/ShowUser';
import EmailFunctionality from './screens/EmailFunctionality';
import Coordinator from './screens/Coordinator';
import Deshboard from './screens/Deshboard';
import Compains from './screens/Compains';
function App() {
  return (
    <div className="App">

     <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Login/>}></Route> */}
        <Route path="/Authenticate" element={<Authenticate/>}></Route>
        <Route path="/" element={<LoginUser/>}></Route>
        <Route path="/forgot_Password" element={<ForgerPassword/>}></Route>
        <Route path="/Verify_Otp" element={<Otp/>}></Route>
        <Route path="/new_Password" element={<NewPassword/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/EmailFunctionality" element={<EmailFunctionality/>}></Route>
        <Route path="/showUser" element={<ShowUser/>}></Route>
        <Route path="/coordinator" element={<Coordinator/>}></Route>
        <Route path="/Deshboard" element={<Deshboard/>}></Route>
        <Route path="/Compains" element={<Compains/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
