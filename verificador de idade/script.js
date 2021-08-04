function verificar(){
  let data = new Date();
  let ano = data.getFullYear();
  let fano = Number(window.document.querySelector('input#txtano').value);
  let res = window.document.querySelector('div#res');
  let idade = (ano - fano);
 
 
    if (fano.lenght.value == 0 || fano >= ano ) {
        alert('Verifique as informações e tente novamente')
      }else if( idade < 12 &&  ){
        res.innerHTML=`Criança de ${idade} anos `

  }




}