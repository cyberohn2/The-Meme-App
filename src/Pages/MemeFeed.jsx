import MemeBox from "../Components/MemeBox";
import LandMark from "../Components/LandMark";
import SuspenseComp from "../Components/SuspenseComp"
import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import { useRef } from "react";

const MemeFeed = () =>{
    const susArray = ["","","","","","","","","","","",""]
    const [reload, setReload] = useState(false)
    const ref = useRef(null)
    const resourceArray = useRef(null)
    const {resource, isLoading, error} = useFetch("https://meme-api.com/gimme/32", reload.current)
    if(resource){
        resourceArray.current = [...resource.memes]
        const handleReload = (entries) =>{
            if (entries.some((entry) => entry.isIntersecting)) {
                console.log("is intersecting oo");
                setReload( r => !r)
                
            }}
        const observer = new IntersectionObserver(handleReload)
        if (ref.current) {
            observer.observe(ref.current);
        }
    }
    return(
        <>
            <h1 className='text-5xl text-center font-bold my-6'>Meme Feed</h1>
            <div className="meme-wrapper grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {resourceArray.current && resourceArray.current.map((meme, index) =>
                <MemeBox 
                    image={meme.preview[3]}
                    caption={meme.title}
                    author={meme.author}
                    postLink={meme.postLink}
                    key={index}
                />
                )}
                {isLoading && susArray.map( (susItem, index) =><SuspenseComp key={index} id={index} />)}
                {error && susArray.map( (susItem, index) =><SuspenseComp key={index} id={index} />)}
            </div>
            <LandMark ref={ref} />
        </>
    )
}

export default MemeFeed;