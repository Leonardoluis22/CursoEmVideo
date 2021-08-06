
function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = Number(document.querySelector('input#txtano').value);
  var res = window.document.querySelector('div#res');
  


  if(fano == 0 || fano > ano){
    alert('[ERRO] Confira as informações e tente novamente!')
  }else {
    var fsex = document.getElementsByName('radesex')
    var idade = (ano - fano)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
       
    if(fsex[0].checked){
        genero = ('Homem')
        if(idade > 0 && idade < 12){
          //Criança
          img.setAttribute('src','crianca_masculino.png')
        }else if(idade < 18){
          //adolescente
          img.setAttribute('src', 'adolescente_Masculino.png')
        }else if(idade > 18 && idade < 50){
          //adulto
          img.setAttribute('src', 'homem_jovem_adulto.jpg')
        }else if(idade >= 50){
          //idoso
          img.setAttribute('src','home_velho.png')
        }

      }else if(fsex[1].checked){
        genero = ('Mulher')
        if(idade > 0 && idade < 12){
          //Criança
          img.setAttribute('src', 'crianca_feminina.png')
        }else if(idade < 18){
          //adolescente
          img.setAttribute('src', 'mulher_adolescente.jpg')
        }else if(idade > 18 && idade < 50){
          //Adulto
          img.setAttribute('src', 'mulher_jovem_adulta.jpg')
        }else if(idade >= 50){
          //idoso
          img.setAttribute('src', 'mulher_velha.jpg')
        }


    }
    res.style.textAlig = 'center'
    res.innerHTML=`Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)

    
  }

  
}

