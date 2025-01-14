function tarefas(){
    let campo = window.document.getElementById('ltar')
    let ulista = window.document.getElementById('listas')
    let botao = window.document.getElementById('botao')
    let res = window.document.getElementById('res')
   

    if(campo.value==0){
        window.alert('erro')
    }else{
        //let listItem = document.createElement('li')
      //  listItem.textContent = campo.value
       // ulista.appendChild(listItem)
       let listItem = document.createElement('li');
       listItem.innerHTML = campo.value
      
       ulista.appendChild(listItem);
       
    }
    listItem.innerHTML=' '
}