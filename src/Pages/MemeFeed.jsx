import MemeBox from "../Components/MemeBox";
import SuspenseComp from "../Components/SuspenseComp"
import useFetch from "../useFetch";

const MemeFeed = () =>{
    const {resource, isLoading, error} = useFetch("https://meme-api.com/gimme/32")
    const susArray = ["","","","","","","","","","","",""]

    return(
        <>
            <h1 className='text-5xl text-center font-bold my-6'>Meme Feed</h1>
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
                {isLoading && susArray.map( (susItem, index) =><SuspenseComp key={index} id={index} />)}
                {error && susArray.map( (susItem, index) =><SuspenseComp key={index} id={index} />)}
            </div>
        </>
    )
}

export default MemeFeed;