function carregar(){
    var img = window.document.getElementById('imagem')
    var txt = window.document.getElementById('texto')
    var agora = new Date()
    var hora= agora.getHours()
    texto.innerHTML=`agora são ${hora} horas`
    if (hora >=0 && hora < 12){
        img.innerHTML= `<img src = "manha.jpg" alt="manha">`
    } else if (hora >=12 && hora < 18) {
        img.innerHTML= `<img src = "tarde.jpg" alt="tarde">`
    } else {
        img.innerHTML= `<img src = "noite.jpg" alt="noite">`
    } 
}
