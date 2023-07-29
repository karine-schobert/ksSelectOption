const data= {
    labels:[],
    references:[],
    names:[],
    listcars:[
        //LES SPORTIVES
        {
            references:'nos sportives',
            name:'Remember',
            name:'Athletics',
            name:'the shadow',
        },
        // LES DREAMS
        {
            references:'nos dreams',
            name:'Psychedelic',
            name:'The dreamer',
            name:'The seriousness',
        },
      
        //LES LOVING
        {
            references:'nos loving',
            name:'The Walker',
             name:'The fruit',
             name:'The passion',
             
        },
      

      
    ],

initListcarFromData:()=>{
    data.listcars.forEach((listcars)=> {
        // si le name de la car n'existe pas dans notre tableau de la liste des voitures
        if (!data.names.includes(listcars.name)){
            // on l'ajoute
        data.names.push(listcars);
        }
    });
    data.listcars.forEach((listcars)=> {
        // si le name de la car n'existe pas dans notre tableau de la liste des voitures
        if (!data.references.includes(listcars.references)){
            // on l'ajoute
        data.references.push(listcars.references);
        }
    });


    console.log(data.names);
}
}