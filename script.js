

function valuePorcent(){

    const porcent = document.getElementById('porcent')

    const numb = document.getElementById('numero')
    const resultInpu = document.getElementById('resul')

    const po = parseFloat(porcent.value)
    const total = parseFloat(numb.value)


    if (isNaN(po)) {
        alert("Por favor, insira valores nos campos.");
        return;
    }
    
    const result = (po/ 100) * total
    const absolute = total - result
    resultInpu.value = absolute.toFixed(2); 
    
}



document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault()
    valuePorcent()
})




function clearFild(){
    document.getElementById('porcent').value = ""
    document.getElementById('numero').value = "";
    document.getElementById('resul').value = " ";
}
clearFild()
