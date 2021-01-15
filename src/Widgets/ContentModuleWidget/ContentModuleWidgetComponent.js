import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";

Scrivito.provideComponent("ContentModuleWidget", ({ widget }) => {
  const module = widget.get("module");
  const editing = Scrivito.isInPlaceEditingActive();
  return (
    <div>
      {editing && module ? (
        <div className="alert-info">
          Changing this module updates all its instances.
        </div>
      ) : null}
      {module ? (
        <Scrivito.ContentTag content={module} attribute="content" />
      ) : (
        <InPlaceEditingPlaceholder>
          Select the module in the widget properties.
        </InPlaceEditingPlaceholder>
      )}
    </div>
  );
});