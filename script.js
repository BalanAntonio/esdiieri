function perdue(n){
    return n*2;
}

function instringhe(n){
    return n + "";
}

function celsius(n){
    return n*(1.8) + 32;
}

function prima(n){
    return n[0];
}

function vai(){
    let tutto = document.querySelectorAll("label");

    let primo = document.getElementById("inp1").value.trim().split(",").map(perdue);
    let secondo = document.getElementById("inp2").value.trim().split(",").map(instringhe);
    let terzo = document.getElementById("inp3").value.trim().split(",").map(celsius);
    let quarto = document.getElementById("inp4").value.trim().split(",").map(prima);

    tutto[0].innerHTML = primo;
    tutto[1].innerHTML = secondo;
    tutto[2].innerHTML = terzo;
    tutto[3].innerHTML = quarto;
}