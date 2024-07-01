import MemeBox from "../Components/MemeBox";
import LandMark from "../Components/LandMark";
import SuspenseComp from "../Components/SuspenseComp"
import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import { useRef } from "react";

const MemeFeed = () =>{
    const [memeNum, setMemeNum] = useState(32)
    const [resource, setResource] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const ref = useRef(null)
    const isvisble = useRef(false)

    const onIntersection = ([entry]) =>{
        if (entry.isIntersecting) {
            isvisble.current = !isvisble.current
            console.log('is visible');
            getMemes()
            setMemeNum( m => m+10)
        }
    }
    
    useEffect(() =>{
        const observer = new IntersectionObserver(onIntersection)

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () =>{
            if (observer) {
                observer.disconnect()
            }
        }
    }, [isvisble])

    async function getMemes () {
            fetch(`https://meme-api.com/gimme/${memeNum}`)
            .then(res => {
                if (!res.ok) {
                    throw Error("couldn't fetch data, kindly reload")
                }
                return res.json();
            })
            .then(data => {
                setResource(r => [...r, ...data.memes])
                setIsLoading(false)
                setError(null)
            })
            .catch( err => {
                setError(err.message)
                setIsLoading(false)
            })


    }

    return(
        <>
            <h1 className='text-5xl text-center font-bold my-6'>Meme Feed</h1>
            <div className="meme-wrapper grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
                {resource != [] && resource.map((meme, index) =>
                <MemeBox 
                    image={meme.preview[3]}
                    caption={meme.title}
                    author={meme.author}
                    postLink={meme.postLink}
                    key={index}
                />
                )}
                {isLoading && <LandMark ref={ref}/>}
                {error && <div>There was an error while fetching data</div>}
            </div>
            <LandMark ref={ref} />
        </>
    )
}

export default MemeFeed;