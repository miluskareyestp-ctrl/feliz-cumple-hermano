window.onload=function(){

setTimeout(function(){

document.getElementById("loader").style.display="none";

},4000);

}

function mostrarMensaje(){

document.getElementById("mensaje").style.display="block";

document.getElementById("mensaje").scrollIntoView({

behavior:"smooth"

});

}
