import * as Scrivito from "scrivito";

const PressContainerWidget = Scrivito.provideWidgetClass("PressContainerWidget", {
  attributes: {
    headline: "string",
    links: ["widgetlist", { only: "PressWidget" }],
  },
});

export default PressContainerWidget;
