import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('UnsplashWidget', {
    title: 'Unsplash',
    attributes: {

        categorieId: {
            title: 'Unsplash categorie ID',

        },


    },


    properties: [
       'keyword' 
    ],
    propertiesGroups: [
        {
          title: "Allgemein",
          component: "UnsplashTab",
        },
    ]

});