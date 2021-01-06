import * as React from "react";
import * as Scrivito from "scrivito";

function logoObj({ scrolled, navigationStyle }) {
  let logoVersion;
  if (scrolled) {
    logoVersion = "logoDark";
  } else if (navigationStyle === "transparentDark") {
    logoVersion = "logoWhite";
  } else {
    logoVersion = "logoDark";
  }

  const root = Scrivito.Obj.root();
  if (root) {
    return root.get(logoVersion);
  }

  return undefined;
}

function Logo({ scrolled, navigationStyle }) {
  if (!Scrivito.Obj.root()) {
    return null;
  }

  const logo = logoObj({ scrolled, navigationStyle });

  return (
    <Scrivito.LinkTag to={Scrivito.Obj.root()} className="navbar-brand">
      <img src={logo.get('blob').url()} width="70" height="42" alt="Logo" />
    </Scrivito.LinkTag>
  );
}

export default Scrivito.connect(Logo);
