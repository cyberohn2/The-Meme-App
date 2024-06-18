import { Link, NavLink } from "react-router-dom";
import hamburgerMenu from '../assets/menu-burger.svg'
import closeMenu from '../assets/cross.svg'
import { useState } from "react";

const Navigation = () =>{

    const [menuVisibility, setMenuVisibility] = useState(false)

    const handleMenu = () =>{
        setMenuVisibility( m => !m)
    }

    return(
        <header className="sticky top-1">
            <nav className="p-4 flex justify-between max-w-[1200px] mx-auto items-center sticky top-1 bg-accent-transparent rounded-full filter backdrop-blur-3xl shadow-md isolate before:-z-10 before:absolute before:inset-0 before:bg-accent-transparent before:opacity-30 before:rounded-full">
                <h1 className="font-bold text-3xl font-inter text-accent ml-2"><Link  to="/The-Meme-App">T.M.A</Link></h1>
                <div className="basis-[75%] hidden md:block">
                    <ul className="md:flex justify-end text-[white] navlist">
                        <li className="px-4 py-1 font-semibold hover:text-secondary" ><NavLink end to="/The-Meme-App" >Home</NavLink></li>
                        <li className="px-4 py-1 font-semibold hover:text-secondary"><NavLink end to="/The-Meme-App/Meme-Feed">Meme Feed</NavLink></li>
                        <li className="px-4 py-1 font-semibold hover:text-secondary"><NavLink end to="/The-Meme-App/Meme-Editor">Meme Maker</NavLink></li>
                        <li className="px-4 py-1 font-semibold hover:text-secondary"><NavLink end to="/The-Meme-App/Tweet-Editor">Tweets Editor</NavLink></li>
                    </ul>
                </div>
                <img src={hamburgerMenu} width={30} onClick={handleMenu} className="md:hidden cursor-pointer" alt="" />
            </nav>
            <div data-visible={menuVisibility} className="mobile-nav hidden data-[visible='true']:block md:data-[visible='true']:hidden fixed inset-0 bg-[#22ce7b1f] backdrop-blur-2xl">
            <img src={closeMenu} width={30} onClick={handleMenu} className="cursor-pointer absolute top-4 right-4" alt="" />
                <ul className="md:flex justify-end text-[white] bg-background h-full ml-auto py-8 w-[50%]">
                    <li className="px-4 p
                    y-1 font-semibold hover:text-secondary text-2xl pb-6 border-b border-gray"><NavLink onClick={handleMenu}  end to="/The-Meme-App">Home</NavLink></li>
                    <li  className="px-4 py-1 font-semibold hover:text-secondary text-2xl pb-6 border-b
                     border-gray"><NavLink onClick={handleMenu}  end to="/The-Meme-App/Meme-Feed">Meme Feed</NavLink></li>
                    <li  className="px-4 py-1 font-semibold hover:text-secondary text-2xl pb-6 border-b
                     border-gray"><NavLink onClick={handleMenu}  end to="/The-Meme-App/Meme-Editor">Meme Maker</NavLink></li>
                    <li  className="px-4 py-1 font-semibold hover:text-secondary text-2xl pb-6 border-b border-gray"><NavLink onClick={handleMenu}  end to="/The-Meme-App/Tweet-Editor">Tweets Editor</NavLink></li>
                </ul>
            </div>
        </header>
    )
}

export default Navigation;