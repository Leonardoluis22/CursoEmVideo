

function carregar(){

var msg = window.document.querySelector('div#msg');
var img = window.document.querySelector('img#imagem');
    let data = new Date();
    let hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`
 
if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background='#da7d01'
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background='#c6cac8'
    }else{
        img.src = 'noite.png'
        document.body.style.background='#7d3a30'
    }


}