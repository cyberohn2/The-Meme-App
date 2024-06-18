import { Link } from "react-router-dom"

const MemeEditorCTA = () =>{
    return(
        <section className="meme-editor-cta mb-20 py-20 text-center">
            <h2 className="font-bold text-[3rem] md:text-[3.5rem] lg:text-[4.25rem] leading-tight mb-4">Meme Maker</h2>
            <p className="text-xl text-gray font-bold mb-5">Create and share custom memes with your friends</p>
            <p><Link className='px-4 py-2 bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent block w-fit mx-auto' to="/The-Meme-App/Meme-Editor">Meme Maker</Link></p>
        </section>
    )
}

export default MemeEditorCTA;