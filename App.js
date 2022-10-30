import Main from './main';
import './App.css';
import Signin from './signin';
import {BrowserRouter as Router,Route,Routes,Redirect,Switch} from 'react-router-dom';

function App() {
  return ( 
  <Router>
    <Routes>
      <Route  path='/' exact element={< Main/>}></Route>
      <Route  path="/Signin" element={<Signin/>}></Route>
      <Route  path='/Signin/#' exact element={< Main/>}></Route>

          
    </Routes>
  </Router>
  );
}

export default App;
