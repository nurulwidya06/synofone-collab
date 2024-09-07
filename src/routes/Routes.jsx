import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CartPage from "../pages/customer/CartPage";
import LandingPage from "../pages/customer/LandingPage";
import DaftarPage from "../pages/customer/DaftarPage";
import FinishPage from "../pages/customer/FinishPage";
import OrderPage from "../pages/customer/OrderPage";
import StatusPage from "../pages/customer/StatusPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Banners from "../pages/dashboard/banners/Banners";
import CreateBanners from "../pages/dashboard/banners/CreateBanners";
import EditBanners from "../pages/dashboard/banners/EditBanners";
import Brands from "../pages/dashboard/brands/Brands";
import CreateBrands from "../pages/dashboard/brands/CreateBrands";
import EditBrands from "../pages/dashboard/brands/EditBrands";
import Products from "../pages/dashboard/products/Products";
import CreateProducts from "../pages/dashboard/products/CreateProducts";
import EditProducts from "../pages/dashboard/products/EditProducts";
import Users from "../pages/dashboard/users/Users";
import EditUsers from "../pages/dashboard/users/EditUsers";
import CreateUsers from "../pages/dashboard/users/CreateUsers";
import PrivateRoutes from "../routes/PrivateRoutes"

const   RouteIndex = () => {
    return (
        <Routes>
            {/*====Route customer=====*/}
            {/* <Route path="/login" element={<LoginPage/>} /> */}
            <Route path="/login" Component={LoginPage}/>
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/" element={<LandingPage/>} />
            <Route path="/daftar" element={<DaftarPage/>} />
            <Route path="/finish" element={<FinishPage/>} />
            <Route path="/order" element={<OrderPage/>} />
            <Route path="/status" element={<StatusPage/>} />            
            {/*=======================*/}

            {/*====Route Dashboard=====*/}
            <Route path="admin/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>}/>
            <Route path="admin/banners" element={<PrivateRoutes><Banners /></PrivateRoutes>}/>
            <Route path="admin/banners/new" element={<PrivateRoutes><CreateBanners /></PrivateRoutes>}/>
            <Route path="admin/banners/:id" element={<PrivateRoutes><EditBanners/></PrivateRoutes>}/>
            <Route path="admin/brands" element={<PrivateRoutes><Brands/> </PrivateRoutes>}/>
            <Route path="admin/brands/new" element={<PrivateRoutes><CreateBrands/></PrivateRoutes>}/>
            <Route path="admin/brands/:id" element={<PrivateRoutes><EditBrands/></PrivateRoutes>}/>
            <Route path="admin/products" element={<PrivateRoutes><Products/></PrivateRoutes>}/>
            <Route path="admin/products/new" element={<PrivateRoutes><CreateProducts/></PrivateRoutes>}/>
            <Route path="admin/products/:id" element={<PrivateRoutes><EditProducts/></PrivateRoutes>}/>
            <Route path="admin/users" element={<PrivateRoutes><Users/></PrivateRoutes>}/>
            <Route path="admin/users/new" element={<PrivateRoutes><CreateUsers/></PrivateRoutes>}/>
            <Route path="admin/users/:id" element={<PrivateRoutes><EditUsers/></PrivateRoutes>}/>


        </Routes>
    );
}

export default RouteIndex