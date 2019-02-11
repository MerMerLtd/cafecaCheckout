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
        let timer = 250;
        // card.style.display = "none";
        card.style.display = "block";
        setTimeout(() => { 
            card.classList.add("move-in");
        },timer*index);
       
    });

    let ferried = false;
     //卡片搖擺的method
    const addFerry = () => {
        if(ferried) return;
        cards[0].classList.add("ferry");
        const removeFerry = () => {
            cards[0].classList.remove("ferry");
            cards[0].removeEventListener("touchend", removeFerry);
        }
        ferried  = true;
    
        // 
        cards[0].addEventListener("touchend", removeFerry, false);
        cards[0].removeEventListener("transitionend", addFerry);
    }

    cards[(n-1)].addEventListener("transitionend", ()=>{
        //全部卡片進入畫面後翻開第一張進入的卡片
        cards[0].classList.add("flip");

        //翻開卡片後 transitionend 加入搖擺
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
                    

                    // document.ontouchmove =
                    
                    const touchmove = event => {
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

                    card.addEventListener("touchmove", touchmove, false);
                
                    // drop the card, remove unneeded handlers
                    // document.ontouchend = 
                    const touchend = () => { 
                        let deltaT = + new Date() - startT;
                        card.style.top = 50 + '%';
                        card.style.transform = `rotate(0deg)`;
                        cardCoverBox.classList.remove("show--left"); //改add & remove class的寫法
                        cardCoverBox.classList.remove("show--right");

                        if(isMove){
                            if(deltaT < 300 || Math.abs(deltaX) > maxX){
                                card.style.transition = ".5s ease-in";
                                if(deltaX > 0){
                                    console.log("right"); // test
                                    card.style.transform = `rotate(90deg)`;
                                    card.addEventListener("transitionend", (event) => {
                                        if(event.propertyName !== 'transform') return; //❤
                                        const cartBox = document.querySelector(".cart__box");
                                        // 滑動卡片加到購物車 ❤️
                                        // 購物車卡片建構子 ❤️
                                        // load 購物車  ️❤️
                                        // cartBox.appendChild(card);
                                        // card.parentNode.removeChild(card);
                                        if(index < cards.length - 1){
                                            cards[index + 1].classList.add("flip"); //沒區別
                                        }
                                    }, false)
                                }else{
                                    card.style.transform = `rotate(-90deg)`;
                                    card.addEventListener("transitionend", (event)=>{
                                        if(event.propertyName !== 'transform') return;
                                        card.parentNode.prepend(card);
                                        card.style.transform = `rotate(0deg)`;
                                        card.classList.remove("flip");
                                       
                                        console.log('Yo!');
                                        if(index < cards.length - 1){
                                            cards[index + 1].classList.add("flip");
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
                    card.addEventListener("touchend", touchend, false);
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
   
