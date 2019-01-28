loadCard = n => {
    if(!n) {
        n = 5;
    }
    for(var i = 0; i < n; i++) {
        document.getElementsByClassName("container").item(0).appendChild(card());   
    }
    cards.reverse();
    cards.forEach((card,index) => { 
        let timer = 500;
        // card.style.display = "none";
        card.style.display = "block";
        setTimeout(() => { 
            card.classList.add("move-in");
        },timer*index);
       
    });
    cards[(n-1)].addEventListener("transitionend", ()=>{
        cards[0].classList.add("flip");
        cards[0].addEventListener("transitionend", () => {
            cards[0].classList.add("ferry");
            // cards[0].addEventListener("touchend", event => {
            //     cards[0].classList.remove("ferry");
            // }, false);
        });
    cards.forEach(card => {
        const touch = event => {
            // event.preventDefault();
            // console.log(card.classList.contains("ferry") )
            // card.classList.contains("ferry") ? 
            // card.classList.remove("ferry"): null;
            if(event.targetTouches.length === 1){ 

                //(start)
                let touchPoint = event.targetTouches[0];//獲取觸摸的初始位置 touchPoint.clientX & touchPoint.clientY
                let startX = touchPoint.pageX; 
                let startY = touchPoint.pageY;
                let shiftX = touchPoint.clientX - card.getBoundingClientRect().left;
                let shiftY = touchPoint.clientY - card.getBoundingClientRect().top;

                card.style.left = 150 + touchPoint.pageX - shiftX + 'px';
                card.style.top = 225 + touchPoint.pageY - shiftY + 'px';
                card.classList.remove("move-in");
    
                // centers the card at (pageX, pageY) coordinates
                const moveAt = (pageX, pageY) => {
                    let maxShiftX = 20;
                    let maxShiftY = 20;
                    // (pageX - startX) > 
                    card.style.left = 150 + pageX - shiftX + 'px';
                    card.style.top = 225 + pageY - shiftY + 'px';
                }
    
                moveAt(touchPoint.pageX, touchPoint.pageY);
                
                // move the card on mousemove
                document.ontouchmove = event => {
                    // event.preventDefault();
                    let touchPoint = event.targetTouches[0]
                    console.log(card)
                    moveAt(touchPoint.pageX, touchPoint.pageY);
                    
                }
            
                // drop the card, remove unneeded handlers
                document.ontouchend = () => {
                    document.ontouchend = null;
                    document.ontouchmove = null;
                }
            }
        }
        card.addEventListener("touchstart", touch, false);
    });
});

}
   
