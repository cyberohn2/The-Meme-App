
const MemeEditor = () =>{
    return(
        <>
            <h1>Meme Maker</h1>
            <div className="wrapper">
                <div>
                    <label htmlFor="meme-img">Choose Background Image</label>
                    <input type="file" name="meme-img" id="meme-img"  />
                </div>

                <div className="meme-image">
                    <p>Hey There</p>
                </div>

                <div className="actions">
                    <div className="actions-menu">
                        <ul>
                            <li>BG</li>
                            <li>Text</li>
                            <li>Branding</li>
                        </ul>
                    </div>
                    <div>
                        <div className="actions-menu_control bg-color">
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
                        <div className="actions-menu_control text">
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
                        <div className="actions-menu_control branding">
                            <div>
                                <label htmlFor="img-logo">Image Logo</label>
                                <input type="file" name="img-logo" id="img-logo" />
                            </div>
                            <p>OR</p>
                            <div>
                                <label htmlFor="text-logo">Text Logo</label>
                                <input type="text" placeholder="Enter Name" />
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