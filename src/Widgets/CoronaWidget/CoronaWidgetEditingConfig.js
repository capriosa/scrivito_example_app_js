import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("CoronaWidget", {
  title: "Corona",

  attributes: {
    country: {
      title: 'country',
      description: 'Country,'
    }
  },

  properties: [
    'country'
  ],

  initialContent: {
    country: "Germany",

  }
});
