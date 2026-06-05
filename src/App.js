import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Getproductss from './components/Getproductss';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Notfound from './components/Notfound';

function App() {
  return (
   <Router>
     <div className="App">
      <header className="App-header">        
        <h1>Sokogarden Buy & Sell Online</h1>       
      </header>

      <Routes>
        <Route path='/' element={<Getproductss/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/*'element={<Notfound/>}/>
        

      </Routes>
    </div>
   </Router>
  );
}

export default App;
