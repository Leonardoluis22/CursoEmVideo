
function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = Number(document.querySelector('input#txtano').value);
  var res = window.document.querySelector('div#res');
  


  if(fano == 0 || fano > ano){
     alert('[ERRO] Verifique os dados e tente novamente!');
  }else{
    var fsex = document.getElementsByName('radesex');
    var idade = (ano - fano)
    var genero = ''
    
    var img = document.createElement='img'
    img.setAttribute('id', 'foto')
    
    if (fsex[0].checked){
      genero = 'Homem'
      if(idade < 12){
        img.createElement('src', 'crianca_masculino.png')
      }else if(idade > 12 && idade < 18){
        img.createElement('src', 'adolescente_Masculino.png')
      }else if(idade > 18 && idade < 60){
        img.createelement('src', 'home_jovem_adulto.jpg')
      }else if(idade >= 60){
        img.createElement('src','home_velho.png')
      }

    }else if (fsex[1].checked) {
      genero = 'Mulher'
      if(idade < 12){
        img.createElement('src', 'crianca_feminina.png')
      }else if(idade > 12 && idade < 18){
        img.createElement('src', 'mulher_adolescente.jpg')
      }else if(idade > 18 && idade < 60){
        img.createelement('src', 'mulher_jovem_adulta.jpg')
      }else if(idade >= 60){
        img.createElement('src','mulher_velha.jpg')
      }



    }
    res.innerHTML=`Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }



}
