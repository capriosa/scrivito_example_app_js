import * as React from "react";
export default class Comments extends React.Component {
 

  constructor(props){ 
    super(props);
    this.commentBox = React.createRef(); // Creates a reference to inject the <script> element
  }
  componentDidMount () {
      
      let scriptEl = document.createElement("script");
      scriptEl.setAttribute("src", "https://utteranc.es/client.js");
      scriptEl.setAttribute("crossOrigin","anonymous");
      scriptEl.setAttribute("async", true);
      scriptEl.setAttribute("repo", "capriosa/scrivito_example_app_js");
      scriptEl.setAttribute("issue-term", "title");
      this.commentBox.current.appendChild(scriptEl);
  }

  render() {
    return (
        <div className="comment-box-wrapper container pt-7">
          <h3 className="mb-0">Kommentare</h3>
          <hr className="my-0"/>
          <div ref={this.commentBox} className="comment-box"/>
          {/* Above element is where the comments are injected */}
        </div>
    );
  }
}
