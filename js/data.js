const data= {
    referencies:[],
    names:[],
    choicesTwo:[],
    choicesThree:[],
    
    listcars:[
        //LES SPORTIVES
        {
            references:'nos sportives',
            names: ['Remember'],
            choicesTwo:['Athletics'],
            choicesThree:['the shadow'],
        },
                  
      
        // LES DREAMS
        {
            references:'nos dreams',
            names: ['Psychedelic'],
            choicesTwo:['The dreamer'],
            choicesThree:['The seriousness'],
        },
      
        //LES LOVING
        {
            references:'nos loving',
            names: ['The Walker'],
            choicesTwo:['The fruit'],
            choicesThree:['The passion'],
        },
    ],

initListcarFromData:()=>{
    data.listcars.forEach((listcars)=> {
            // si la name de la car n'existe pas dans notre tableau de la liste des voitures
            if (!data.referencies.includes(listcars.references)){
                // on l'ajoute
            data.referencies.push(listcars.references);
            }
        });

    data.listcars.forEach((listcars)=> {
        // si le name de la car n'existe pas dans notre tableau de la liste des voitures
        if (!data.names.includes(listcars.names)){
            // on l'ajoute
        data.names.push(listcars);
        }
    });
    data.listcars.forEach((listcars)=> {
        // si le name de la car n'existe pas dans notre tableau de la liste des voitures
        if (!data.choicesTwo.includes(listcars.choicesTwo)){
            // on l'ajoute
        data.choicesTwo.push(listcars);
        }
    });
    data.listcars.forEach((listcars)=> {
        // si le name de la car n'existe pas dans notre tableau de la liste des voitures
        if (!data.choicesThree.includes(listcars.choicesThree)){
            // on l'ajoute
        data.choicesThree.push(listcars);
        }
    });

   


    console.log(data.names);
}
}