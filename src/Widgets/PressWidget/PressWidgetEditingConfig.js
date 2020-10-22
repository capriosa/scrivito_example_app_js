import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("PressWidget", {
  title: "Press List item",
  attributes: {
    date: {
      title: "Date",
    },
    link: {
      title: "Link to PDF",
      description:
        "If no title is given, the obj's title or the external URl will be shown.",
    },
  },
  properties: ["date", "link"],
});
