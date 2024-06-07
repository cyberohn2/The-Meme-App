import meme1 from "/meme1.png"
import meme2 from "/meme2.webp"
import meme3 from "/meme3.webp"
import meme4 from "/meme4.png"
import meme5 from "/meme5.webp"
import meme6 from "/meme6.webp"
import meme7 from "/meme7.webp"
import meme8 from "/meme8.png"
import meme9 from "/meme9.webp"
import meme10 from "/meme10.webp"
import meme11 from "/meme11.png"
import meme12 from "/meme12.webp"
import meme13 from "/meme13.webp"
import meme14 from "/meme14.webp"
import meme15 from "/meme15.webp"
import meme16 from "/meme16.webp"
import meme17 from "/meme17.webp"
import meme18 from "/meme18.webp"
import meme19 from "/meme19.webp"
import meme20 from "/meme20.webp"
import meme21 from "/meme21.webp"
import MemeBox from "./MemeBox";

const Home = () =>{

    return(
        <div>
            <section className="hero">
                <div className="hero-text">
                    <h1 className="font-bold">Let Go Of Your Worries and LOL</h1>
                    <p>Read memes and laugh away your sorrow, or make them 😎</p>
                    <div>
                        <Link to="/The-Meme-App/Meme-Feed">Meme Feed</Link>
                        <Link to="/The-Meme-App/Meme-Editor">Meme Editor</Link>
                    </div>
                </div>
                <div className="hero-img">
                        <img src={meme1} alt="meme image" />
                        <img src={meme2} alt="meme image" />
                        <img src={meme3} alt="meme image" />
                        <img src={meme4} alt="meme image" />
                        <img src={meme5} alt="meme image" />
                        <img src={meme6} alt="meme image" />
                        <img src={meme7} alt="meme image" />
                        <img src={meme8} alt="meme image" />
                        <img src={meme9} alt="meme image" />
                        <img src={meme10} alt="meme image" />
                        <img src={meme11} alt="meme image" />
                        <img src={meme12} alt="meme image" />
                        <img src={meme13} alt="meme image" />
                        <img src={meme14} alt="meme image" />
                        <img src={meme15} alt="meme image" />
                        <img src={meme16} alt="meme image" />
                        <img src={meme17} alt="meme image" />
                        <img src={meme18} alt="meme image" />
                        <img src={meme19} alt="meme image" />
                        <img src={meme20} alt="meme image" />
                        <img src={meme21} alt="meme image" />
                </div>
            </section>
            <section className="meme-feed-cta">
                <h2>Meme Feed</h2>
                <div className="meme-wrapper">
                    <MemeBox 
                    image={meme1} 
                    caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                    />
                    <MemeBox 
                    image={meme1} 
                    caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                    />
                    <MemeBox 
                    image={meme1} 
                    caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                    />
                    <MemeBox 
                    image={meme1} 
                    caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                    />
                    <MemeBox 
                    image={meme1} 
                    caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                    />
                    <MemeBox 
                    image={meme1} 
                    caption="Lorem ipsum dolor sit amet consectetur adipisicing elit." 
                    />
                </div>
                <Link to="/The-Meme-App/Meme-Feed">See More</Link>
            </section>
            <section className="tweet-editor-cta">
                <form >
                    <div className="input-control">
                        <label htmlFor="tweet-link">Tweet Link Here</label>
                        <input type="text" name="tweet-link" id="tweet-link" />
                        <p className="err-msg"></p>
                    </div>
                </form>
                <div>
                    <h2>Tweet Editor</h2>
                    <p>Convert funny tweets into a beautiful, customizable image that you can share with your friends</p>
                </div>
            </section>
            <section className="meme-editor-cta">
                <h2>Meme Maker</h2>
                <p className="text-primary">Create and share custom memes with your friends</p>
                <p><Link to="/The-Meme-App/Meme-Editor">Meme Maker</Link></p>
            </section>
        </div>
    )
};

export default Home;