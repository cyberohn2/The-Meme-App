import downloadIcon from '../assets/download.svg'
import shareIcon from '../assets/share.svg'

const MemeBox = ({image, caption}) => {
    return(
        <div className="memebox shadow-2xl shadow-[#000000be] sh rounded-lg p-3 bg-[#010302]">
            <div className="rounded-md mb-4 overflow-hidden h-36" style={{backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                {/* <img className='w-full' src={image} alt="" /> */}
            </div>
            <p className="caption text-[#ecf8f5] font-semibold mb-4">{caption}</p>
            <div className="divider border-t border-[#a7b8b3] mb-4 "></div>
            <div className='text-[#6d7a77] flex items-center gap-2 text-sm font-semibold'>
                <a href={image} download className='flex items-center gap-1 hover:text-text'><img width={10} src={downloadIcon} alt="" /><p>Download</p></a>
                <button className='flex items-center gap-1 hover:text-text'><img width={10} src={shareIcon} alt="" /><p>Caption</p></button>
            </div>
        </div>
    )
}

export default MemeBox;