import heroImg from '/hero-img.png'
import meme1 from '/meme1.png'
import MemeBox from "./MemeBox";
import { Link } from "react-router-dom"

const Home = () =>{

    return(
        <div className="max-w-[1200px] mx-auto mt-10">
            <section className="hero flex justify-between items-start">
                <div className="hero-text basis-[40%] py-2">
                    <h1 className="font-bold text-[4.25rem] leading-tight mb-4">Let Go Of Your Worries and Just <span className='text-accent underline' title='Laugh out Loud'>LOL.</span></h1>
                    <p className='text-xl text-gray font-bold'>Read memes and laugh away your sorrow, <br />or make them 😎</p>
                    <div className='mt-6'>
                        <Link className='px-4 py-2 bg-gray text-text font-bold rounded-md hover:bg-accent hover:text-gray mr-2' to="/The-Meme-App/Meme-Feed">Meme Feed</Link>
                        <Link className='px-4 py-2 bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent' to="/The-Meme-App/Meme-Editor">Meme Editor</Link>
                    </div>
                </div>
                <div className="hero-img basis-[50%] ">
                    <img width="90%" src={heroImg} alt="" />
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