
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from './components/Products';
import Product from './components/Product';
import { Provider } from "react-redux";
import store from "./redux/store"
import Cart from './components/Cart';
function App() {
  return (
    <>
    <BrowserRouter>
    <Provider store={store}>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/cart' element={<Cart/>}/>

    <Route path='/products/:id' element={<Product/>}/>

    </Routes>
    </Provider >
    </BrowserRouter>
    </>
  );
}

export default App;
