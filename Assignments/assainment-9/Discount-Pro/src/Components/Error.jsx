import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div className="flex items-center justify-center flex-col bg-slate-200 p-40 rounded-lg">
            <p className="font-bold p-6"> Hi...! this page is Not Found</p>
            <h1 className="font-bold text-6xl">404 Page is Not Found</h1>

            <div>
                <NavLink className="bg-slate-200 btn btn-outline mt-9" to='/'>Back to home</NavLink>
            </div>
        </div>
    );
};

export default Error;