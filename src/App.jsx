// import Routes & Route dari react-router-dom
import { Routes, Route } from 'react-router-dom';

// import pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DetailPage from './pages/DetailPage';
import DaftarPage from './pages/DaftarPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import StatusPage from './pages/StatusPage';
import FinishPage from './pages/FinishPage';

function App() {

  return (
    <Routes>
      <Route path='/' Component={LandingPage} />
      <Route path='/login' Component={LoginPage} />
      <Route path='/detail' Component={DetailPage} />
      <Route path='/daftar' Component={DaftarPage} />
      <Route path='/cart' Component={CartPage} />
      <Route path='/order' Component={OrderPage} />
      <Route path='/status' Component={StatusPage} />
      <Route path='/finish' Component={FinishPage} />
    </Routes>
  )
}

export default App
