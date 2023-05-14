import './App.css';
import Products from './features/products/Products';
import { BasketList } from './features/orders/BasketList';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './features/navBar/NavBar';
import Register from './features/login/Register';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './features/login/Login';
import ProductSlice from './features/products/ProductSlice';
import { AddProduct } from './features/products/AddProduct';
import {PayOrder} from './features/orders/payOrder';
import { FinishOrder } from './features/orders/finishOrder';
import NavBarDirect from './features/navBar/navBarDirect';
import  Remove from'./features/products/remove';
import { ThankYou } from './features/orders/ThankYou ';
import TimeOutBasket from './features/products/TimeOutBasket';

function App() {
  let isShow = useSelector(store => store.order.showMiniBasket)
  let u=useSelector(state=>state.users.user);
  let directPassword=useSelector(state=>state.users.direcPass);
return (
  <BrowserRouter>
    <div className="App"> 
      {u!=null&&u.pass==directPassword&&<NavBarDirect/>}
      {u!=null&&u.pass!=directPassword&& <NavBar />}
      {u==null&& <NavBar/>}
      <br/>
      <br/>
      <Routes>
         <Route path="/" element={<Products/>} />
         <Route path="Products" element={<Products/>} />
         <Route path="try" element={<Products/>} />
         <Route path="Login/Products/Products" element={<Products/>} />
         <Route path="AddProduct/Products/Products" element={<Products/>} />
         <Route path="AddProduct/Products" element={<Products/>} />
         <Route path="login" element={<Login />} />
         <Route path="login/register" element={<Register />} />
         <Route path="login/Products" element={<Products />} />
         <Route path="register" element={<Register />} />
         <Route path="basket" element={<BasketList />} />
         <Route path="add" element={<AddProduct />} />
         <Route path="delete" element={<ProductSlice />} />
         <Route path="FinishOrder/PayOrder" element={<PayOrder />}/>
         <Route path="FinishOrder" element={<FinishOrder />}/>
         <Route path="NavBarDirect" element={<NavBarDirect />}/>
         <Route path="AddProduct" element={<AddProduct />}/>
         <Route path="remove" element={<Remove />}/>
         <Route path="/FinishOrder/PayOrder/ThankYou" element={<ThankYou />}/>
         <Route path="Login/Products/TimeOutBasket" element={<TimeOutBasket />}/>
      </Routes>
    </div>
  </BrowserRouter>
);
}
export default App;
