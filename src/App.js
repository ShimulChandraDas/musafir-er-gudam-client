import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import AddProduct from './Components/Pages/AddProduct/AddProduct';

import Blogs from './Components/Pages/Blogs/Blogs';
import Home from './Components/Pages/Home/Home';
import Inventory from './Components/Pages/Login/Inventory/Inventory';
import Login from './Components/Pages/Login/Login';
import RequireAuth from './Components/Pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './Components/Pages/ManageInventory/ManageInventory';
import Register from './Components/Pages/Register/Register';
import ProductUpdate from './Components/Pages/Update/ProductUpdate/ProductUpdate';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        }></Route>
        <Route path='/addproduct' element={
          <RequireAuth>
            <AddProduct />
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageInventory />
          </RequireAuth>
        }></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <ProductUpdate />
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
