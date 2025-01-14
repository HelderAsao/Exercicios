let carrinhos = []

function carrinho(){

    let carrinho = window.document.getElementById('button')
    let res = window.document.getElementById('res')
    
    let txtnum = window.document.getElementById('txtnum')
   

    if(txtnum.value.length == 0 ){
    window.alert('[ERRO]coloque um numero valido')


}else{

let num = Number(txtnum.value)
carrinhos.push(num)
res.innerHTML=(`Voce adicionou ${num} velas`)

}

   
}

function somar(){

    let carrinho = window.document.getElementById('button')
    let res2 = window.document.getElementById('res2')
    
    let txtnum = window.document.getElementById('txtnum')

    let soma = 0
    for (let i = 0; i < carrinhos.length; i++) {
    let numero = carrinhos[i]
  
      soma += numero
  
    }
    res2.innerHTML=(`voce pediu ${soma} velas`)

}


