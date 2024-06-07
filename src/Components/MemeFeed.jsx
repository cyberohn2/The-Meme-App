import MemeBox from "./MemeBox";
import Navigation from "./Navigation";

const MemeFeed = () =>{
    return(
        <>
            <h1>Meme Feed</h1>
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
        </>
    )
}

export default MemeFeed;