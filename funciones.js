var menu_visible = false;
let menu = document.getElementById("navegador");
function mostrarOcultarMenu(){
    if (menu_visible == false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length;x++){
    links [x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

var barra_visible= false;
let barra = document.getElementById("conten-bar");
function mostrarProgreso(){
    if (barra_visible == false){
        barra.style.display = "block";
        barra_visible = true;
    }
    else{
        barra.style.display = "none";
        barra_visible = false;
    }
}

const prog_h= document.getElementById("progreso-html");
const porc_h= document.getElementById("html");
let cant_h=0;
let ti_h=setInterval(()=>{
    cant_h += 1;
    prog_h.style.width= cant_h + "%";
    if(cant_h==93){
      clearInterval(ti_h);
    }
    porc_h.textContent= cant_h + "%";
}, 70);

const prog_c= document.getElementById("progreso-css");
const porc_c= document.getElementById("css");
let cant_c=0;
let ti_c=setInterval(()=>{
    cant_c += 1;
    prog_c.style.width= cant_c + "%";
    if(cant_c==90){
      clearInterval(ti_c);
    }
    porc_c.textContent= cant_c + "%";
}, 70);

const prog_j= document.getElementById("progreso-js");
const porc_j= document.getElementById("js");
let cant_j=0;
let ti_j=setInterval(()=>{
    cant_j += 1;
    prog_j.style.width= cant_j + "%";
    if(cant_j==60){
      clearInterval(ti_j);
    }
    porc_j.textContent= cant_j + "%";
}, 70);

const prog_cd= document.getElementById("progreso-cd");
const porc_cd= document.getElementById("cd");
let cant_cd=0;
let ti_cd=setInterval(()=>{
    cant_cd += 1;
    prog_cd.style.width= cant_cd + "%";
    if(cant_cd==87){
      clearInterval(ti_cd);
    }
    porc_cd.textContent= cant_cd + "%";
}, 70);

const prog_i= document.getElementById("progreso-il");
const porc_i= document.getElementById("il");
let cant_i=0;
let ti_i=setInterval(()=>{
    cant_i += 1;
    prog_i.style.width= cant_i + "%";
    if(cant_i==42){
      clearInterval(ti_i);
    }
    porc_i.textContent= cant_i + "%";
}, 70);

const prog_p= document.getElementById("progreso-ps");
const porc_p= document.getElementById("ps");
let cant_p=0;
let ti_p=setInterval(()=>{
    cant_p += 1;
    prog_p.style.width= cant_p + "%";
    if(cant_p==58){
      clearInterval(ti_p);
    }
    porc_p.textContent= cant_p + "%";
}, 70);