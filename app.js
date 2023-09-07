// Vamos a declarar un variable usando let o const //

const colors = [
    "red", "blue", "pink", "green", "purple", "yellow", "black", "brown"
]


function popSound(){
  const audio = new Audio("balloon-pop-48030.mp3")
  audio.play();
}

// Ahora creamos una función que cree una lista de globos //

function createParty() {
    const balloonList = [];
    // Math.floor nos crea un número redondeado hacia abajo //
    for (let i = 0; i < 16; i++){
    const randomNumber = Math.floor(Math.random() * colors.length)
    const randomColor = colors[randomNumber];
    console.log(randomColor)

    // DOM document Object Model //
    const newBalloon = document.createElement("div");
    newBalloon.className = "balloon"
    newBalloon.style.backgroundColor = randomColor;
    newBalloon.style.color = randomColor;
    balloonList.push(newBalloon);
    }
    return balloonList;
}

function setCounter(cantidadDeGlobos) {
  const counterElement = document.getElementById("counter")
  counterElement.innerHTML = cantidadDeGlobos;
  if (cantidadDeGlobos === 0) {
    console.log("Conseguido!!! ;)")
    const gridElement = document.getElementById("balloon-grid");
    gridElement.classList = "congratulations";
    gridElement.innerHTML = "Felicidades! Lo conseguiste :) El juego volverá a empezar en 5 segundos!"

    setTimeout(() => {
      render();
    }, 5000)

  }
}




function render() {
   const gridElement = document.getElementById("balloon-grid");
   gridElement.classList = "balloon-grid"
   gridElement.innerHTML = ""
   const balloons = createParty();

   let remainingBalloons = balloons.length
   setCounter(remainingBalloons)

   balloons.forEach((globoActual) => {

 const balloonPopper = () => {
   console.log("Borrando el globo")
   popSound()
   globoActual.style.visibility = "hidden";
   remainingBalloons--;
   setCounter(remainingBalloons)
 }

    globoActual.addEventListener("click", balloonPopper)
    gridElement.appendChild(globoActual)
   })
}


window.onload = render()