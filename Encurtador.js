import axios from 'axios'





const ClickUrl =  () =>{

axios.post('https://api.encurtador.dev/encurtamentos',{
        "url": "https://google.com" 
    })
    .then((res)=>{
        const dado = res.data
        console.log(dado);
        return dado
    }).catch((err)=>console.log(err))
    
}

export default ClickUrl
