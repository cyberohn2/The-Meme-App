const MemeBox = ({image, caption}) => {
    return(
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <p className="caption">{caption}</p>
            <div>
                <a href={image} download>Download</a>
                <button >Caption</button>
            </div>
        </div>
    )
}

export default MemeBox;