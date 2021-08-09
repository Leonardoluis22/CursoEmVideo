function contar(){
    var n1 = window.document.querySelector('input#n1');
        n1 = Number(n1.value);
    var n2 = window.document.querySelector('input#n2');
        n2 = Number(n2.value);
    var passo = window.document.querySelector('input#passo');
        passo = Number(passo.value);
    var res = window.document.querySelector('p#resultado');
    
    if( n1 == 0 || n2 == 0 || passo == 0){
        alert('[ERRO] Corrija os valores!')
    }else{
        for(var c = n1; c <= n2; c = passo  ){
          res.innerHTML=`${c}`  
        }
    }
      
}