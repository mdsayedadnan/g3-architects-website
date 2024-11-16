import { Link } from 'react-router-dom';
import navLogo from './../assets/assets/user.png'

const Navbar = () => {
    return (
        <div>
           <div className='flex justify-between items-center p-3'>
            <div>  </div>
            <div className='space-x-5 font-semibold'>
             <Link to='/'>Home</Link>
             <Link to='/'>About</Link>
             <Link to='/'>Carrer</Link>
            </div>
            <div className='flex gap-2'>
               <div>
               <img src={navLogo} alt="" />
               </div>
               <div>
                <button className='btn btn-neutral rounded-none'>Login</button>
               </div>

            </div>

           </div>
        </div>
    );
};

export default Navbar;