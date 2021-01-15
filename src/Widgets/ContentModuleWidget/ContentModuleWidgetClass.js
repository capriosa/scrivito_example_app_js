import * as Scrivito from "scrivito";

const ContentModuleWidget = Scrivito.provideWidgetClass("ContentModuleWidget", {
  attributes: {
    module: ["reference", { only: "ContentModule" }],
  },
});

export default ContentModuleWidget;