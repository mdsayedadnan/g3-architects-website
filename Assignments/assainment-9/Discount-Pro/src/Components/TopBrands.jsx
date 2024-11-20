import Marquee from "react-fast-marquee";

import img1 from '../assets/7.png'
import img2 from '../assets/download.png'
import img3 from '../assets/3.png'
import img4 from '../assets/6.jpg'
import img5 from '../assets/5.png'
import img6 from '../assets/4.jpg'
import img7 from '../assets/priyo.jpg'
import img8 from '../assets/1.jpg'
import img9 from '../assets/othoba.jpg'
import img10 from '../assets/one ummah.png'
import img11 from '../assets/le riva.png'
import { NavLink } from "react-router-dom";
const TopBrands = () => {
    return (
        <div>
            <div className="flex items-center justify-center p-5">
                <h1 className="font-bold text-3xl">TOP BRANDS</h1>
            </div>
            <div className="p-6">
                <Marquee pauseOnHover >
                    <div className=" flex flex-row gap-5">
                      <NavLink to='/brands'> <img className=" rounded-full mr-5" src={img1} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img2} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img3} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img4} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img5} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img6} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img7} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img8} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img9} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img10} alt="" /></NavLink>
                      <NavLink to='/brands'> <img className="rounded-full mr-5 " src={img11} alt="" /></NavLink>
                    </div>

                </Marquee>


            </div>
        </div>
    );
};

export default TopBrands;