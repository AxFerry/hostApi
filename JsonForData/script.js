let formt = document.querySelector('form');
let formd = new FormData(formt);
formd.addEventListener('submit' , handleSubmit())  


function handleSubmit(event){
    
    let dati = Object.fromEntries(formd) ;
    let JsonDati = JSON.stringify(dati) ;
    event.preventDefault();
    fetch('https://github.com/AxFerry/hostApi/blob/main/JsonForData/Data.json',{
         method: 'POST' ,
         headers: {
            'Content-Type' : 'application/json'
         },
         body : JsonDati
        }).then(res => res.json())
        .then(result => alert(result.data))
        .catch(err => alert(err))
}
