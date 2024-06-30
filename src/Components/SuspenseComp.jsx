const SuspenseComp = ({id}) =>{
    return(
        <div key={id} className="memebox shadow-xl border border-[#585e5c] rounded-lg p-3 bg-[#1d1f1e] animate-pulse">
            <div className="h-36 w-full "></div>
            <div className="h-[14px] w-[30%] animate-pulse"></div>
            <div className="h-[16px] w-full animate-pulse"></div>
        </div>
    )
}

export default SuspenseComp