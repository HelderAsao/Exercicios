
/*let count = 0;

document.getElementById("clickButton").addEventListener("click", function() {
    count++;
    document.getElementById("count").innerText = count;
});

*/
let conta=0

function conte (){
    
    let res= window.document.getElementById('res')

    conta++

        res.innerHTML = (`Voce clicou ${conta} vezes`)



}







function zerar(){

     conta=0

    let res= window.document.getElementById('res')

    res.innerHTML=`voce clicou ${conta} vezes`

}