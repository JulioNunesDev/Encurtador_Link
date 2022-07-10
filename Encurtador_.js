import  axios  from "axios" 

let button = document.querySelector('button')
let span = document.querySelector('.url span')
let input = document.querySelector('.inputText').value

button.addEventListener('click', URl)

function URl(){
    if(!input){
       alert('Coloque algum link!') 
    }
    else{ 
        axios.post('https://api.encurtador.dev/encurtamentos',{
            "url": input 
        })
        .then((res)=>{
            const dado = res.data
            span.innerHTML = dado.urlEncurtada
        }).catch((err)=>console.log(err))
    }
    
}