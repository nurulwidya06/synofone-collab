import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// menghubungkan file css
import './css/style.css'
import './css/mobile.css'

// menghubungkan react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// import react-router-dom
import { BrowserRouter } from 'react-router-dom';

// import swiperjs
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
