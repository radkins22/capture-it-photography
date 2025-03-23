import './App.css';
// import Header from './Component/Header/header';
// import NavRouter from './Component/Nav/navRouter';



import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MyNav from './Component/Nav/nav';
import Main from './Component/Home/home';
import Gallery from "./Component/Gallery/gallery";
import Appt from './Component/Schedule/appt';
import Contact from './Component/Contact/contact';
import { Shop } from './Component/PhotoSale/Shop';
import { Cart } from './Component/PhotoSale/Cart/Cart';
import { ShopContextProvider } from './Component/PhotoSale/Context/ShopContext';
import { Checkout } from './Component/PhotoSale/Checkout/checkout';
import { FinalCheckout } from './Component/PhotoSale/Checkout/finalCheckout';
import { Subscribe } from './Component/Subscribe/subscribe';


function App() {


  return (
    <div className="App">
      <ShopContextProvider >
        <Router>
          <MyNav />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/appt" element={<Appt />} />
            <Route path="/photoSale" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/finalCheckout" element={<FinalCheckout />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>

  );
}

export default App;
