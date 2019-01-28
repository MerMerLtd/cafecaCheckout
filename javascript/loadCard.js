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
        });
    });
}
   
