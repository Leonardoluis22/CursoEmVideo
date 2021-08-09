function contar(){
let ini = document.querySelector('input#txti');
let fim = document.querySelector('input#txtf');
let passo = document.querySelector('input#txtp');
let res = document.querySelector('div#res')

if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
      alert('[ERRO] Faltam dados')
}else if(ini.value.length == fim.value.length){
    alert('[ERRO] Impossivel contar  Inicio e fim identicos')
}else{
   res.innerHTML='Contando:'
   let i = Number(ini.value);
   let f = Number(fim.value);
   let p = Number(passo.value);
   let c = ''
  
   
    if(i < f){
            for(c = i; c <= f; c += p){
                res.innerHTML += ` ${c}\u{1F449} `     
            }
        }else if(i > f){
            for(c = i; c >= f; c -= p ){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }  
}




}


















/*function contar(){
    var n1 = window.document.querySelector('input#n1');
        n1 = Number(n1.value);
    var n2 = window.document.querySelector('input#n2');
        n2 = Number(n2.value);
    var passo = window.document.querySelector('input#passo');
        passo = Number(passo.value);
    var res = window.document.querySelector('p#resultado');
    var c = ''
    if(n1 == 0 || n2 == 0){
        alert('[ERRO] Corrija os valores')
        if( passo == 0){
            passo = 1;
        for(c = n1; c <= n2; c == (c+passo)){
            res.innerHTML=`${c}`
        }
        
    }

}else{
    for(c = n1; c <= n2; c == (c+passo));
    res.innerHTML='c'
}


}
*/