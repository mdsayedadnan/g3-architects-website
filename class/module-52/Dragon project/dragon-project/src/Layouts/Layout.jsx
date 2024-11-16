import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

const Layout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>

            <LatestNews></LatestNews>

            <Navbar></Navbar>
            <Main className="grid grid-cols-12">  </Main>
          
            
        </div>
    );
};

export default Layout;