import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const AllBrands = () => {
const categories = useLoaderData()
    console.log(categories);
    return (
        <div>
            <Navbar></Navbar>
            <div>

            <div className="font-bold text-2xl p-8 text-center items-center rounded-full"><h1>Brand On Sell</h1></div>
            <div>
                {
                    categories.map(category => <div className="grid md:grid-cols-2 lg:grid-cols-3 p-5" key={category._id} >

                        <div className=" gap-4 p-2">
                            <div className="card bg-base-100 w-96 shadow-xl  ">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={category.brand_logo}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-2xl font-semibold">{category.brand_name}</h2>
                                    <p> You have coupons {category.coupons.length}</p>
                                    <div className="card-actions">
                                        <button className="btn btn-outline">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>)
                }

            </div>

            </div>
        </div>
    );
};

export default AllBrands;