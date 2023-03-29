let catalogo;

const inputNombre= document.getElementsByClassName("form-control"),
    inputTraccíon= document.getElementsByClassName("form-control"),
    inputKlm= document.getElementsByClassName("form-control"),
    inputInfo= document.getElementsByClassName("form-control"),
    inputImg= document.getElementsByClassName("form-control"),
    enviarBtn= document.getElementsByClassName("btn btn-primary"),
    consecionaria= document.getElementById("container");

    class Auto{

    constructor(nombre,tracción,kilometros,info,cover,id){
        
     this.nombre=nombre;
     this.tracción=tracción;
     this.kilometros=parseInt(kilometros);
     this.info=info;
     this.id= id;
     
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
}}
  
    function guardarAuto(catalogo){    
    
const libreta= new Auto(inputNombre.value, inputTraccíon.value, inputKlm.value,inputInfo.value,inputImg.value)

catalogo.push(libreta);
libreta.asignarId(catalogo);
    }

function guardarEnStorage(catalogo){
    localStorage.setItem("catalogoAutos",JSON.stringify(catalogo));
  }  

  const mostrar=(datos)=>{

    datos.forEach(elemento =>{
      const consecionariaAut= document.createElement("article");

      consecionariaAut.setAttribute("id","tarjetas");
      consecionariaAut.innerHTML= `
      <img class="tarjeta-img" src="${elemento.cover}" alt="${elemento.inputNombre}" style="width:75px">
      <div class="contenido" id="${elemento.id}">
      <h5 class="tracción">${elemento.tracción}</h5>
      <h5 class="kilometros">${elemento.kilometros}</h5>
      <textarea name="text" id="${elemento.info}"></textarea>
      </div>`;

        consecionaria.appendChild(consecionariaAut);
    })};
  
enviarBtn.onclick=(e)=>{
 e.guardarAuto(catalogo)
  guardarEnStorage(catalogo)
  mostrar(catalogo,consecionaria)};

window.onload=()=>{
   catalogo= JSON.parse(localStorage.getItem("catalogoAutos"));
     if(catalogo != null){
      mostrar(catalogo,consecionaria);
     }else {

        catalogo= [];
    }} 
    console.log(guardarAuto)
    console.log(new Auto)
    console.log(JSON.parse)