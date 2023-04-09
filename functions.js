var numero = document.querySelectorAll("#numero")
var operador = document.querySelectorAll("#operador")
var posinega = document.querySelectorAll("#positivo-negativo")
var apagar = document.querySelectorAll("#apagar")
var apagarAll = document.querySelectorAll("#apagarAll")
var resultado = document.querySelectorAll("#resultado")
var visor = document.querySelector(".visorNum")
var visorAux = document.querySelector(".visorAux")
var valor1;
var valor2;
var operadorLogico;
var possuiOperador = false;

numero.forEach((btn)=>{
    btn.addEventListener("click", function(){
        
        valor = this.textContent
        
        if(visor.textContent == 0){
            visor.innerHTML = ""
        }
        if(possuiOperador){
            visorAux.textContent = visor.textContent
            visor.textContent = ""
            possuiOperador = false
        }
        if(visor.textContent.length < 6){
            visor.textContent += valor
        }
        
    })    
});

operador.forEach((btn)=>{
    btn.addEventListener("click", function(){
        
        valor = this.textContent
        
        if(visor.textContent == 0 || possuiOperador){
            return
        }else{
            possuiOperador = true
            valor1 = visor.textContent
            operadorLogico = valor
            visor.textContent += " " + valor
        }
        
    })    
});

const operacao = {
    '+': (n1, n2) => n1 + n2,
    '-': (n1, n2) => n1 - n2,
    '*': (n1, n2) => n1 * n2,
    '/': (n1, n2) => n1 / n2
}

resultado.forEach((btn)=>{
    btn.addEventListener("click", function(){
        
        valor2 = visor.textContent
        visorAux.textContent += " " + valor2 + " ="
        visor.textContent = operacao[operadorLogico](parseFloat(valor1), parseFloat(valor2));
        
    })    
});

apagar.forEach((btn)=>{
    btn.addEventListener("click", function(){
        
        if(visor.textContent.length == 1){
            visor.textContent = "0"
        }else if(isNaN(visor.textContent.slice(-1))){
            visor.textContent = visor.textContent.slice(0, -1)
            possuiOperador = false
        }else{
            visor.textContent = visor.textContent.slice(0, -1)
        }
        
    })    
});

apagarAll.forEach((btn)=>{
    btn.addEventListener("click", function(){
        
        valor1 = null
        valor2 = null
        operadorLogico = null
        visor.textContent = "0"
        visorAux.textContent = "0" 

    })    
});

posinega.forEach((btn)=>{
    btn.addEventListener("click", function(){
        
        if(!possuiOperador){
            visor.textContent = eval(visor.textContent * (-1))
        }

    })    
});

