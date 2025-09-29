console.clear()
const root = document.querySelector('root')
const input = document.querySelector('input');
 const btn = document.querySelector('button');
let cod = document.querySelector('textarea')
let help2 = document.querySelector('help2')
btn.addEventListener('click', () => {
  eval(cod.value)
 });
const help1 = document.querySelector(".help1");
    let x = 250;
   let y = 0;
   let dialogue1 = document.querySelector(".dialogue");
  
   let arrow = document.querySelector(".arrow");
    arrow.src = "none.png";


  let button = document.querySelector("button")
  button.addEventListener('click',()=>{

  })

  //async function arrowflay() {
  // for(let i = 0; i < 750; i++){
  //x += 2;
  
   //await new Promise(r => setTimeout(r, 0.001));
   
   //arrow.style.left = x + "px";
       // }
 // }
 // arrowflay();

  let index = 0;
  let isTyping = false;
  let interval = null;
  let currentText = "";
  let charIndex = 0;

 

 
  let pointsDisplay = document.querySelector('.points-box')
  let points = 0;
  pointsDisplay.textContent = "POINTS: " + points;

  const commands = [
  `let arrow = document.querySelector(".arrow");`,

  `let arrow = document.querySelector(".arrow");
  async function arrowflay() {
for(let i = 0; i < 850; i++) {
  x += 2;
  await new Promise(r => setTimeout(r, 0.001));
  arrow.style.left = x + "px";
}
}`,

  `arrowflay();`
];
 
   let dialogue2 = document.querySelector(".dial-text-lvl1");
  btn.addEventListener('click', () => {
    let userInput = cod.value

    if(commands.includes(userInput)){
      points += 33.3;
      alert('Правильна команда! +33.3 поінта')
      arrow.src = "pixil-gif-drawing (2).gif";
      emotion.src = "happy.png"
    } else {
      alert('Неправильна команда')
      emotion.src = "sad.png"
    }
    pointsDisplay.textContent = "POINTS: " + points;
  })
  let box = document.querySelector(".dialogue1");
  let emotion = document.querySelector(".emotion1")
 async function changeimg() {
    await new Promise(r => setTimeout(r, 5000));
        emotion.src = "neutral.png"
        box.src = "none.png";
        dialogue2.textContent = "";
  }

  



  changeimg();
  let apple = document.querySelector(".apple")
  async function appledelite() 
{
  
  apple.src = "pixil-gif-drawing (6).gif"
  await new Promise(r => setTimeout(r, 600));
  apple.src = "none.png"
}
if (arrow.style.left == "625px") {
  appledelite();
}
console.log(arrow.style.left);

const music = new Audio("Music fon.mp3");
  function checkCode(){ 
      let value = document.getElementById("answer").value.trim();
  }
