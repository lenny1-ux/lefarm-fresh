import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Soko from './pages/Soko'
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<Home />} > </Route>
          <Route path='/soko' element= {<Soko />} > </Route>
          <Route path='/cart' element= {<Cart />} > </Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;

