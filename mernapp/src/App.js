import './App.css';
import Home from './screens/Home';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Login from './screens/Login';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup';
import { CardProvider } from './components/ContentReducer';
import MyOder from './screens/MyOder';
function App() {

  return (
    <CardProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/createuser' element={<Signup />} />
            <Route exact path='/myOder' element={<MyOder/>} />
          </Routes>
        </div>
      </Router>
    </CardProvider>


  );
}

export default App;
