
const root = document.querySelector('root')
const input = document.querySelector('input');
 const btn = document.querySelector('button');
let cod = document.querySelector('textarea')
let help2 = document.querySelector('help2')
let levelbox = document.querySelector('.level-box')
btn.addEventListener('click', () => {
  eval(cod.value)
 });
const help1 = document.querySelector(".help1");
    let x = 250;
   let y = 0;
   let dialogue1 = document.querySelector(".dialogue");
  
   let arrow = document.querySelector(".arrow");
    arrow.src = "none.png";
  // async function arrowflay() {
  //  for(let i = 0; i < 750; i++){
   //  x += 2;
   // await new Promise(r => setTimeout(r, 0.001));
    //arrow.style.left = x + "px";
       // }
 // }
 // arrowflay();
  let index = 0;
  let l = 1;
  let isTyping = false;
  let interval = null;
  let currentText = "";
  let charIndex = 0;
  let usedCommands = new Set();
  let pointsDisplay = document.querySelector('.points-box')
  let points = 0;



  const commands = [
  `let arrow = document.querySelector(".arrow");`];
const commands2 = [
  `let arrow = document.querySelector(".arrow");
  function arrowfly() {
        for(let i = 0; i < 750; i++) {
            x += 2;
        arrow.style.left = x + "px" }}`];
        let commands3 = [`let arrow = document.querySelector(".arrow");
          async function arrowfly() {
    for(let i = 0; i < 750; i++){
     x += 2;
    await new Promise(r => setTimeout(r,0.001));
    arrow.style.left = x + "px";
        }}
    arrowfly();`]
   let dialogue2 = document.querySelector(".dial-text-lvl1");
  btn.addEventListener('click', () => {
   
if (points>0  && commands.includes(cod.value) ){
alert(`Ви вже використовували цю команду!`)
    }
    if (points == 0 && commands.includes(cod.value)){
  points += 33.3;
      alert('Правильна команда! +33.3 поінта')
      emotion.src = "happy.png"
      levelbox.textContent = "LEVEL: 2"
      arrow.src = "pixil-gif-drawing (2).gif";
      l = 2;
      console.log(l);

     if (points == 0 && !commands.includes(cod.value)) {
      alert('Неправильна команда')
      emotion.src = "sad.png"
     }
pointsDisplay.textContent = "POINTS: " + points;

   
  }

})
btn.addEventListener('click', () => {
   
if (points == 66.6  && commands2.includes(cod.value) ){
alert(`Ви вже використовували цю команду!`)
    }
    if (points == 33.3 && commands2.includes(cod.value)){
  points += 33.3;
      alert('Правильна команда! +33.3 поінта')
     
      emotion.src = "happy.png"
      levelbox.textContent = "LEVEL: 3"
      l = 3;
      console.log(l);

     if (points == 33.3 && !commands2.includes(cod.value)) {
      alert('Неправильна команда')
      emotion.src = "sad.png"
     }
pointsDisplay.textContent = "POINTS: " + points;

   
  }

})
btn.addEventListener('click', () => {
  if (points == 66.6 && commands3.includes(cod.value)){
  points += 33.3;
  l = 4;
  console.log(l);
      alert('Правильна команда! +33.3 поінта! Це все, дякую що пограли! :)')
      appledelite()
     levelbox.textContent = "VICTORY!"
      emotion.src = "happy.png"
     if (points == 66.6 && !commands3.includes(cod.value)) {
      alert('Неправильна команда')
      
      emotion.src = "sad.png"
      
     }
pointsDisplay.textContent = "POINTS: " + points;

   
  }

})



console.log(l);

   // if(commands.includes(userInput)){
   //    points += 33.3;
   //    alert('Правильна команда! +33.3 поінта')
   //    arrow.src = "pixil-gif-drawing (2).gif";
   //    emotion.src = "happy.png"
   //  } else {
     //alert('Неправильна команда')
     // emotion.src = "sad.png"
    //}
  
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
  await new Promise(r => setTimeout(r, 2900));
  apple.src = "pixil-gif-drawing (6).gif"
  await new Promise(r => setTimeout(r, 600));
  apple.src = "none.png"
  arrow.src = "none.png"
}

console.log(arrow.style.left);

const music = new Audio("Music fon.mp3");
  function checkCode(){ 
      let value = document.getElementById("answer").value.trim();
  }


if (userCode === 'правильний код') {
            correctSound.play("Win.mp3"); 
        } 
  else {
        }



 appledelite()

