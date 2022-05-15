let snake = document.getElementById(`snake`)
let food = document.getElementById(`food`)
let puntos = document.getElementById(`puntos`)
let points = 0
const pantalla = document.getElementsByTagName(`body`)

let height = pantalla[0].scrollHeight //110
let widht = pantalla[0].scrollWidth //976
let ejeX
let ejeY

// Math.ceil(x/5)*5
console.log(height, widht)
function foo() {
    ejeX =  Math.ceil(( Math.floor(Math.random() * (50 - 0)) + 0 )/5)*5
    ejeY = Math.ceil(( Math.floor(Math.random() * (50 - 0)) + 0 )/5)*5
    console.log("Eje X" , ejeX) 
    console.log( "Eje y", ejeY)
    food.style.left = ejeX + "px"
    food.style.top = ejeY + "px"
  }

  foo()
   // cuadrado 20x20
  // comida 10x10
  // x, y de culebra 
  // x, y de comida 
  function posicion(){
      console.log("checar")
      console.log("comida", ejeX, ejeY)
     // console.log("EjeX serpiente", snake.style.left, "ejeY", snake.style.top)
     let ejeXserpiente = Number(snake.style.left.split("px")[0])
     let ejeYserpiente = Number(snake.style.top.split("px")[0]) 
     console.log("serpiente", ejeXserpiente, ejeYserpiente)
     if(ejeX === ejeXserpiente && ejeY === ejeYserpiente){
         console.log("Comer")
         foo()
         points = points + 1
         puntos.innerHTML = points
         console.log(snake)
     }
  }

document.addEventListener(`keyup`, (event)=>{
    if(event.key === 'ArrowRight'){
        Number(snake.style.left.split("px")[0])
        snake.style.left = Number(snake.style.left.split("px")[0]) + 5 + "px";
    }
    else if(event.key === 'ArrowLeft'){
        Number(snake.style.left.split("px")[0])
        snake.style.left = Number(snake.style.left.split("px")[0]) - 5 + "px";
    }
    else if(event.key === 'ArrowUp'){
        Number(snake.style.top.split("px")[0])
        snake.style.top = Number(snake.style.top.split("px")[0]) - 5 + "px";
    }
    else if(event.key === 'ArrowDown'){
        Number(snake.style.top.split("px")[0])
        snake.style.top = Number(snake.style.top.split("px")[0]) + 5 + "px";
    }
    posicion()
})

