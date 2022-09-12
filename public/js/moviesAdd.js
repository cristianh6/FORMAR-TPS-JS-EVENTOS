window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function(){
        titulo.style.color = "blue"
    })   

    let estadoSecreto = 0;
    let input = document.querySelector("#titulo")

    input.addEventListener('keypress', function(event){
        switch(event.key){
            case "s":
                if(estadoSecreto == 0){
                    estadoSecreto = 1;
                }else{
                    estadoSecreto = 0
                }
            break;
            case "e":
                if(estadoSecreto == 1){
                    estadoSecreto = 2
                }else if(estadoSecreto == 4){
                    estadoSecreto = 5
                }else{
                    estadoSecreto = 0
                }
            break;
            case "c":
                if(estadoSecreto == 2){
                    estadoSecreto = 3;
                }else{
                    estadoSecreto = 0
                }
            break;
            case "r":
                if(estadoSecreto == 3){
                    estadoSecreto = 4;
                }else{
                    estadoSecreto = 0
                }
            break;
            case "t":
                if(estadoSecreto == 5){
                    estadoSecreto = 6;
                }else{
                    estadoSecreto = 0
                }
            break;
            case "o":
                if(estadoSecreto == 6){
                    estadoSecreto = 0;
                    alert("SECRETO MAGICO")
                }else{
                    estadoSecreto = 0
                }
            break;
            default:
                estadoSecreto = 0;
            break;
        }
        console.log(estadoSecreto)
        console.log(event.key)
    })


}