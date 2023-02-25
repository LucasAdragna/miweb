let heladeria= "Helados Lucas!!";
        alert("Bienvenidos a " + heladeria );


let cliente= prompt("ingresa tu nombre") 
    alert("Hola "+cliente + ", estamos felices de que nos eligas, tenemos descuentos para vos.");
    
let opcion= prompt(" Ofertas con el 20% de descuento, elige una opción: \n1: 2 bochas de helado. \n2: 3 bochas de helado. \n3: 1/2kl de helado. \n4: 1kl de helado. \nEscribe 'SALIR' para retirarte");

  while(opcion != 'SALIR' && opcion != 'salir'){
    switch(opcion){
        case "1": 
        alert("El valor de 2 bochas de helado es de $500");
        const resta= (a,b) => (a-b);
        let precio= 500;
        let descuento=100;
        let nuevoPrecio= resta(precio,(descuento));
        alert("Este es el nuevo precio; $ "+nuevoPrecio+ " con el descuento.");  
        prompt("Escribe (si), para hacer la compra.");
          alert(cliente+ ", gracias por tu compra, que lo disfrutes!");
  opcion= prompt(" Ofertas con el 20% de descuento, elige una opción: \n1: 2 bochas de helado. \n2: 3 bochas de helado. \n3: 1/2kl de helado. \n4: 1kl de helado. \nEscribe 'SALIR' para retirarte");
 
  break;

     case "2":
        alert("El valor de 3 bochas es de $700");
        let valor= 700;
        let des= 100;
        let nuevo= (valor - des);
        alert("Este es el nuevo precio; $"+nuevo+ " con el descuento");
        prompt("Escribe (si), si deseas comprarlo.");
        alert(cliente+", gracias por tu compra, que lo disfrutes!");      
opcion= prompt(" Ofertas con el 20% de descuento, elige una opción: \n1: 2 bochas de helado. \n2: 3 bochas de helado. \n3: 1/2kl de helado. \n4: 1kl de helado. \nEscribe 'SALIR' para retirarte");

break;

case "3": 
      alert("El valor de 1/2kl es de $950");
      let val= 950;
      let menos= 100;
      let nue= (val - menos);
      alert("Este es el nuevo precio; $"+nue+ " con el descuento");
      opcion = prompt("Escribe (si), si deseas comprarlo.");
      alert(cliente+", gracias por tu compra, que lo disfrutes! ");
opcion= prompt(" Ofertas con el 20% de descuento, elige una opción: \n1: 2 bochas de helado. \n2: 3 bochas de helado. \n3: 1/2kl de helado. \n4: 1kl de helado. \nEscribe 'SALIR' para retirarte"); 
 
break;
 
case "4":
    alert("El valor de 1kl de helado es de $1200");
    let costo= 1200;
    let descontado=100;
    let valorPreciso=(costo-descontado);
    alert("Este es el nuevo precio; $"+valorPreciso+ " con el descuento");
     prompt("Escribe (si), si deseas comprarlo.")
    alert(cliente+", gracias por tu compra, que lo disfrutes!");
    opcion= prompt(" Ofertas con el 20% de descuento, elige una opción: \n1: 2 bochas de helado. \n2: 3 bochas de helado. \n3: 1/2kl de helado. \n4: 1kl de helado. \nEscribe 'SALIR' para retirarte"); 

break;

  }  
 }