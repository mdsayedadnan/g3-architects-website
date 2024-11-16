import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="space-y-2  p-3 ">
            <h2 className="font-bold">Login With</h2>
            <div className="flex flex-row btn ">
                <span> <FaGoogle></FaGoogle> </span>
                <h2>Login With Google</h2>
            </div>
            <div className=" btn flex flex-row ">
            <span> <FaGithub></FaGithub> </span>
            <h2>Login With GitHub</h2>
            </div>
        </div>
    );
};

export default SocialLogin;