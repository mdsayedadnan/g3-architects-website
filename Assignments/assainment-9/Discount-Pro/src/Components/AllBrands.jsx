import { Link, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";

const AllBrands = () => {
    const categories = useLoaderData()
    console.log(categories);
    return (
        <div>
            <Navbar></Navbar>
            <div className="font-bold text-4xl p-8 text-center ">

                <div className="items-center justify-center mb-3">
                    <h1>Our Popular brands</h1>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-sm w-full max-w-xs" />
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                {
                    categories.map(category => <div className=" p-3" key={category._id} >

                        <div className="relative">

                            <div>

                                <div className=" bg-base-300 shadow-xl rounded-2xl ">

                                    <div className=" border flex justify-between">
                                        <div className="flex items-center flex-col justify-center">
                                            <div>
                                           
                                                    <img className=" rounded-2xl"
                                                        src={category.brand_logo}
                                                        alt="" />

                                            </div>
                                            <h2 className="">{category.brand_name}</h2>
                                            <h1 className="p-2 font-semibold"> Ratting : {category.rating}</h1>

                                            <div className="rating p-2">
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                                <input type="radio" name="rating-1" className="mask mask-star" />
                                            </div>

                                        </div>



                                        <div className="">
                                            <h1 className="font-semibold"> {category.description}</h1>
                                            <p className="font-semibold">{category.category}</p>
                                            <p> <p className="font-semibold"> You have coupons {category.coupons.length}</p></p>

                                        </div>
                                        <div className="">

                                            <div className="flex justify-between ">
                                                <Link to='/Coupon page' className="btn btn-outline ml-8">View Coupons</Link>
                                              {
                                                category.isSaleOn &&  <p className="btn btn-outline mr-8 absolute bg-amber-400 right-0"> sale is on</p>
                                              }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>)
                }

            </div>


        </div>
    );
};

export default AllBrands;