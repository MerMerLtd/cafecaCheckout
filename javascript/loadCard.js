// const cartBox = document.querySelector(".cart__box");
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
                    let minY = -50; 
                    let maxY = 50; 
                    let cardCoverBox = card.childNodes[1];

                    card.style.left =  50 + '%'; //初始位置
                    card.style.top = 50 + '%';
                    card.classList.remove("move-in");
                    // card.style.transition = 0.2 + 's'; // test
                    
                    document.ontouchmove = event => {
                        // event.preventDefault();
                        if (isTouchEnd) return ;
                        let touchPoint = event.targetTouches[0];
                        let angle = 0;
                        deltaX = touchPoint.pageX - startX;
                        deltaY = Math.min(Math.max(touchPoint.pageY - startY, minY), maxY);

                        if(deltaX > 0){
                            angle = 90 - Math.atan(600/Math.abs(deltaX))/Math.PI*180;
                            if(cardCoverBox.classList.contains("show--left")){
                                cardCoverBox.classList.remove("show--left");
                            }
                            cardCoverBox.classList.add("show--right");

                        }else{
                            angle = -(90 - Math.atan(600/Math.abs(deltaX))/Math.PI*180);
                            if(cardCoverBox.classList.contains("show--right")){
                                cardCoverBox.classList.remove("show--right");
                            }
                            cardCoverBox.classList.add("show--left");
                        }
                        card.style.transform = `rotate(${angle}deg)`;
                       
                        card.style.top = 225 + startY + deltaY - shiftY + 'px'; 
                        isMove = true;
                    }
                
                    // drop the card, remove unneeded handlers
                    document.ontouchend = () => { 
                        let deltaT = + new Date() - startT;
                        card.style.top = 50 + '%';
                        cardCoverBox.classList.remove("show--left"); //改add & remove class的寫法
                        cardCoverBox.classList.remove("show--right");

                        if(isMove){
                            if(deltaT < 300 || Math.abs(deltaX) > maxX){
                                card.style.transition = "1s ease-in";
                                if(deltaX > 0){
                                    card.style.transform = `rotate(90deg)`;
                                    console.log("right"); // test
                                    card.addEventListener("transitionend", ()=>{
                                        const cartBox = document.querySelector(".cart__box");
                                        cartBox.appendChild(card);
                                        // card.parentNode.removeChild(card);
                                        if(index < cards.length - 1){
                                            // console.log(cartItems);
                                            // cartItems.push(cardData[index]);
                                            // console.log(cardData[index]);
                                            // loadCart(cartItems.length);
                                            cards[index + 1].classList.add("flip--right"); //沒區別
                                        }
                                    }, false)
                                }else{
                                    card.style.transform = `rotate(-90deg)`;
                                    console.log("left") // test
                                    card.addEventListener("transitionend", ()=>{
                                        card.parentNode.removeChild(card);
                                        if(index < cards.length - 1){
                                            // console.log(cardData[index]);
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
   
