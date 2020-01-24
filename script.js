function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = "fotomanha3.png"
        document.body.style.background = "#FFFF99"
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = "fototarde3.png"
        document.body.style.background = "#F4A460"
    } else {
        // BOA NOITE!
        img.src = "fotonoite3.png"
        document.body.style.background = "#696969"
    }
}
