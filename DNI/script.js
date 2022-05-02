
function dni(){
    let dniNumber = document.getElementById(`number`).value
    let dni = dniNumber % 23
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if(dniNumber > 0 && dniNumber < 999999999){ 
        console.log(letras[dni])
        console.log(dni)
    }
    else{
        console.log("Numero invalido")
    }
}