import * as React from "react";
import * as Scrivito from "scrivito";

import BlogPostAuthor from "../../Components/BlogPost/BlogPostAuthor";
import BlogPostMorePosts from "../../Components/BlogPost/BlogPostMorePosts";
import BlogPostNavigation from "../../Components/BlogPost/BlogPostNavigation";
import SchemaDotOrg from "../../Components/SchemaDotOrg";
import Comments from "../../Components/Comments";

Scrivito.provideComponent("BlogPost", ({ page }) => (
  <div>
    <BlogPostNavigation currentPost={page} />
    <section className="bg-white">
      <div className="container">
        <Scrivito.ContentTag
          tag="h1"
          className="h2"
          content={page}
          attribute="title"
        />
        <Scrivito.ContentTag
          tag="h2"
          className="h4"
          content={page}
          attribute="subtitle"
        />
      </div>
    </section>
    <Scrivito.ContentTag tag="div" content={page} attribute="body" />
    <BlogPostAuthor author={page.get("author")} />
    <BlogPostMorePosts
      author={page.get("author")}
      filterBlogPostId={page.id()}
    />
    <Comments />
    <SchemaDotOrg content={page} />
  </div>
));
