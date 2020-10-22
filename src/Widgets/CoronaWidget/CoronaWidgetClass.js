import * as Scrivito from "scrivito";

const CoronaWidget = Scrivito.provideWidgetClass("CoronaWidget", {
  attributes: {
    country: "string",

  },
});

export default CoronaWidget;