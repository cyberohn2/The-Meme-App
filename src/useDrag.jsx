const useDrag = (children, parent) =>{
    let isDragging = false;
    children.forEach(child => {
        const startDrag = (e) => {
          isDragging = true;
          child.style.cursor = 'grabbing';
          
          // Prevent default touch behavior (like scrolling)
          if (e.touches) {
            e.preventDefault();
          }
        
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', endDrag);
          document.addEventListener('touchmove', onMouseMove, { passive: false });
          document.addEventListener('touchend', endDrag);
        };
        
        const onMouseMove = (e) => {
            e.preventDefault()
          if (isDragging) {
            const parentRect = parent.getBoundingClientRect();
            const childRect = child.getBoundingClientRect();
            
            let clientX, clientY;
            
            if (e.touches) {
              clientX = e.touches[0].clientX;
              clientY = e.touches[0].clientY;
            } else {
              clientX = e.clientX;
              clientY = e.clientY;
            }
            
            const newLeft = clientX - parentRect.left - childRect.width / 2;
            const newTop = clientY - parentRect.top - childRect.height / 2;
        
            // Ensure the child div stays within the parent div
            if (newLeft >= 0 && newLeft <= parentRect.width - childRect.width) {
              child.style.left = `${newLeft}px`;
            }
            if (newTop >= 0 && newTop <= parentRect.height - childRect.height) {
              child.style.top = `${newTop}px`;
            }
          }
        };
        
        const endDrag = () => {
          isDragging = false;
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', endDrag);
          document.removeEventListener('touchmove', onMouseMove);
          document.removeEventListener('touchend', endDrag);
        };
        
        child.addEventListener('mousedown', startDrag);
        child.addEventListener('touchstart', startDrag, { passive: false });
        
    });
    
}

export default useDrag;