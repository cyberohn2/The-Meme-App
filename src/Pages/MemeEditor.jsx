import { useRef } from "react"
import { useState } from "react"

const MemeEditor = () =>{
    const [translateValue, setTranslateValue] = useState("translate-x-0")
    const [brandName, setBrandName] = useState("Created with T.M.A")
    const handleActiveTab = (e) =>{
        const tabControl = document.querySelectorAll(".tab-control")
        tabControl.forEach((control) =>{
            control.classList.remove("text-accent")
        })
        e.target.classList.add("text-accent")

        const activeTab = e.target.textContent

        switch (activeTab) {
            case "BG":
                setTranslateValue("translate-x-0")
                break;
            case "Text":
                setTranslateValue("-translate-x-[400px]")
                break;
            case "Branding":
                setTranslateValue("-translate-x-[800px]")
                break;
            default:
                break;
        }

    }
    const handleBrandName = (e) =>{
        setBrandName(e.target.value)
    }


    return(
        <>
            <h1 className='text-5xl text-center font-bold my-6'>Meme Maker</h1>
            <div className="wrapper mb-10 max-w-[1200px] mx-auto mt-10 px-4 flex flex-col items-center">
                <div className="mb-4">
                    <label htmlFor="meme-img" className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer">Choose Background Image</label>
                    <input className="hidden" type="file" name="meme-img" id="meme-img"  />
                </div>

                <div className="meme-image w-[400px] h-[200px] p-2 mb-4 text-text border-4 rounded-[10px] bg-gray  border-accent shadow-lg relative">
                    <span className="absolute top-2 right-2 text-[#0000002c] font-bold ">{brandName} <img src={brandName} /></span>
                    <p className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">Type a meme here |</p>
                </div>

                <div className="actions max-w-[400px]">
                    <div className="actions-menu max-w-[400px]">
                        <ul className="flex">
                            {["BG", "Text", "Branding"].map( item =><li onClick={handleActiveTab} className={`tab-control basis-96 cursor-pointer text-center font-semibold border-b-2 ${item == "BG" && "text-accent"}`}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="tab-container max-w-[400px] overflow-hidden py-4">
                    <div className={` grid grid-cols-3-cols ${translateValue}`}>
                        <div className="actions-menu_control bg-color w-[400px]">
                            <div>
                                <label htmlFor="bg-color">Choose Color</label>
                                <div>
                                    <p>*Selecting a color will remove image</p>
                                    <input type="color" name="bg-color" id="bg-color" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="img-pattern">Make Pattern</label>
                                    <button>Pattern <span>Off</span></button>
                                </div>
                                <input disabled type="range" name="img-pattern" id="img-pattern" />
                            </div>
                            <div>
                                <label htmlFor="bg-size">Resize Background</label>
                                <div>
                                    <label htmlFor="bg-cover">Cover</label>
                                    <input type="radio" name="bg-cover" id="bg-cover" />

                                    <label htmlFor="bg-contain">Contain</label>
                                    <input type="radio" name="bg-contain" id="bg-contain" />

                                    <label htmlFor="bg-size">Custom size</label>
                                    <input disabled type="range" name="bg-size" id="bg-size" />
                                </div>
                            </div>
                        </div>
                        <div className="actions-menu_control text w-[400px]">
                        <div className="new-text">
                                <label>Enter Meme Text</label>
                                <input type="text" placeholder="Something funny"/>
                                <div>
                                    <div>
                                        <label htmlFor="text-color">Color</label>
                                        <input type="color" name="text-color" id="text-color" />
                                    </div>
                                    <div>
                                        <label htmlFor="text-font">Font Type</label>
                                        <select name="text-font" id="text-font">
                                            <option value="Select Font">Select Font</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>Add Text</p>
                            </div>
                        </div>
                        <div className="actions-menu_control branding w-[400px]">
                            <div>
                                <label className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer mx-auto block" htmlFor="img-logo">Choose your brand Logo/image</label>
                                <input type="file" name="img-logo" id="img-logo" className="hidden" />
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
                    <a href="" download>Download</a>
                    <a href="">Share to WhatsApp</a>
                </div>
            </div>
        </>
    )
}

export default MemeEditor;