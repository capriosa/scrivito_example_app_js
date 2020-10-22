import * as Scrivito from "scrivito";

const ReactTinyLinkWidget = Scrivito.provideWidgetClass("ReactTinyLinkWidget", {
  attributes: {
    url: "string",
    cardSize: ["enum", {values: ["small", "large"]}],
    minLines: ["enum", {values: ["1", "2", "3"]}],
    maxLines: ["enum", {values: ["1", "2", "3"]}],
  },
});

export default ReactTinyLinkWidget;
