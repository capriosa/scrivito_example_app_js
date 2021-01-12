import * as React from "react";
import * as Scrivito from "scrivito";
import BlogPost from "../BlogPost/BlogPostObjClass";

import SchemaDotOrg from "../../Components/SchemaDotOrg";


Scrivito.provideComponent("Blog", ({ page, params }) => {

  return (
    <div>
      
      <Scrivito.ContentTag className="div" content={page} attribute="body" />
      <SchemaDotOrg content={page} />
    </div>
  );
});
