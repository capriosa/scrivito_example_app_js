import * as React from "react";
import * as Scrivito from "scrivito";
import InPlaceEditingPlaceholder from "../../Components/InPlaceEditingPlaceholder";
import formatDate from '../../utils/formatDate'


Scrivito.provideComponent("PressWidget", ({ widget }) => {
  const link = widget.get("link");
  const date = widget.get("date");

  if (!link) {
    return (
      <Scrivito.WidgetTag tag="li">
        <InPlaceEditingPlaceholder>
          Provide a link in the widget properties.
        </InPlaceEditingPlaceholder>
      </Scrivito.WidgetTag>
    );
  }

  return (
    <Scrivito.WidgetTag tag="div" className="row">
      <div className="col col-md-3">
        {formatDate(date, 'dd.mm.yyyy')}
      </div>
      <div className="col col-md-9">
      <Scrivito.LinkTag to={link}>
        <LinkTitle link={link} />
      </Scrivito.LinkTag>
      </div>
    </Scrivito.WidgetTag>
  );
});

const LinkTitle = Scrivito.connect(({ link }) => {
  if (link.title()) {
    return link.title();
  }

  if (link.isInternal()) {
    return link.obj().get("title");
  }

  return link.url();
});
