let catalogo=[];

const inputNombre= document.getElementsByClassName("form-control"),
    inputTraccíon= document.getElementsByClassName("form-control"),
    inputKlm= document.getElementsByClassName("form-control"),
    inputInfo= document.getElementsByClassName("form-control"),
    inputImg= document.getElementsByClassName("form-control"),
    insertarBtn= document.getElementsByClassName("btn btn-primary"),
    contTarjeta= document.getElementsByClassName("container");

    class Auto{

        constructor(nombre,tracción,kilometros,info,cover,id)
        {
     this.nombre=nombre.toUpperCase();
     this.tracción=tracción;
     this.kilometros=parseInt(kilometros);
     this.info=info;
     this.id= id;
     this.resumen;
     
   if(cover==""){
    this.cover= "https://static.motor.es/fotos-noticias/2023/02/ford-mustang-dark-horse-202392938-1676050292_1.jpg";
 }else{
    this.cover=cover;
   }
}
asignarId(array){
    this.id=array.lenght;
}
asignarCover(sourceURL){
    this.cover=sourceURL;
}
agregarResumen(resumen){
    this.resumen=resumen;
}
    }

    function guardarAuto(catalogo)
    {
const ejemplar= new Auto(inputNombre.value, inputTraccíon.value, inputKlm.value,inputInfo.value,inputImg.value);

ejemplar.agregarResumen(textareaResumen.value);

catalogo.push(ejemplar)
ejemplar.asignarId(catalogo);

    }

  function guardarEnStorage(catalogo){
    localStorage.setItem("catalogoAutos", JSON.stringify(catalogo));
  }  

  function crearTarjetas(arrayElementos, contenedorHTML){
    contenedorHTML.innerHTML=" ";
  
    for(const elemento of arrayElementos){

        if(elemento.resumen=="")
        elemento.agregarResumen("No disponíble")

let divTarjeta= document.createElement("div");


  divTarjeta.innerHTML= `<div class="clearfix">
  
  <img src="${elemento.cover}" class="col-md-6 float-md-end mb-3 ms-md-3" alt="portada de la imagen">

<h1 class="text-bg-light" id="">${elemento.inputNombre}</h1>
  
<h2 class="text-bg-light" id="">${elemento.tracción}</h2>

<textarea name="number" class="text-bg-light" id="" rows="10">${elemento.kilometros}</textarea>
  
<textarea name="text" class="text-bg-light" id="" cols="30" rows="10">${elemento.info}</textarea>`;
  

 contenedorHTML.append(divTarjeta);
}
  }

  insertarBtn.onclick = (e)=>{
    e.preventDefault();
    guardarAuto(catalogo);
    guardarEnStorage(catalogo);
    crearTarjetas(catalogo, contTarjeta);

  }

  window.onload= ()=>{
    catalogo=JSON.parse(localStorage.getItem("catalogoAutos"));
    
  }