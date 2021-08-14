function clicar(){
    let num = document.querySelector('input#txtn')
    let res = document.querySelector('select#res')

    if(num.value.length == 0){
        alert('[ERRO] Insira um numero')
    }else{
        let n1 = Number(num.value)
        res.innerHTML=''
       for(let c = 1; c <= 10; c++){
        let tab = `${n1} x ${c} = ${n1*c}`
        let item = document.createElement('option')
        item.text+=tab
        res.appendChild(item)
       }


    }


}