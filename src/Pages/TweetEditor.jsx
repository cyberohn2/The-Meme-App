import React, { useEffect, useRef, useState } from "react";
import palette from "../assets/palette.svg";
import heroImg from "/hero-img.png";


const TweetEditor = () =>{

    const [bgColor, setBgColor] = useState("#ffffff");
    const [translateValue, setTranslateValue] = useState("translate-x-0");
    const [brandName, setBrandName] = useState("Created with T.M.A");
    const [brandImage, setBrandImage] = useState({
        file: null,
        url: ""
    });
    const fonts = useRef([
        "Arial", "Calibri", "Times New Roman", "Helvetica", "Sans-Serif", "Verdana", "Georgia", "Courier New", "Trebuchet MS", "Comic Sans", "Impact", "Lucida Console", "Monaco", "Brush Script MT", "Segoe UI", "Open Sans", "Lato", "Merriweather", "Playfair Display", "Ubuntu", "Garamond", "Bodoni", "Didot", "Futura", "Avant Garde", "Gill Sans", "Lobster", "Pacifico", "Dancing Script", "Museo", "Rockwell", "Arial Black", "Courier", "Franklin Gothic Medium", "Lucida Sans Unicode"
    ]);
    const [tweetLink, setTweetLink] = useState("")
    const [tweetID, setTweetID] = useState("")
    const [tweetDetails, setTweetDetails] = useState({
        tweetText: '',
        images: '',
        author: '',
        profilePic: ''
    });
    const [textArray, setTextArray] = useState()
    const [errorMessage, setErrorMessage] = useState("")
      



    const handleBgColor = (e) => {
        setBgColor(e.target.value);
    };
    const handleActiveTab = (e) => {
        const tabControl = document.querySelectorAll(".tab-control");
        tabControl.forEach((control) => {
            control.classList.remove("text-accent");
        });
        e.target.classList.add("text-accent");

        const activeTab = e.target.textContent;

        switch (activeTab) {
            case "Background":
                setTranslateValue("translate-x-0");
                break;
            case "Text":
                setTranslateValue("-translate-x-[400px]");
                break;
            case "Branding":
                setTranslateValue("-translate-x-[800px]");
                break;
            default:
                break;
        }
    };
    const handleBrandName = (e) => {
        setBrandName(e.target.value);
    };

    const handleBrandImage = (e) => {
        if (e.target.files[0]) {
            setBrandImage({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    const handleTweetFont = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setTextArray(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                font: e.target.value
            };
            return newState;
        });
    };

    const handleTweetColor = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setTextArray(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                color: e.target.value
            };
            return newState;
        });
    };

    const handleTweetTextSize = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setTextArray(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                textSize: Number(e.target.value)
            };
            return newState;
        });
    };

    const handleIsBold = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setTextArray(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                isBold: !newState[index].isBold
            };
            return newState;
        });
    };

    const handleIsCollapsed = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setTextArray(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                isCollapsed: !newState[index].isCollapsed
            };
            return newState;
        });
    };
    const getTweetIdFromLink = (tweetLink) => {
        const url = new URL(tweetLink);
        const pathname = url.pathname;
        const parts = pathname.split('/');
        return parts.pop(); // return the last part (the tweet ID)
      }
    const handleTweetLink = (e) =>{
        setTweetLink( prev => prev = e.target.value)
    }
    const getTweetInfo = async () =>{
        const tweetURLRegex_1 = /^https?:\/\/(www\.)?X\.com\/([a-zA-Z0-9_]+)/;
        const tweetURLRegex_2= /^https?:\/\/(www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;

        if (tweetURLRegex_1.test(tweetLink) || tweetURLRegex_2.test(tweetLink)) {
            setTweetID( prev => prev = getTweetIdFromLink(tweetLink))
            fetch(`https://api.twitter.com/2/tweets/${tweetID}`, {
                headers: {
                    'Authorization': `AAAAAAAAAAAAAAAAAAAAAP1OuwEAAAAAobKb%2BeGlPhVmJ8wBPNZZgL7NQ4A%3D0oMXBy1TrPadEUDe6UmYI4XQSKnQtbNej8i0BZrVDBYuS2qL8n`,
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (!res.ok) {
                    throw Error("couldn't fetch data, kindly reload")
                }
                return res.json();
            })
            .then(data =>{
    
                setTweetDetails( prev => prev = {...prev, 
                    tweetText: data.data.text,
                    images: data.includes.media && data.includes.media.map(media => media.url),
                    author: data.includes.users[0].username,
                    profilePic: data.includes.users[0].profile_image_url
                })
                setTextArray( prev =>{
                    let newState = prev ? [...prev] : [];
                    newState.push({
                        text: data.data.text, 
                        color: "#000000", 
                        font: "Arial", 
                        textSize: 16, 
                        isBold: false, 
                        isCollapsed: true
                    });
                    newState.push({
                        text: data.data.author.username, 
                        color: "#000000", 
                        font: "Arial", 
                        textSize: 16, 
                        isBold: false, 
                        isCollapsed: true
                    });
                    return newState;
                })
            })
            .catch( err => {
                setErrorMessage( prev => prev = err.message)
            })
        }else{
            setErrorMessage("pls input a valid tweet link")
        }

        

    }


    return(
        <>
            <h1 className='text-5xl text-center font-bold my-6'>Tweet Editor</h1>
            <div className="wrapper mb-10 max-w-[1200px] mx-auto mt-10 px-4 flex flex-col items-center">
                <div className="mb-4 md:w-[400px] w-[300px] ">
                    <div className="flex gap-2 items-end">
                        <div className="w-full">
                            <label className="block text-[#776e6e]" htmlFor="tweet-link">Paste Tweet Link</label>
                            <input className="p-2 rounded-lg outline outline-2 outline-text focus:outline-accent text-text w-full" type="text" name="tweet-link" id="tweet-link" value={tweetLink} onChange={handleTweetLink} />
                        </div>
                        <button onClick={getTweetInfo} className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent">Get Tweets</button>
                    </div>
                    <p className="text-sm text-[#e92d20]">{errorMessage}</p>
                </div>

                <div style={{ background: bgColor }} className="meme-image md:w-[400px] w-[300px] h-[250px] p-2 mb-4 text-text border-4 rounded-[10px] bg-gray border-accent shadow-lg relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-[#0000003f] font-bold block">{brandName} <img className="inline rounded-full" src={brandImage.url || heroImg} width="30px" /></span>
                    <div className="w-[80%] h-[80%] m-auto">
                        <div className="user flex gap-3">
                            {textArray && <img className="w-10 h-10 object-cover rounded-full" src={tweetDetails.profilePic} alt="" />}
                            <p className="font-bold">{textArray && textArray[1]}</p>
                        </div>
                        <div className="content">
                            <p className="mb-2">{textArray && textArray[0]}</p>
                            {textArray && tweetDetails.images.map(image => <img src={image} alt="" />)}
                        </div>
                    </div>
                </div>

                <div className="actions md:w-[400px] w-[300px]">
                <div className="actions-menu">
                        <ul className="flex">
                            {["Background","Text", "Branding"].map((item, index) => (
                                <li key={index} onClick={handleActiveTab} className={`tab-control basis-96 cursor-pointer text-center font-semibold border-b-2 ${item === "BG" && "text-accent"}`}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="tab-container md:w-[400px] w-[300px] max-h-[255px] scrollbar overflow-x-hidden overflow-y-scroll py-4">
                        <div className={`grid grid-cols-4-cols ${translateValue}`}>
                            <div className="actions-menu_control bg-color md:w-[400px] w-[300px]">
                                <div>
                                    <label className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer mx-auto block" htmlFor="bg-color">Choose Color</label>
                                    <input value={bgColor} className="hidden" onChange={handleBgColor} type="color" name="bg-color" id="bg-color" />
                                </div>
                            </div>
                            <div className="actions-menu_control text md:w-[400px] w-[300px]">
                                {textArray && textArray.map( (text, index) =>{
                                    <div key={index} data-index={index} className="new-text pb-4 mb-4 border-b border-b-gray overflow-y-hidden transition-all" style={text.isCollapsed ? { height: "75px" } : { height: "auto" }}>
                                        <div className="mb-4 flex items-end gap-1">
                                            <div className="basis-[50%] md:basis-[80%] ">
                                                <label className="block text-[#776e6e]">Text here</label>
                                                <input disabled data-index={index} className="p-2 rounded-lg outline outline-2 outline-text focus:outline-accent text-text w-full" type="text" value={text.text} />
                                            </div>
                                            <div className="flex gap-1">
                                                <button data-index={index} onClick={handleIsCollapsed} className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer">Edit</button>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div className="">
                                                <label className="px-4 py-2 whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray block hover:text-accent cursor-pointer" htmlFor="text-color"><img src={palette} width={100} /></label>
                                                <input data-index={index} className="hidden" type="color" name="text-color" id="text-color" value={text.color} onChange={handleTweetColor} />
                                            </div>
                                            <div className="basis-[40%]">
                                                <select data-index={index} onChange={handleTweetFont} className="p-2 w-full rounded-lg outline outline-2 outline-text focus:outline-accent text-text" name="text-font" id="text-font">
                                                    <option disabled value="Font">Font</option>
                                                    {fonts.current.map((font, index) => <option key={index} value={font}>{font}</option>)}
                                                </select>
                                            </div>
                                            <div className="basis-[30%]">
                                                <label htmlFor="font-size">Size</label>
                                                <input data-index={index} onInput={handleTweetTextSize} max={32} min={8} value={text.textSize} step={1} type="range" name="font-size" id="font-size" />
                                            </div>
                                            <button onClick={handleIsBold} data-index={index} style={{ fontWeight: text.isBold ? "bolder" : "normal" }} className="px-4 py-2 w-fit whitespace-nowrap bg-gray text-text font-bold rounded-md cursor-pointer">B</button>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="actions-menu_control branding md:w-[400px] w-[300px]">
                                <div>
                                    <label className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer mx-auto block" htmlFor="img-logo">Choose your brand Logo/image</label>
                                    <input type="file" name="img-logo" id="img-logo" className="hidden" onChange={handleBrandImage} />
                                </div>
                                <p className="text-center my-4">OR</p>
                                <div className="text-center">
                                    <label htmlFor="text-logo" className="block text-center font-bold mb-2">Brand Name</label>
                                    <input className="p-3 w-full rounded-lg outline outline-2 outline-text focus:outline-accent text-text" type="text" placeholder={brandName} onChange={handleBrandName} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <a className='px-4 py-2 w-fit whitespace-nowrap bg-gray text-text font-bold rounded-md hover:bg-accent hover:text-gray mr-2' href="" download>Download</a>
                    <a className='px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent' href="">Share to WhatsApp</a>
                </div>
            </div>
        </>
    )
}

export default TweetEditor;