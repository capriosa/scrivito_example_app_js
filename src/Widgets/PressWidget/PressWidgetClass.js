import * as Scrivito from "scrivito";

const PressWidget = Scrivito.provideWidgetClass("PressWidget", {
  onlyInside: "PressContainerWidget",
  attributes: {
    date: "date",
    link: "link",
  },
});

export default PressWidget;
