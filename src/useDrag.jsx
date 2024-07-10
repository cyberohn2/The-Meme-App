const useDrag = (array) =>{
    const handleMouseDown = (e) =>{
        console.log("mouseclicked",e.clientX, e.clientY)
    }
    const handleIsDragging= (e) =>{
        console.log("mousemoving",e.clientX, e.clientY)
    }
    const handleMouseUp = (e) =>{
        console.log("mousemoving",e.clientX, e.clientY)
    }

    array.forEach(element => {
        element.addEventListener('mousedown',handleMouseDown)       
        element.addEventListener('touchstart',handleMouseDown)       
        element.addEventListener('mouseup', handleMouseUp)       
        element.addEventListener('touchend', handleMouseUp)       
        element.addEventListener('mousemove', handleIsDragging)       
        element.addEventListener('touchmove', handleIsDragging)       
        element.addEventListener('mouseleave', handleMouseUp)   
    });
}

export default useDrag;