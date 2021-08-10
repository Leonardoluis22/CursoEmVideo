function clicar(){
    let tab = document.querySelector('select#res');
    let num = document.querySelector('input#txtn');

    if(txtn.value.length == 0 ){
        alert('[ERRO] Digite um numero')
    }else{
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML=''
        while(c <= 10){
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }


}
