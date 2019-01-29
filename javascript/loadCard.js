loadCard = n => {
    if(!n) {
        n = 5;
    }
    for(var i = 0; i < n; i++) {
        document.getElementsByClassName("container").item(0).appendChild(card());   
    }
    cards.reverse();
    cardData.reverse();
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

        cards.forEach((card, index) => {
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
                    let deltaX = 0;
                    let deltaY = 0;
                  
                    let maxX = 50; 
                    let maxY = 50; 

                    card.style.left =  50 + '%'; //初始位置
                    card.style.top = 50 + '%';
                    card.classList.remove("move-in");
                    card.style.transition = 0.2 + 's'; // test
                    
                    document.ontouchmove = event => {
                        // event.preventDefault();
                        if (isTouchEnd) return ;
                        let touchPoint = event.targetTouches[0];
                        let angle = 0;
                        deltaX = touchPoint.pageX - startX;
                        deltaY = touchPoint.pageY - startY;
                        
                        if(deltaX > 0){
                            angle = 90 - Math.atan(600/Math.abs(deltaX))/Math.PI*180;
                            card.childNodes[2].style.transition = "0.5s";
                            card.childNodes[2].style.opacity = "1";
                            card.childNodes[2].style.top = "0px";
                            card.childNodes[1].style.opacity = "0%";
                            card.childNodes[1].style.top = "-120px";
                        }else{
                            angle = -(90 - Math.atan(600/Math.abs(deltaX))/Math.PI*180);
                            card.childNodes[1].style.transition = "0.5s";
                            card.childNodes[1].style.opacity = "1";
                            card.childNodes[1].style.top = "0px";
                            card.childNodes[2].style.opacity = "0%";
                            card.childNodes[2].style.top = "-120px";
                        }
                        card.style.transform = `rotate(${angle}deg)`;
                        // console.log(`rotate(${angle} deg)`); //test
                        // card.style.left = 150 + touchPoint.pageX - shiftX + 'px';
                        card.style.top = 225 + touchPoint.pageY - shiftY + 'px';
                        isMove = true;
                    }
                
                    // drop the card, remove unneeded handlers
                    document.ontouchend = () => { 
                        let deltaT = + new Date() - startT;
                        card.style.top = 50 + '%';
                        card.childNodes[1].style.opacity = "0%";
                        card.childNodes[1].style.top = "-120px";
                        card.childNodes[2].style.opacity = "0%";
                        card.childNodes[2].style.top = "-120px";
                        if(isMove){
                            if(deltaT < 300 || Math.abs(deltaX) > maxX){
                                card.style.transition = "1s ease-in";
                                if(deltaX > 0){
                                    card.style.transform = `rotate(90deg)`;
                                    console.log("right"); // test
                                    card.addEventListener("transitionend", ()=>{
                                        card.parentNode.removeChild(card);
                                        if(index < cards.length - 1){
                                            console.log(cardData[index]);
                                            cards[index + 1].classList.add("flip--right"); //沒區別
                                        }
                                    }, false)
                                }else{
                                    card.style.transform = `rotate(-90deg)`;
                                    console.log("left") // test
                                    card.addEventListener("transitionend", ()=>{
                                        card.parentNode.removeChild(card);
                                        if(index < cards.length - 1){
                                            console.log(cardData[index]);
                                            cards[index + 1].classList.add("flip--left");
                                        }
                                    }, false)
                                }
                            }else{
                                card.style.transform = `rotate(0deg)`;
                            }
                        }
                        document.ontouchend = null;
                        document.ontouchmove = null;
                    }
                }
            }
            // if(card.classList.contains("flip")){
                card.addEventListener("transitionend", () => {
                    card.addEventListener("touchstart", touch, false);
                },false);
            // } 
        });
    }, false);

}
   
