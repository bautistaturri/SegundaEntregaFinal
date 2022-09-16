

let contador = 0;
let h2Contador = document.querySelector("#contador")
let inputReset = document.querySelector("#reset");
h2Contador.innerHTML = contador;
console.log(inputReset);
inputReset.addEventListener('change',resetToNumber)

const objetoUsuario = {
    username: valueUsername,
    password: valuePassword,
}

 let formulario = document.querySelector("#login")

function incrementar(){
    contador +=1;
    actualizarContador();
}
function decrementar(){
    contador -=1;
    actualizarContador();
}
function actualizarContador(){
    h2Contador.innerHTML = contador;
}
function reset(){
    contador = 0;
    actualizarContador();
}

function resetToNumber(){
    const valueReset = inputReset.value;
    contador = valueReset;
    actualizarContador();
}
function login(event){
    event.preventDefault(event)
    console.log(event)
   
    console.dir(formulario)
    let valueUsername = formulario[0].value
    let valuePassword = formulario[2].value
    console.log(valueUsername)
    console.log(valuePassword)
    const token = generateToken(objetoUsuario.username,objetoUsuario.password)
    localStorage.setItem("token",token)
    
    const isAuth = existsToken()
    if (isAuth){
        const divPrivateContent = document.querySelector('privateContent')
        divPrivateContent.className = 'showprivateContent'
        formulario.className = 'hideprivateContent'
    }
}
function generateToken(username,password){
    return JSON.stringify({
        username: username,
        password: password,
    })
}
function existsToken(){
    if (localStorage.getItem("token") !==null){
        return true
    }else{
        return false
    }
    
}