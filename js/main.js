//inicio para poner target blank en los enlaces
var links = document.getElementsByClassName('boton-1');
var len = links.length;

for (var i = 0; i < len; i++) {
   links[i].target = "_blank";
}

//agrega el boton de whatsApp
document.body.onload = aggBotonWpp;

function aggBotonWpp() {
   var enlaceWpp = document.createElement("a");
   enlaceWpp.href = "https://wa.me/573155483871";
   enlaceWpp.target = "_blank";
   var divContent = document.createElement("div");
   divContent.className = "cont-bot-wpp";
   var logoWpp = document.createElement("img");
   logoWpp.src = "img/WhatsAppLogo.png";
   divContent.appendChild(logoWpp);
   enlaceWpp.appendChild(divContent);

   document.body.appendChild(enlaceWpp);
}

//codigo para agregar el menu al body
function aggMenu() {
   var menuPrinc = document.createElement("div");
   var container = document.createElement("div");
   var input = document.createElement("input");
   var navbtn = document.createElement("div");
   var navLinks = document.createElement("nav");
   var hamburguerC = document.createElement("div");
   hamburguerC.setAttribute("class", "hamburger-menu-container");
   var hamburguerM = document.createElement("div");
   hamburguerM.setAttribute("class", "hamburger-menu");
   var inhamburguerM = document.createElement("div");

   hamburguerM.appendChild(inhamburguerM);
   hamburguerC.appendChild(hamburguerM);
  
   var liProd = document.createElement("li");
   liProd.setAttribute("class", "nav-link");
   liProd.setAttribute("style", "--i 1.1s");
   var aliProd = document.createElement("a");
   var divDrop = document.createElement("div");
   divDrop.setAttribute("class", "dropdown");
   var ulInDivDrop = document.createElement("ul");
   aliProd.innerHTML = "Productos";

   input.setAttribute("type", "checkbox");
   input.setAttribute("id", "check");

   liProd.appendChild(aliProd);
   liProd.appendChild(divDrop);
   divDrop.appendChild(ulInDivDrop);

   menuPrinc.setAttribute("class", "menu-princ");
   container.setAttribute("class", "container");
   navbtn.setAttribute("class", "nav-btn");
   navLinks.setAttribute("class", "nav-links");
   container.appendChild(input);
   container.appendChild(navbtn);
   container.appendChild(hamburguerC);

   navbtn.appendChild(navLinks);
   navLinks.appendChild(crearMatrizLi());
   menuPrinc.appendChild(container);
   document.body.appendChild(menuPrinc);
}

function crearMatrizLi() {

   var ulPrinc = document.createElement("ul");
   var liNavLProd = document.createElement("li");
   liNavLProd.setAttribute("class", "nav-link");
   var drop = document.createElement("div");
   drop.setAttribute("class", "dropdown");
   var ulInDrop = document.createElement("ul");
   drop.appendChild(ulInDrop);


   let paginas = [
      "index.html", "nosotros.html", productos = [
         alcantarillado = [
            "tubos-concreto.html", "tapa-anillo-manhole.html", "tapa-pozo.html"
         ],
         EspacioPubPri = [
            "sardineles.html", "barreras.html", "cunetas.html", "pisos.html", "estructural.html", "postes.html", "bordillos.html"
         ],
         otros = [
            "alfajias.html", "topellantas.html", "cajas-contador.html", "bloque-anclaje.html", "separador-vial.html"
         ],
         "rejas.html", "tapas.html", "estibas.html", "alfajias.html", "madera-plas.html", "marcos.html"
      ], "proyectos.html"
   ];

   let secundarias = ["Productos", "Alcantarillado", "Espacio Público y Privado", "Otros"];

   let valores = [
      "Inicio", "Nosotros", productos = [
         alcantarillado = [
            "Tubería", "Tapa y Anillo Manhole", "Aro Tapa Pozo"
         ],
         EspacioPubPri = [
            "Andenes", "Barreras", "Cunetas", "Pisos", "Estructural", "Postes", "Bordillos"
         ],
         otros = [
            "Alfajías", "Topellantas", "Cajas Contador", "Bloque de Anclaje", "Separador Víal Trasnmilenio"
         ],
         "Rejas", "Tapas", "Estibas", "Lavaderos", "Madera Plástica", "Marcos"
      ], "Proyectos"
   ];
 
   tiempo = .6;

   for (let i = 0; i < valores.length; i++) {
      if (typeof (valores[i]) == "string") {
         var navLink = document.createElement("li");
         navLink.setAttribute("class", "nav-link");
         navLink.setAttribute("style", "--i: " + tiempo + "s");
         var aInnavLink = document.createElement("a");
         aInnavLink.innerHTML = valores[i];
         aInnavLink.setAttribute("href", "" + paginas[i]);

         navLink.appendChild(aInnavLink);
         ulPrinc.appendChild(navLink);
         tiempo += 0.25;
      } else {

         
         liNavLProd.setAttribute("style", "--i: " + tiempo + "s");

         
         for (let j = 0; j < productos.length; j++) {

            if (typeof (valores[i][j]) != "string") {
               
               var navLink = document.createElement("li");
               navLink.setAttribute("class", "nav-link");
               navLink.setAttribute("style", "--i: " + tiempo + "s");
               var ainNL = document.createElement("a");
               ainNL.setAttribute("href", "#");
               ainNL.innerHTML = "" + secundarias[0];
               navLink.appendChild(ainNL);
               
               

               var dropL = document.createElement("li");
               dropL.setAttribute("class", "dropdown-link");
               var aInDL = document.createElement("a");
               aInDL.setAttribute("href", "#");
               aInDL.innerHTML = "" + secundarias[j+1] + "<i class='fas fa-caret-down'></i>";
               dropL.appendChild(aInDL);
               var dropSec = document.createElement("div");
               dropSec.setAttribute("class", "dropdown second");
               var ulInDropS = document.createElement("ul");
               var divArrow = document.createElement("div");
               divArrow.setAttribute("class", "arrow");
               

               for (let k = 0; k < valores[i][j].length; k++) {
                  var dropL2 = document.createElement("li");
                  dropL2.setAttribute("class", "dropdown-link");
                  var aIndropL2 = document.createElement("a");
                  aIndropL2.setAttribute("href", "" + paginas[i][j][k]);
                  aIndropL2.innerHTML = "" + valores[i][j][k];

                  dropL2.appendChild(aIndropL2);
                  ulInDropS.appendChild(dropL2);
                  dropSec.appendChild(ulInDropS);
                  dropL.appendChild(dropSec);
                  ulInDropS.appendChild(divArrow);
                  ulInDrop.appendChild(dropL);

               }
            } else {
               var dropL = document.createElement("li");
               var aIndropL = document.createElement("a");
               aIndropL.setAttribute("href", "" + paginas[i][j]);
               aIndropL.innerHTML = "" + valores[i][j];
               dropL.setAttribute("class", "dropdown-link");

               dropL.appendChild(aIndropL);
               ulInDrop.appendChild(dropL);
            }
         }
         
         
         navLink.appendChild(drop);
         ulPrinc.appendChild(navLink);
      }
      tiempo += 0.25;

   }

   divRedes = document.createElement("div");
   divRedes.setAttribute("class", "redes-menu");
   aFacebook = document.createElement("a");
   aFacebook.setAttribute("href", "https://www.facebook.com/prefjamar");
   aInstagram = document.createElement("a");
   aInstagram.setAttribute("href", "https://www.instagram.com/prefabricados_jamar/");
   iFb = document.createElement("i");
   iIn = document.createElement("i");
   iFb.setAttribute("class", "fab fa-facebook-square");
   iIn.setAttribute("class", "fab fa-instagram");

   aFacebook.appendChild(iFb);
   aInstagram.appendChild(iIn);
   divRedes.appendChild(aFacebook);
   divRedes.appendChild(aInstagram);

   ulPrinc.appendChild(divRedes);

   return ulPrinc;
}


function aggFooter(){
   elemFooter = document.getElementById("footer");

   div1 = document.createElement("div");
   imgDiv1 = document.createElement("img");
   imgDiv1.setAttribute("loading", "lazy");
   imgDiv1.setAttribute("src", "img/logo_JAMAR_blanco.svg");
   imgDiv1.setAttribute("alt", "logo prefabricados jamar");
   pDiv1 = document.createElement("p");
   pDiv1.innerHTML = "Acompañamos y asesoramos a nuestros clientes en sus proyectos, con un respaldo de más de 40 años de experiencia en el mercado.";

   div1.appendChild(imgDiv1);
   div1.appendChild(pDiv1);

   div2 = document.createElement("div");
   h4Div2 = document.createElement("h4");
   h4Div2.innerHTML = "Enlaces de Interés";
   
   div2.appendChild(h4Div2);

   a1Div2 = document.createElement("a");
   a1Div2.setAttribute("href","sardineles.html");
   a1Div2.innerHTML = "Sardineles";

   div2.appendChild(a1Div2);

   a2Div2 = document.createElement("a");
   a2Div2.setAttribute("href", "tubos-concreto.html");
   a2Div2.innerHTML = "Tubería";

   div2.appendChild(a2Div2);

   a3Div2 = document.createElement("a");
   a3Div2.setAttribute("href", "ecopiso.html");
   a3Div2.innerHTML = "Ecopiso";

   div2.appendChild(a3Div2);

   a4Div2 = document.createElement("a");
   a4Div2.setAttribute("href", "tapa-anillo-manhole.html");
   a4Div2.innerHTML = "Tapa y Anillos Manhole";

   div2.appendChild(a4Div2);

   a5Div2 = document.createElement("a");
   a5Div2.setAttribute("href", "madera-plas.html");
   a5Div2.innerHTML = "Madera Plástica";

   div2.appendChild(a5Div2);

   div3 = document.createElement("div");

   h4Div3 = document.createElement("h4");
   h4Div3.innerHTML = "Encuéntrenos";

   a1Div3 = document.createElement("a");
   a1Div3.setAttribute("href","https://www.facebook.com/prefjamar");
   a1Div3.innerHTML = "<i class = 'fab fa-facebook-square'>" + "</i>" +"@prefjamar"; 

   a2Div3 = document.createElement("a");
   a2Div3.setAttribute("href","https://www.instagram.com/prefabricados_jamar/");
   a2Div3.innerHTML = "<i class = 'fab fa-instagram'>" + "</i>" +"@prefabricados_jamar"; 

   a3Div3 = document.createElement("a");
   a3Div3.setAttribute("href","https://www.instagram.com/prefabricados_jamar/");
   a3Div3.innerHTML = "<i class = 'fas fa-map-marker-alt'>" + "</i>" +"Av. Colón # 20-47, Calarcá - Quindío"; 

   div3.appendChild(h4Div3);
   div3.appendChild(a1Div3);
   div3.appendChild(a2Div3);
   div3.appendChild(a3Div3);

   div4 = document.createElement("div");

   h4Div4 = document.createElement("h4");
   h4Div4.innerHTML = "Contáctenos";

   a1Div4 = document.createElement("a");
   a1Div4.setAttribute("href","tel:0367422044");
   a1Div4.innerHTML = "<i class = 'fas fa-phone-alt'>" + "</i>" +"742 2044"; 

   a2Div4 = document.createElement("a");
   a2Div4.setAttribute("href","tel:+573155483871");
   a2Div4.innerHTML = "<i class = 'fas fa-mobile-alt'>" + "</i>" +"315 5483871"; 

   a3Div4 = document.createElement("a");
   a3Div4.setAttribute("href","mailto:jamarltda@gmail.com");
   a3Div4.innerHTML = "<i class = 'far fa-envelope'>" + "</i>" +"jamarltda@gmail.com"; 

   div4.appendChild(h4Div4);
   div4.appendChild(a1Div4);
   div4.appendChild(a2Div4);
   div4.appendChild(a3Div4);


   elemFooter.appendChild(div1);
   elemFooter.appendChild(div2);
   elemFooter.appendChild(div3);
   elemFooter.appendChild(div4);
   }

aggMenu();
aggFooter();

//botones para activar el pop-up

function abrirPopup(){
   console.log("entra");
}