const SuspenseComp = ({key, id}) =>{
    return(
        <div key={key} className="memebox shadow-xl border border-[#585e5c] rounded-lg p-3 bg-[#1d1f1e]">
            <div className="h-36 w-full animate-pulse"></div>
            <div className="h-[14px] w-[30%] animate-pulse"></div>
            <div className="h-[16px] w-full animate-pulse"></div>
        </div>
    )
}

export default SuspenseComp