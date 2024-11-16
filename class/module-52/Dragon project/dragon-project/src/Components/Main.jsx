import LeftNavbar from "./LeftNavbar";
import Pages from "./Pages";
import RightNav from "./RightNav";

const Main = () => {
    return (
        <div>

            <div className="grid md:grid-cols-12 gap-4 pt-6">
                <aside className="left col-span-3"> <LeftNavbar></LeftNavbar> </aside>
                <section className="col-span-6"> <Pages></Pages> </section>
                <aside className="col-span-3"> <RightNav></RightNav> </aside>
            </div>

        </div>
    );
};

export default Main;