import moment from 'moment/moment';
import logo from '../assets/assets/logo.png'
const Header = () => {
    return (
        <div className='text-center flex flex-col justify-center items-center gap-4 p-3'>
            <div className='logo w-[300px] items-center'>
                <img src={logo} alt="" />
            </div>
            <div>
                <h className="">Journalism Without Fear or Favour</h>
            </div>
            <div><h1>
                {moment().format("dddd, MMMM Do YYYY, h:mm a")}
                
                </h1></div>

        </div>
    );
};

export default Header;