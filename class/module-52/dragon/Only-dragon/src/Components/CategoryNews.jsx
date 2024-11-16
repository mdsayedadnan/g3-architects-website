import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const data = useLoaderData();

    // Log the data to inspect its structure
    console.log(data);

    return (
        <div>
            <h1 className="font-bold">Dragon News Home</h1>
            <div>
                {data?.data?.length > 0 ? (
                    data.data.map((news) => (
                        <div key={news._id} className="border p-4 mb-4">
                            <h2 className="font-bold">{news.title}</h2>
                            <p>{news.details}</p>
                        </div>
                    ))
                ) : (
                    <p>No news found for this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryNews;
