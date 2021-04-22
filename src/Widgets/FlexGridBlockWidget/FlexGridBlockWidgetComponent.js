import * as React from "react";
import * as Scrivito from "scrivito";
import "./FlexGridBlockWidget.scss"

Scrivito.provideComponent("FlexGridBlockWidget", ({ widget }) => {
  const id = widget.id();
  
  return (
    <Scrivito.WidgetTag tag="article" className={`article-${id}`}>
    
      <Scrivito.ContentTag
        content={widget}
        attribute="headline"
      />
      <Scrivito.ContentTag
        content={widget}
        attribute="text"
      />
      <Scrivito.ImageTag
        content={widget}
        attribute="image"
      />
      
    </Scrivito.WidgetTag>
  );
});
