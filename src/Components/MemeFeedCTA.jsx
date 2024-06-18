import { Link } from "react-router-dom"
import useFetch from "../useFetch.jsx"
import MemeBox from "./MemeBox"
import SuspenseComp from "./SuspenseComp.jsx"

const MemeFeedCTA = () =>{
    const {resource, isLoading, error} = useFetch("https://meme-api.com/gimme/8")
    const susArray = ["","","","","","","","","","","",""]

    return(
        <section className="meme-feed-cta mb-20">
        <h2 className='text-5xl text-center font-bold mb-6'>{error ? error : "Meme Feed"}</h2>
        <div className="meme-wrapper grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {resource && resource.memes.map((meme, index) =>
             <MemeBox 
                image={meme.preview[3]}
                caption={meme.title}
                author={meme.author}
                postLink={meme.postLink}
                key={index}
             />
            )}
            {isLoading && susArray.map( (susItem, index) =><SuspenseComp key={index} id={index}/>)}
            {error && susArray.map( (susItem, index) =><SuspenseComp key={index} id={index}/>)}
        </div>
        <Link className='px-4 py-2 bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent block w-fit mx-auto' to="/The-Meme-App/Meme-Feed">See More</Link>
    </section>
    )
}

export default MemeFeedCTA