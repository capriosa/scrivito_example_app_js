import * as Scrivito from "scrivito";

const MasonryContainerWidget = Scrivito.provideWidgetClass(
  "MasonryContainerWidget",
  {
    attributes: {
      columns: ["widgetlist", { only: "ColumnWidget" }],
      alignment: ["enum", { values: ["start", "center", "end", "stretch"] }],
      device: ["enum", { values: ["-", "sm-", "md-", "lg-", "xl-"] }],
      class: 'string'
    },
  }
);

export default MasonryContainerWidget;
