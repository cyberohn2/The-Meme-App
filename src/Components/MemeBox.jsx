import downloadIcon from '../assets/download.svg'
import shareIcon from '../assets/share.svg'

const MemeBox = ({image, caption, author, postLink, id}) => {
    const handleCopy = (e) =>{
        navigator.clipboard.writeText(caption)
        e.target.textContent = "Copied!"
        setTimeout(() => {
            e.target.textContent = "Caption"
        }, 2000);
    }

    return(
        <div key={id} className="memebox shadow-xl border border-[#585e5c] rounded-lg p-3 bg-[#1d1f1e]">
            <div className="rounded-md mb-4 overflow-hidden h-36" style={{backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* <img className='w-full' src={image} alt="" /> */}
            </div>
            <a href={postLink} className='text-sm text-accent font-semibold'>By: {author}</a>
            <p className="caption text-[#ecf8f5] font-semibold mb-4">{caption}</p>
            <div className="divider border-t border-[#a7b8b3] mb-4 "></div>
            <div className='text-[#6d7a77] flex items-center gap-2 text-sm font-semibold mt-auto'>
                <a href={image} download={caption} className='flex items-center gap-1 hover:text-gray'><img width={10} src={downloadIcon} alt="" /><p>Download</p></a>
                <button onClick={handleCopy} className='flex items-center gap-1 hover:text-gray'><img width={10} src={shareIcon} alt="" /><p>Caption</p></button>
            </div>
        </div>
    )
}

export default MemeBox;