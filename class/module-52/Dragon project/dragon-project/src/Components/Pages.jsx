import { useLoaderData } from "react-router-dom";

const Pages = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
          data News found in this category
        </div>
    );
};

export default Pages;