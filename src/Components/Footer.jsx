import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <footer className="bg-[#094428] text-[white]">
            <div className="max-w-[1200px] mx-auto p-4">
                <div className="flex justify-between flex-col md:flex-row items-center mb-4">
                    <h1 className="font-bold text-3xl font-inter text-accent">T.M.A</h1>
                    <ul className="flex justify-end items-center flex-col md:flex-row">
                    {['Home', 'Meme Feed', 'Meme Maker', 'Tweets Editor'].map( (item, index) => <li key={index} className="px-4 py-1 font-semibold hover:text-accent"><Link to="/The-Meme-App">{item}</Link></li>)}
                    </ul>
                </div>
                <p className="attribute font-semibold text-center md:text-left">By Cyberohn</p>
            </div>
        </footer>
    )
}

export default Footer;