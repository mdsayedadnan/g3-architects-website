import CategoryNews from "../Components/CategoryNews";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import LeftNavbar from "../Components/LayoutComponents/LeftNavbar";
import RightNav from "../Components/LayoutComponents/RightNav";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
    return (
        <div>
           <Header></Header>
           <section className="w-11/12 mx-auto p-2"><LatestNews></LatestNews></section>
           <section className="w-11/12 mx-auto p-2"><Navbar></Navbar></section>
           <main className="w-11/12 mx-auto p-5 grid md:grid-cols-12 gap-4">
           
           <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>

           <section className="col-span-6"><CategoryNews></CategoryNews></section>
           
           <aside className="col-span-3"><RightNav></RightNav></aside>
           </main>
        </div>
    );
};

export default HomeLayout;