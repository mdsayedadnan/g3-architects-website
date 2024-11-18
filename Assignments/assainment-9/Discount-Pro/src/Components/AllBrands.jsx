import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const AllBrands = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
        <div>
            <Navbar></Navbar>
            <div>

                <div className="font-bold text-2xl p-8 text-center items-center rounded-full">

                    <div className="flex items-center justify-center gap-3">
                        <h1>Brand On Sell</h1>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        categories.map(category => <div className="grid md:grid-cols-2 lg:grid-cols-3 p-3" key={category._id} >

                            <div className="">
                                <div className="card bg-base-100  shadow-xl w-96 p-2 border gap-2">
                                    <h2 className="card-title text-3xl font-bold justify-center p-3 text-green-700 mt-5">{category.brand_name}</h2>

                                    <figure className="px-10 pt-10">
                                        <img
                                            src={category.brand_logo}
                                            alt=""
                                            className="rounded-xl" />
                                    </figure>
                                    <div>
                                        <h1 className="p-2 mt-6 ml-8 font-semibold"> Ratting : {category.rating}</h1>
                                        <span>
                                            <div className="rating p-2 ml-8">
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                            </div>
                                        </span>

                                    </div>
                                    <div>
                                        <h1 className="p-2 ml-8 font-semibold"> {category.description}</h1>
                                        <p className="p-2 ml-8 font-semibold">{category.category}</p>
                                        <p> <p className="p-2 ml-8 font-semibold"> You have coupons {category.coupons.length}</p></p>
                                    </div>
                                    <div className="flex justify-between p-4">
                                    <button className="btn btn-outline ml-8">View Coupons</button>
                                    <button className="btn btn-outline mr-8"> sale is on</button>
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