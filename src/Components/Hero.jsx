import { Link } from "react-router-dom"
import heroImg from "/hero-img.png"
const Hero = ( ) =>{
    return(
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
    )
}

export default Hero;