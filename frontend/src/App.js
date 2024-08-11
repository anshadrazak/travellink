import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Rides from './Rides';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Addpage from './Addpage';
import { Toaster, toast } from 'sonner';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Toaster/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/add' element={<Addpage/>}/>
          <Route path='/details/:id' element={<Details/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
