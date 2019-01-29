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
        const addFerry = () => {
            cards[0].classList.add("ferry");
            cards[0].addEventListener("touchend", event => {
                cards[0].classList.remove("ferry");
            }, false);
            cards[0].removeEventListener("transitionend", addFerry);
        }
        cards[0].addEventListener("transitionend", addFerry, false);

        cards.forEach(card => {
            const touch = event => {
                // event.preventDefault();
                if(event.targetTouches.length === 1){ 
                    //(start)
                    let touchPoint = event.targetTouches[0];//獲取觸摸的位置 touchPoint.clientX & touchPoint.clientY
                    let startT = + new Date();
                    let isMove = false;
                    let isTouchEnd = false;
                    let startX = touchPoint.pageX; 
                    let startY = touchPoint.pageY;
                    let shiftX = touchPoint.clientX - card.getBoundingClientRect().left;
                    let shiftY = touchPoint.clientY - card.getBoundingClientRect().top;
                    let initialPosX = 0;
                    let initialPosY = 0;
                    // let currentPositionX = 0; 
                    // let currentPositionY = 0; 
                    let maxX = 50; 
                    let maxY = 50; 
                    let moveLength = 0; 
                    // initialPosX = currentPositionX;  
                    // initialPosY = currentPositionY;  

                    card.style.left =  50 + '%'; //初始位置
                    card.style.top = 50 + '%';
                    card.classList.remove("move-in");
                    // card.style.transition = 0.2 + 's'; // test
                    
                    document.ontouchmove = event => {
                        // event.preventDefault();
                        if (isTouchEnd) return ;
                        let touchPoint = event.targetTouches[0];
                        let deltaX = touchPoint.pageX - startX;
                        let deltaY = touchPoint.pageY - startY;
                        let translateX = initialPosX + deltaX;
                        let translateY = initialPosY + deltaY;

                        if(translateX > maxX){
                            translateX = maxX;
                        }
                        if(translateY > maxY){
                            translateY = maxY;
                        }
                        if(translateX < -maxX){
                            translateX = -maxX;
                        }
                        if(translateY < -maxY){
                            translateY = -maxY;
                        }
                        console.log(`translate3d(${translateX}px, ${translateY}px, 0)`);
                        card.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
                        // card.style.left = 150 + touchPoint.pageX - shiftX + 'px';
                        // card.style.top = 225 + touchPoint.pageY - shiftY + 'px';
                        
                    }
                
                    // drop the card, remove unneeded handlers
                    document.ontouchend = () => {
                        card.style.left =  50 + '%';//回到初始位置
                        card.style.top = 50 + '%';
                        document.ontouchend = null;
                        document.ontouchmove = null;
                    }
                }
            }
            if(card.classList.contains("flip")){
                card.addEventListener("transitionend", () => {
                    card.addEventListener("touchstart", touch, false);
                },false);
            } 
        });
    }, false);

}
   
