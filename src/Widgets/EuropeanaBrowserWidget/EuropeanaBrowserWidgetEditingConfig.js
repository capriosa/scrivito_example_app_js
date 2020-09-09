import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('EuropeanaBrowserWidget', {
  title: 'Europeana Browser',
  attributes: {
    keyword: {
      title: 'Keyword'
    },


  },

  properties: [
    'keyword',

  ],

  propertiesGroups: [
    {
      title: "Europeana Browser",
      component: "EuropeanaTab",
    },
],

})
