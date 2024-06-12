import { Link } from "react-router-dom";
import hamburgerMenu from '../assets/menu-burger.svg'

const Navigation = () =>{
    return(
        <nav className="p-4 flex justify-between max-w-[1200px] mx-auto items-center sticky top-1 bg-accent-transparent rounded-full filter backdrop-blur-3xl shadow-md overflow-hidden isolate before:-z-10 before:absolute before:inset-0 before:bg-accent-transparent before:opacity-30">
            <h1 className="font-bold text-3xl font-inter text-accent ml-2">T.M.A</h1>
            <div data-visible='true' className="hidden data-[visible='true']:block basis-[75%] fixed  inset-0 bg-accent-transparent filter backdrop-blur-3xl shadow-md">
                <ul className=" md:flex justify-end text-[white]">
                    <li data-active="true" className="px-4 py-1 font-semibold data-[active='true']:text-accent hover:text-accent"><Link to="/The-Meme-App">Home</Link></li>
                    <li data-active="false" className="px-4 py-1 font-semibold data-[active='true']:text-accent hover:text-accent"><Link to="/The-Meme-App/Meme-Feed">Meme Feed</Link></li>
                    <li data-active="false" className="px-4 py-1 font-semibold data-[active='true']:text-accent hover:text-accent"><Link to="/The-Meme-App/Meme-Editor">Meme Maker</Link></li>
                    <li data-active="false" className="px-4 py-1 font-semibold data-[active='true']:text-accent hover:text-accent"><Link to="/The-Meme-App/Tweet-Editor">Tweets Editor</Link></li>
                </ul>
            </div>
            <img src={hamburgerMenu} width={30} className="md:hidden cursor-pointer" alt="" />
        </nav>
    )
}

export default Navigation;