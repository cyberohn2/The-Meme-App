import { useState } from "react"
import { useNavigate } from 'react-router-dom';

const TweetEditorCTA = () =>{
    const [tweetLink, setTweetLink] = useState("")
    const [isValid, setIsValid] = useState(false)
    const [inputChanged, setInputChanged] = useState(false)
    const tweetURLRegex = /^https?:\/\/(www\.)?x\.com\/([a-zA-Z0-9_]+)/;
    const navigate = useNavigate();
    const handleChange = (e) =>{
        const inputValue = e.target.value
        setTweetLink(inputValue)
        inputValue !== '' ? setInputChanged(true) : setInputChanged(false)
        setIsValid(tweetURLRegex.test(inputValue))
    }
    const handleNavigate = () =>{
        if (tweetURLRegex.test(tweetLink)) {
            navigate('/The-Meme-App/Tweet-Editor', { state: { tweetLink } });
        }
    }

    return(
        <section className="tweet-editor-cta flex justify-between flex-col-reverse md:flex-row items-center md:items-start mb-20 border-b-2 py-20">
        <form className='basis-[40%] py-2'>
            <div className="input-control">
                <label className='block font-bold mb-2 text-center md:text-left' htmlFor="tweet-link">Tweet Link Here</label>
                <input className='p-3 w-full rounded-lg outline outline-2 outline-text focus:outline-accent text-text' type="text" name="tweet-link" id="tweet-link" value={tweetLink} onChange={handleChange}/>
                {inputChanged && (!isValid && <p className="err-msg font-bold text-sm text-primary">valid tweet link pls</p>)}
                
            </div>
            <input onClick={handleNavigate} type="submit" value="Get Tweet" className='px-4 py-2 bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent block w-fit mt-4' />
        </form>
        <div className='basis-[50%]'>
            <h2 className='font-bold text-[3rem] md:text-[3.5rem] lg:text-[4.25rem] leading-tight mb-4 text-accent text-center md:text-left '>Tweet Editor</h2>
            <p className='font-semibold text-md text-gray text-center md:text-left'>Convert funny tweets into a beautiful, customizable image that you can share with your friends</p>
        </div>
    </section>
    )
}

export default TweetEditorCTA