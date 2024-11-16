import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
        <div className="space-y-2">
            <h2 className="font-bold mt-7 mb-6">Find Us</h2>
            <div className=" btn flex flex-row justify-start ">
                <span> <FaFacebook></FaFacebook> </span>
                <h2>Login With Facebook</h2>
            </div>
            <div className=" btn flex flex-row justify-start">
                <span> <FaInstagram></FaInstagram> </span>
                <h2>Login With Instagram</h2>
            </div>
            <div className=" btn flex justify-start flex-row ">
                <span> <FaTwitter></FaTwitter> </span>
                <h2>Login With Twitter</h2>
            </div>
        </div>
    </div>
    );
};

export default FindUs;