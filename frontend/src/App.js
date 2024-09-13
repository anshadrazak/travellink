import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Rides from './Rides';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Addpage from './Addpage';
import { Toaster, toast } from 'sonner';
import Details from './Details';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Search from './Search';
import Properties from './Properties';

function App() {
  return (
    <div className="App">
      <Router>
        <Toaster/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/add' element={<Addpage/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/properties' element={<Properties/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
