const app={

   // on declare une propriéte d'un module , sa valeur sera accessible dans toutes les methodes globale
   containerElem : null,
   labelElem: null,

   init:()=>{
    console.log('je suis dans mon init');
   
    app.containerElem= document.querySelector('.container-fluid');
   //  console.log( app.drawElement);
   data.initListcarFromData();
    app.createInterface();

   },

   createInterface: function(){
    app.createTitre();
    app.creatForm();

   },

createTitre:()=>{
     //on dessin le h1, insere dans le containerElemet ajoute le texteContent
     app.drawElement('h1', app.containerElem, { textContent:"Trouver une fiche technique de nos deudeuches "});
},

creatForm:()=>{
   // creation du form 
   const FormElem = app.drawElement('form',app.containerElem,{className:"caracteristique-container "});
  
   //creation du label 
   data.listcars.forEach((listcars)=>{
    //creation de la div 
   const divElem = app.drawElement('div',FormElem,{className:"input-group mb-3"});   
   const labelElem= app.drawElement('label', divElem,{className:"input-group-text m-2 w-75 bg-success text-uppercase", textContent:listcars.references});     
    // creation du selecte 
   const selectElem = app.drawElement('select',labelElem,{className:"form-select "});
   //creation del'option
   // chercher les elments du tableau pour chaque option
      const optionElem =app.drawElement('option', selectElem,{className:"list-item",textContent:listcars.names});
      app.drawElement('option', selectElem,{className:"list-item",textContent:listcars.choicesTwo});
      app.drawElement('option', selectElem,{className:"list-item",textContent:listcars.choicesThree});
})
},

  /**
  *
  * Fonction générique qui crée un element , ajoute des attributs, et insere dans le DOM
  * @param String nom de la balise à créer
  * @param Node container dans lequel inserer l'élément
  * @param Object liste des attributs à ajouter sur l'élémént
  * @return  Node : l'élément créer
  */
  drawElement: (nameBalise, containerNode, objectList = {}) => {
   //creation de l'élement
   const element = document.createElement(nameBalise);
   console.log(element);

   //on copie tous les élément 
   Object.assign(element,objectList)

   containerNode.appendChild(element);

   return element;
  }

};
// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);