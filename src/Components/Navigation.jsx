import { Link } from "react-router-dom";

const Navigation = () =>{
    return(
        <nav>
            <h1>TMA</h1>
            <ul>
                <li><Link to="/The-Meme-App">Home</Link></li>
                <li><Link to="/The-Meme-App/Meme-Feed">Meme Feed</Link></li>
                <li><Link to="/The-Meme-App/Meme-Editor">Meme Maker</Link></li>
                <li><Link to="/The-Meme-App/Tweet-Editor">Tweets Editor</Link></li>
                <li><Link to="/The-Meme-App/About">About</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;