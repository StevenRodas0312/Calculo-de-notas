let nota1= document.getElementById("nota1");

let nota2= document.getElementById("nota2");

let nota3= document.getElementById("nota3");

let nota4= document.getElementById("nota4");

let resultado= document.getElementById("resultado");

function obtenerNotas(){
    if (
        nota1.value.trim()===""||
        nota2.value.trim()===""||
        nota3.value.trim()===""||
        nota4.value.trim()===""
    ){
        resultado.textContent = "Escribe las cuatro notas";
        return null;
    }

    let a = Number(nota1.value);
    let b = Number(nota2.value);
    let c = Number(nota3.value);
    let d = Number(nota4.value);

    if(
        a<0||a>10||
        b<0||b>10||
        c<0||c>10||
        d<0||d>10
    ){
        resultado.textContent = "Las notas minimas son entre 6 y 7";
        return null;
    }

    return[a,b,c,d];
}

document.getElementById("calcular").addEventListener("click",function(){
    let notas = obtenerNotas()

    if(notas === null)return;

    let promedio = (notas [0] + notas [1] + notas[2] + nota4[3])/4;

    if(promedio >=9){
        resultado.textContent = "Promedio:" + promedio.toFixed(2) +
        ".Aprobaste!";
    }else if (promedio >=7){
        resultado.textContent = "Promedio:" + promedio.toFixed(2) +
        ".Exelente!";
    }else{
        resultado.textContent = "Promedio:" + promedio.toFixed(2) +
        ".Reprobaste!.";
    }
});