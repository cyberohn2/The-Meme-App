import Hero from '../Components/Hero';
import MemeFeedCTA from '../Components/MemeFeedCTA';
import TweetEditorCTA from '../Components/TweetEditorCTA';
import MemeEditorCTA from "../Components/MemeEditorCTA";

const Home = () =>{

    return(
        <div className="max-w-[1200px] mx-auto mt-10 px-4">
            <Hero />
            <MemeFeedCTA />
            <TweetEditorCTA />
            <MemeEditorCTA />
        </div>
    )
};

export default Home;