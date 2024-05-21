import { Link } from "react-router-dom";

const Home = () =>{

    return(
        <>
            <h1 className="text-xl font-bold text-red-500">The <Link to="/The-Meme-App/Meme-Feed">Meme</Link> App is up and running</h1>
        </>
    )
};

export default Home