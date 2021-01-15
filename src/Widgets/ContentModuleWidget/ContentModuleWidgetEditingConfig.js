import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("ContentModuleWidget", {
  title: "Content Module",
  titleForContent: widget =>
    widget.get("module") ? widget.get("module").get("title") : null,
  attributes: {
    module: {
      title: "Content module",
      description: "The kind of module to include",
    },
  },
  properties: ["module"],
});