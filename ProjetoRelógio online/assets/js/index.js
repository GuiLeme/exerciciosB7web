let intervalo

function comecar(){ 

    intervalo = setInterval(function () {
        let tempoElemento = document.querySelector(".cronometro")
        let tempo = tempoElemento.innerHTML
        let lista = tempo.split(':')

        let minuto = parseInt(lista[0])
        let segundo = parseInt(lista[1])
        let milisec = parseInt(lista[2])

        let l1 = []
        let l2 = []

        milisec++;
        l1 = trocar(milisec, segundo, 100)
        milisec = l1[0]
        segundo = l1[1]
        
        l2 = trocar(segundo, minuto, 60)
        segundo = l2[0]
        minuto = l2[1]

        milisec = formatar(milisec)
        
        segundo = formatar(segundo)
        
        minuto = formatar(minuto)
        
        tempoElemento.innerHTML = minuto+':'+segundo+':'+milisec
    }, 10)
}

function pausar(){
    botaoStart = document.querySelector("button[onclick='comecar()']")
    botaoStart.innerHTML = 'Continuar'

    clearInterval(intervalo)
}

function recomecar(){
    botaoStart = document.querySelector("button[onclick='comecar()']")
    botaoStart.innerHTML = 'Começar'

    cronometro = document.querySelector('.cronometro')
    cronometro.innerHTML = "00:00:00"
}

function trocar(numero, proximo, parametro) {
    if (numero >= parametro){
        numero = 0
        proximo++
    }
    let lista = []
    lista.push(numero)
    lista.push(proximo)
    return lista
}

function formatar(numero) {
    numero = numero.toString()
    if (numero.length == 1){
        numero = '0'+numero
    }
    return numero
}

function pointerSelector(pointer){
    pointers = document.querySelectorAll('.pointer')
    pointers.forEach(function(item){
        if (item.classList.contains('selected')){
            item.classList.remove('selected')
        }
        
    })
    pointer.classList.add('selected')
    
    let margem = 0
    if (pointer.id == 'p2'){
        margem = -1140 -5
    } else if (pointer.id == 'p3'){
        margem = -1140*2 -10
    }

    slider = document.querySelector('.slider')
    slider.style.marginLeft = margem.toString() + 'px'
}