import MemeBox from "./MemeBox";
import meme1 from "/meme1.png"

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