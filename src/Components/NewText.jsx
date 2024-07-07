const NewText = ({text, color, font}) =>{
    return(
        <div className="new-text mb-4 h-[45px] overflow-y-hidden">
        <div className="mb-4 flex items-center gap-4">
            <label className="basis-[20%]">Text here</label>
            <input className="p-2 basis-[80%] rounded-lg outline outline-2 outline-text focus:outline-accent text-text" type="text" placeholder="Something funny" value={meme.text}/>
        </div>
        <div className="flex gap-4 items-center">
            <div className="">
                <label className="px-4 py-2 w-fit whitespace-nowrap bg-accent text-gray font-bold rounded-md hover:bg-gray hover:text-accent cursor-pointer" htmlFor="text-color">Color</label>
                <input className="hidden" type="color" name="text-color" id="text-color" value={meme.color} />
            </div>
            <div className="basis-[80%]">
                <select className="p-2 w-full rounded-lg outline outline-2 outline-text focus:outline-accent text-text" name="text-font" id="text-font">
                    <option value="Select Font">Select Font</option>
                    <option selected value={meme.font}>{meme.font}</option>
                </select>
            </div>
        </div>
    </div>
    )
}

export default NewText;