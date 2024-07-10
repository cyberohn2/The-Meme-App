import { useEffect, useRef, useState } from "react";
import palette from "../assets/palette.svg";
import heroImg from "/hero-img.png";
import useDrag from "../useDrag";

const MemeEditor = () => {
    const [bgColor, setBgColor] = useState("#ffffff");
    const [translateValue, setTranslateValue] = useState("translate-x-0");
    const [memeImages, setImages] = useState([]);
    const [brandName, setBrandName] = useState("Created with T.M.A");
    const [brandImage, setBrandImage] = useState({
        file: null,
        url: ""
    });
    const [memeArray, setMemeArray] = useState([{
        text: "Type a meme here", 
        color: "#000000", 
        font: "Arial", 
        textSize: 16, 
        isBold: false, 
        isCollapsed: true
    }]);

    const fonts = useRef([
        "Arial", "Calibri", "Times New Roman", "Helvetica", "Sans-Serif", "Verdana", "Georgia", "Courier New", "Trebuchet MS", "Comic Sans", "Impact", "Lucida Console", "Monaco", "Brush Script MT", "Segoe UI", "Open Sans", "Lato", "Merriweather", "Playfair Display", "Ubuntu", "Garamond", "Bodoni", "Didot", "Futura", "Avant Garde", "Gill Sans", "Lobster", "Pacifico", "Dancing Script", "Museo", "Rockwell", "Arial Black", "Courier", "Franklin Gothic Medium", "Lucida Sans Unicode"
    ]);

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
            case "Text":
                setTranslateValue("translate-x-0");
                break;
            case "Image":
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

    const handleMemeText = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setMemeArray(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                text: e.target.value
            };
            return newState;
        });
    };

    const handleMemeFont = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setMemeArray(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                font: e.target.value
            };
            return newState;
        });
    };

    const handleMemeColor = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setMemeArray(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                color: e.target.value
            };
            return newState;
        });
    };

    const handleMemeTextSize = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setMemeArray(prev => {
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
        setMemeArray(prev => {
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
        setMemeArray(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                isCollapsed: !newState[index].isCollapsed
            };
            return newState;
        });
    };

    const handleAddNewMemeText = () => {
        setMemeArray(prev => [...prev, {
            text: "Type a meme here", 
            color: "#000000", 
            font: "Arial", 
            textSize: 16, 
            isBold: false, 
            isCollapsed: true
        }]);
    };

    const handleDeleteMemeText = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        if (index !== 0 || memeArray.length > 1) {
            setMemeArray(prev => prev.filter((_, i) => i !== index));
        }
    };

    const handleUploadMemeImage = (e) => {
        if (e.target.files[0]) {
            setImages(prev => {
                let newState = prev ? [...prev] : [];
                newState.push({
                    file: e.target.files[0],
                    url: URL.createObjectURL(e.target.files[0]),
                    size: 50
                });
                return newState;
            });
        }
    };

    const handleMemeImageSize = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        const newSize = Number(e.target.value);
        setImages(prev => {
            const newState = [...prev];
            newState[index] = {
                ...newState[index],
                size: newSize
            };
            return newState;
        });
    };
    const handleDeleteMemeImage = (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        setImages(prev => prev.filter((_, i) => i !== index));
    };
    useEffect(() =>{
        const texts = document.querySelectorAll(".meme-text")
        memeImages && useDrag(texts)
    }, [memeArray, memeImages])
    
    
    // handle is collapsed is not working - done
// want to bold text option - done
// want to add brand image - done
// want to add meme images tab - done
// want to bg image - done
// want to style action btns - done
// want to make responsive - done
// want to add text/image move around feature

    return (
        <>
            <h1 className='text-5xl text-center font-bold my-6'>Meme Maker</h1>
            <div className="wrapper mb-10 max-w-[1200px] mx-auto mt-10 px-4 flex flex-col items-center">
                <div className="mb-4">
                    <label htmlFor="meme-img" className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer">Background Color</label>
                    <input onChange={handleBgColor} className="hidden" type="color" name="meme-img" id="meme-img" value={bgColor} />
                </div>

                <div style={{ background: bgColor }} className="meme-image md:w-[400px] w-[300px] h-[350px] p-2 mb-4 text-text border-4 rounded-[10px] bg-gray border-accent shadow-lg relative overflow-hidden">
                    <span className="absolute top-2 right-2 text-[#0000003f] font-bold block">{brandName} <img className="inline rounded-full" src={brandImage.url || heroImg} width="30px" /></span>
                    {memeArray.map((meme, index) => (
                        <input key={index} type="text" onChange={handleMemeText} data-index={index} value={meme.text} style={{ color: meme.color, fontFamily: meme.font, fontSize: `${meme.textSize}px`, fontWeight: meme.isBold ? "bolder" : "normal" }} className="meme-text outline-none absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-center bg-[transparent] text-sm" />
                    ))}
                    {memeImages && memeImages.map((image, index) => (
                        <img key={index} src={image.url} style={{ width: `${image.size}px`, height: `${image.size}px` }} />
                    ))}
                </div>

                <div className="actions md:w-[400px] w-[300px]">
                    <div className="actions-menu]">
                        <ul className="flex">
                            {["Text", "Image", "Branding"].map((item, index) => (
                                <li key={index} onClick={handleActiveTab} className={`tab-control basis-96 cursor-pointer text-center font-semibold border-b-2 ${item === "BG" && "text-accent"}`}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="tab-container md:w-[400px] w-[300px] max-h-[255px] scrollbar overflow-x-hidden overflow-y-scroll py-4">
                        <div className={`grid grid-cols-4-cols ${translateValue}`}>
                            <div className="actions-menu_control text md:w-[400px] w-[300px]">
                                {memeArray.map((meme, index) => (
                                    <div key={index} data-index={index} className="new-text pb-4 mb-4 border-b border-b-gray overflow-y-hidden transition-all" style={meme.isCollapsed ? { height: "75px" } : { height: "auto" }}>
                                        <div className="mb-4 flex items-end gap-1">
                                            <div className="basis-[50%] md:basis-[80%] ">
                                                <label className="block text-[#776e6e]">Text here</label>
                                                <input data-index={index} className="p-2 rounded-lg outline outline-2 outline-text focus:outline-accent text-text w-full" type="text" onChange={handleMemeText} value={meme.text} />
                                            </div>
                                            <div className="flex gap-1">
                                                <button data-index={index} onClick={handleIsCollapsed} className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer">Edit</button>
                                                <button data-index={index} onClick={handleDeleteMemeText} className="px-4 py-2 w-fit whitespace-nowrap bg-[#e92d20] text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer">Delete</button>
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div className="">
                                                <label className="px-4 py-2 whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray block hover:text-accent cursor-pointer" htmlFor="text-color"><img src={palette} width={100} /></label>
                                                <input data-index={index} className="hidden" type="color" name="text-color" id="text-color" value={meme.color} onChange={handleMemeColor} />
                                            </div>
                                            <div className="basis-[40%]">
                                                <select data-index={index} onChange={handleMemeFont} className="p-2 w-full rounded-lg outline outline-2 outline-text focus:outline-accent text-text" name="text-font" id="text-font">
                                                    <option disabled value="Font">Font</option>
                                                    {fonts.current.map((font, index) => <option key={index} value={font}>{font}</option>)}
                                                </select>
                                            </div>
                                            <div className="basis-[30%]">
                                                <label htmlFor="font-size">Size</label>
                                                <input data-index={index} onInput={handleMemeTextSize} max={32} min={8} value={meme.textSize} step={1} type="range" name="font-size" id="font-size" />
                                            </div>
                                            <button onClick={handleIsBold} data-index={index} style={{ fontWeight: meme.isBold ? "bolder" : "normal" }} className="px-4 py-2 w-fit whitespace-nowrap bg-gray text-text font-bold rounded-md cursor-pointer">B</button>
                                        </div>
                                    </div>
                                ))}
                                <div>
                                    <button onClick={handleAddNewMemeText} className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer mx-auto block">Add Text</button>
                                </div>
                            </div>
                            <div className="actions-menu_control images md:w-[400px] w-[300px]">
                                <div>
                                    {memeImages.map((image, index) => (
                                        <div className="flex gap-4 items-end p-2 border-b border-b-gray" key={index}>
                                            <img src={image.url} className="rounded-sm w-7 h-7 object-cover" />
                                            <div>
                                                <label className="block text-sm text-[gray]" htmlFor="">Adjust size</label>
                                                <input data-index={index} className="text-text" onChange={handleMemeImageSize} max={400} min={50} value={image.size} type="range" name="font-size" id="font-size" />
                                            </div>
                                            <button data-index={index} onClick={handleDeleteMemeImage} className="px-4 py-2 w-fit whitespace-nowrap bg-[#e92d20] text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer">Delete</button>
                                        </div>
                                    ))}
                                </div>
                                <label htmlFor="meme-image" className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer mt-4 mx-auto block">Add Image</label>
                                <input type="file" name="meme-image" id="meme-image" className="hidden" onChange={handleUploadMemeImage} />
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
    );
};

export default MemeEditor;
