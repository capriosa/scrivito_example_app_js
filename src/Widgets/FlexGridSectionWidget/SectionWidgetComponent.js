import * as React from "react";
import * as Scrivito from "scrivito";
import "./SectionWidget.scss"

Scrivito.provideComponent("SectionWidget", ({ widget }) => {

  const sectionClassNames = [];
  const sectionStyle = {};

  const backgroundColor = widget.get("backgroundColor") || "white";
  const useGradient = widget.get("useGradient") === "yes";
  const rightBorder = widget.get("rightBorder") === "yes";
  const verticalAlgin = widget.get("verticalAlign");

  
  
  

  const backgroundImage = widget.get("backgroundImage");
  if (backgroundImage) {

    sectionStyle.background = [
      { image: backgroundImage },
    ];
  }

  if (rightBorder) {
    sectionClassNames.push('border-right')
  }

  if (useGradient) {

    sectionStyle.background = [
      {
        image: "linear-gradient(rgba(46, 53, 60, 0.7), rgba(46, 53, 60, 0.7))",
      },
      { image: backgroundImage },
    ];
  }

  if (verticalAlgin === "top") {
    sectionClassNames.push("align-items-start")
  }
  if (verticalAlgin === "center") {
    sectionClassNames.push("align-items-center")
  }
  if (verticalAlgin === "bottom") {
    sectionClassNames.push("align-items-end")
  }

  if (widget.get("boxStyle") !== "white") {
    sectionClassNames.push(widget.get("boxStyle"))
  }
  if (widget.get("useOffset") === "yes") {
    sectionClassNames.push("box-offset");
  }
  if (widget.get("boxHeight") === "5") {
    sectionClassNames.push("height-5");
  }
  if (widget.get("boxHeight") === "10") {
    sectionClassNames.push("height-10");
  }
  if (widget.get("boxHeight") === "15") {
    sectionClassNames.push("height-15");
  }
  if (widget.get("boxHeight") === "20") {
    sectionClassNames.push("height-20");
  }
  if (widget.get("boxHeight") === "25") {
    sectionClassNames.push("height-25");
  }
  if (widget.get("boxHeight") === "33") {
    sectionClassNames.push("height-33");
  }
  if (widget.get("boxHeight") === "50") {
    sectionClassNames.push("height-50");
  }
  if (widget.get("boxHeight") === "66") {
    sectionClassNames.push("height-66");
  }
  if (widget.get("boxHeight") === "75") {
    sectionClassNames.push("height-75");
  }
  if (widget.get("boxHeight") === "100") {
    sectionClassNames.push("height-100");
  }

  sectionClassNames.push(backgroundColor);

  if (widget.get("showPadding") === "no") {
    sectionClassNames.push("no-padding");
  }

  if (widget.get("useFullWidth") === "yes") {
    sectionClassNames.push("container-fluid");
  }
  else if (widget.get("useFullWidth") === "no"){
    sectionClassNames.push("container");
  }

  if (widget.get("useFullHeight") === "yes") {
    sectionClassNames.push("full-height");
  }

  let contentClassName = "container";
  if (widget.get("useFullWidth") === "yes") {
    contentClassName = "container-fluid gutter0";
  }

  if(widget.get("useFlexGrid") === "yes")
  return (
    
      <Scrivito.ContentTag
        className="flex-grid"
        content={widget}
        attribute="content"
      />
    
  )
  else if(widget.get("useFlexGrid") === "no")
    return (
      <Scrivito.BackgroundImageTag
      tag="section"
      className={sectionClassNames.join(" ")}
      style={sectionStyle}
    >
      <Scrivito.ContentTag
        className={contentClassName}
        content={widget}
        attribute="content"
      />
    </Scrivito.BackgroundImageTag>
    )
});
