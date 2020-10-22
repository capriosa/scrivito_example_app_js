import * as React from "react";
import * as Scrivito from "scrivito";
import { ReactTinyLink } from 'react-tiny-link'

Scrivito.provideComponent("ReactTinyLinkWidget", ({ widget }) => {
  return (
  <ReactTinyLink
  cardSize={widget.get("cardSize")}
  showGraphic={true}
  maxLine={widget.get("maxLines")}
  minLine={widget.get("minLines")}
  url={widget.get("url")}
/>
  )
});
