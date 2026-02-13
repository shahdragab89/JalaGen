window.onload = function() {

  const startBtn = document.getElementById("startBtn");
  const restartBtn = document.getElementById("restartBtn");
  const gameContainer = document.getElementById("game");
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");
  const winMessage = document.getElementById("winMessage");


    const images = [
  "Water.jfif","Water.jfif",
  "River.jfif","River.jfif",
  "Waste.jfif","Waste.jfif",
  "Rain.jfif","Rain.jfif",
  "Ice.jfif","Ice.jfif",
  "Water pollution.jfif","Water pollution.jfif"
];

  let firstCard = null;
  let secondCard = null;
  let lock = false;
  let score = 0;
  let time = 0;
  let timer = null;
  let matches = 0;

  function shuffle(array){ return array.sort(()=>Math.random()-0.5); }

  function createCards(){
    gameContainer.innerHTML = "";
    firstCard=null; secondCard=null; lock=false; matches=0;
    score=0; scoreDisplay.innerText=score;

    let gameCards = [];
    images.forEach(img=>gameCards.push(img,img));
    shuffle(gameCards).forEach(imgName=>{
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front"></div>
          <div class="card-back"><img src="images/${imgName}"></div>
        </div>
      `;
      card.addEventListener("click", ()=>flipCard(card,imgName));
      gameContainer.appendChild(card);
    });
  }

  function flipCard(card,imgName){
    if(lock || card===firstCard?.card) return;
    card.classList.add("flip");
    if(!firstCard){ firstCard={card,imgName}; return; }
    secondCard={card,imgName};
    checkMatch();
  }

  function checkMatch(){
    lock=true;
    if(firstCard.imgName===secondCard.imgName){
      score++; matches++;
      scoreDisplay.innerText=score;
      resetCards();
      if(matches===images.length){
        winMessage.classList.add("show");
        clearInterval(timer);
      }
    } else {
      setTimeout(()=>{
        firstCard.card.classList.remove("flip");
        secondCard.card.classList.remove("flip");
        resetCards();
      },800);
    }
  }

  function resetCards(){ firstCard=null; secondCard=null; lock=false; }

  function startTimer(){
    time=0; timeDisplay.innerText=time;
    if(timer) clearInterval(timer);
    timer=setInterval(()=>{ time++; timeDisplay.innerText=time; },1000);
  }

  startBtn.addEventListener("click", ()=>{
    winMessage.classList.remove("show");
    createCards();
    startTimer();
  });

  restartBtn.addEventListener("click", ()=>{
    winMessage.classList.remove("show");
    createCards();
    startTimer();
  });

  
  function createBubbles(num){
    for(let i=0;i<num;i++){
      const bubble = document.createElement("div");
      bubble.className="bubble";
      bubble.style.left = Math.random()*window.innerWidth + "px";
      const size = 10 + Math.random()*30;
      bubble.style.width = bubble.style.height = size + "px";
      bubble.style.animationDuration = (4 + Math.random()*4) + "s";
      document.body.appendChild(bubble);
      bubble.addEventListener("animationend", ()=>bubble.remove());
    }
  }
  setInterval(()=>createBubbles(3),500); 
}
