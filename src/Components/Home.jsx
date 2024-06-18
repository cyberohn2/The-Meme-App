import heroImg from '/hero-img.png'
import meme1 from '/meme1.png'
import MemeBox from "./MemeBox";
import { Link } from "react-router-dom"
import useFetch from '../useFetch';
import SuspenseComp from './SuspenseComp';

const Home = () =>{
    const {resource, isLoading, error} = useFetch("https://meme-api.com/gimme/8")
    const susArray = ["","","","","","","","","","","",""]

    return(
        <div className="max-w-[1200px] mx-auto mt-10 px-4">
            <section className="hero flex justify-between flex-col-reverse md:flex-row items-center md:items-start mb-20">
                <div className="hero-text basis-[40%] py-2 text-center md:text-left">
                    <h1 className="font-bold text-[3rem] md:text-[3.5rem] lg:text-[4.25rem] leading-tight mb-4">Let Go Of Your Worries and Just <span className='text-accent underline' title='Laugh out Loud'>LOL.</span></h1>
                    <p className='text-xl text-gray font-bold'>Read memes and laugh away your sorrow, <br />or make them 😎</p>
                    <div className='mt-6'>
                        <Link className='px-4 py-2 w-fit whitespace-nowrap bg-gray text-text font-bold rounded-md hover:bg-accent hover:text-gray mr-2' to="/The-Meme-App/Meme-Feed">Meme Feed</Link>
                        <Link className='px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent' to="/The-Meme-App/Meme-Editor">Meme Editor</Link>
                    </div>
                </div>
                <div className="hero-img basis-[50%]">
                    <img className='mx-auto' width="90%" src={heroImg} alt="" />
                </div>
            </section>
            <section className="meme-feed-cta mb-20">
                <h2 className='text-5xl text-center font-bold mb-6'>Meme Feed</h2>
                <div className="meme-wrapper grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {resource && resource.memes.map((meme, index) =>
                     <MemeBox 
                        image={meme.preview[3]}
                        caption={meme.title}
                        author={meme.author}
                        postLink={meme.postLink}
                     />
                    )}
                    {isLoading && susArray.map( (susItem, index) =><SuspenseComp key={index} id={index} />)}
                    {error && <div className='text-center text-lg font-bold'>{error}</div>}
                </div>
                <Link className='px-4 py-2 bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent block w-fit mx-auto' to="/The-Meme-App/Meme-Feed">See More</Link>
            </section>
            <section className="tweet-editor-cta flex justify-between flex-col-reverse md:flex-row items-center md:items-start mb-20 border-b-2 py-20">
                <form className='basis-[40%] py-2'>
                    <div className="input-control">
                        <label className='block font-bold mb-2 text-center md:text-left' htmlFor="tweet-link">Tweet Link Here</label>
                        <input className='p-3 w-full rounded-lg outline outline-2 outline-text focus:outline-accent text-text' type="text" name="tweet-link" id="tweet-link" />
                        <p className="err-msg"></p>
                    </div>
                </form>
                <div className='basis-[50%]'>
                    <h2 className='font-bold text-[3rem] md:text-[3.5rem] lg:text-[4.25rem] leading-tight mb-4 text-accent text-center md:text-left '>Tweet Editor</h2>
                    <p className='font-semibold text-md text-gray'>Convert funny tweets into a beautiful, customizable image that you can share with your friends</p>
                </div>
            </section>
            <section className="meme-editor-cta mb-20 py-20 text-center">
                <h2 className="font-bold text-[3rem] md:text-[3.5rem] lg:text-[4.25rem] leading-tight mb-4">Meme Maker</h2>
                <p className="text-xl text-gray font-bold mb-5">Create and share custom memes with your friends</p>
                <p><Link className='px-4 py-2 bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent block w-fit mx-auto' to="/The-Meme-App/Meme-Editor">Meme Maker</Link></p>
            </section>
        </div>
    )
};

export default Home;