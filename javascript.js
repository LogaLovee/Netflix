function dataForm(){
    let formEmail = document.getElementById("email").value
    let formPassword = document.getElementById("password").value
    if(formEmail === ""){
        console.log("Estas bien wey,dejaste un espacio vacio")
    }
    else{
        console.log(formEmail)
    }
    if(formPassword === ""){
        console.log("Estas bien wey,dejaste un espacio vacio")

    }
    else{
            console.log(formPassword)
    }
}
