import Footer from "./Footer";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import TopBrands from "./TopBrands";
import OnSell from "./OnSell";

const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <TopBrands></TopBrands>
            <OnSell></OnSell>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;