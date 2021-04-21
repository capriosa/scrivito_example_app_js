import * as Scrivito from "scrivito";

const FlexGridBlockWidget = Scrivito.provideWidgetClass("FlexGridBlockWidget", {
  attributes: {
    headline: ["widgetlist", { only: ["HeadlineWidget"] }],
    text: ["widgetlist", { only: ["TextWidget"] }],
    image: ["reference", { only: ["Image"] }],
  },
});



export default FlexGridBlockWidget;
