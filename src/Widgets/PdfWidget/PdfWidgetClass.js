import * as Scrivito from "scrivito";


const PdfWidget = Scrivito.provideWidgetClass("PdfWidget", {
  attributes: {
    file: "reference",
  },
});

export default PdfWidget;
