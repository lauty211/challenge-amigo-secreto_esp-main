let amigos=[]; 
let i=0;
let j=0;

function agregarAmigo()
{
    let nombre=document.getElementById("amigo").value;
    //console.log(nombre);
    if(nombre=='')
    {
        alert("Por favor,Ingrese un nombre");
    }
    else
    {
        amigos.push(nombre);
        console.log(amigos);
        actualizarlista();
        vaciarCaja();
    }
}

function sortearAmigo()
{
    if(amigos.length>0)
        {
            let ganadorIndice = Math.floor(Math.random() * amigos.length);
            let ganador=amigos[ganadorIndice];
            let lista=document.getElementById("listaAmigos");
            lista.innerHTML=`El ganador es<span style="color:green;font-weight:bold;"> ${ganador}</span>`;
        }
   else
   {
    alert("Ingrese al menos un amigo");
   }
    
}

function vaciarCaja()
{
    document.getElementById("amigo").value='';
}

function actualizarlista()
{
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML='';

    for(i=0;i<amigos.length;i++)
    {
        let li=document.createElement("li");
        li.textContent=amigos[i];
        lista.appendChild(li);
    }
}

/*function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
*/

