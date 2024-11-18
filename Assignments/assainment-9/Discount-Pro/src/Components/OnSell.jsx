import { useLoaderData } from "react-router-dom";

const OnSell = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            <div className="font-bold text-2xl p-8 text-center items-center text-cyan-600">
                <div className="divider mt-4"></div>
                <h1 className="mt-6">Brand On Sell</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    categories.map(category => category.isSaleOn && <div className="p-5 " key={category._id} >

                        <div className=" gap-4 p-2 ">
                            <div className="card bg-base-100 w-96 shadow-xl border">
                                <figure className="px-10 pt-10">
                                    <img
                                        src={category.brand_logo}
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-2xl font-semibold">{category.brand_name}</h2>
                                    <p className="font-semibold"> You have coupons {category.coupons.length}</p>
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
    );
};

export default OnSell;