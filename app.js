let vida = parseInt(prompt("Ingrese vida de su personaje"))
let posionchica = 25
let posiongrande = 50


if (vida <50 ) {
    alert("La posion para tu personaje es una posion grande")
    alert(` Tu vida actual es ${vida + posiongrande} `)

}else if (vida <=75) {
    alert("La posion para tu personaje es una posion chica")
    alert(` Tu vida actual es ${vida + posionchica} `)
}
else if (vida >=75 && vida  <=100) {
    alert("Tu personaje esta curado")

}
else {
    alert("Cantidad incorrecta, es de 0 a 100")
}


