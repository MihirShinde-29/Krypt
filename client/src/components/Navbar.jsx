import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import logo from '../../images/logo.png'

const NavbarItem = ({ title, classProps }) => {
  return (
    <li className={`mx-4 cursor-pointer ${classProps}`}>
      {title}
    </li>
  );
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className="md:flex-[0.5] felx-initial justify-center items-center">
        <img src={logo} alt='logo' className='w-32 cursor-pointer' />
      </div>
      <ul className="text-white md:flex hidden flex-row list-none justify-between items-center">
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavbarItem key={item + index} title={item}/>
        ))}
        <li className="mx-4 cursor-pointer bg-[#2952e3] py-2 px-7 rounded-full hover:bg-[#2546bd]">Login</li>
      </ul>
      <div className="flex relative">
        {toggleMenu
          ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(false)} />
          : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={()=> setToggleMenu(true)} />}
        {toggleMenu && (
          <ul
            className='z-10 fixed top-0 -right-0 p-3 w-[70vw] h-screen md:hidden list-none shadow-2xl flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in'
          >
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={()=> setToggleMenu(false)} />
            </li>
              {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
                <NavbarItem key={item + index} title={item} classProps='my-2 text-lg'/>
              ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar;