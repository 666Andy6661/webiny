import React from "react";
import styled from "@emotion/styled";
import parser from "html-react-parser"
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";


// For simplicity, we're hard-coding the GraphQL HTTP API URL here.


// It's often useful to type the data that the page element will carry.
export interface CustomizeCtaProps {
  variables: {
    iconSrc: string;
    iconSize: string;
    iconColor: string;
    backgroundColor: string;
    url: string;
  };
  icon: {
    id: string;
    svg: string;
  }
  // Pbelement?: PbEditorElement;
  settings?: {
    height: {
      desktop: {
        value: string,
      }
    },
    width: {
      desktop: {
        value: string,
      }
    },
  }
}

const CircleCta = styled.div`
  border-radius: 50%;
  background-color: var(--webiny-pb-theme-primary,#FF6201);
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`

// The renderer React component.
export const CustomizeCta = createRenderer(() => {

  const { getElement } = useRenderer();
  const element = getElement<CustomizeCtaProps>();
  const { iconSrc,iconSize,iconColor,backgroundColor,url } = element.data.variables;
  const outerStyle = {

  } as React.CSSProperties

  // If the data has been retrieved, we render it via a simple unordered list.
  return (
    <div style={outerStyle}>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      <CircleCta id="circle" style={{
         height: element.data.settings?.height?.desktop?.value,
         width: element.data.settings?.width?.desktop?.value,
         backgroundColor : backgroundColor
      }}>
        <a href = {url}>
          {!element.data.icon?.svg? 
          //If there is selected icon from page editor, use the icon instead
          <span className="material-symbols-outlined" style={{
          color: iconColor,
          fontSize: iconSize + "px",
          opacity: 0.8,
          textDecoration: "none"
        }}>{iconSrc}</span>
        :
          (
            <div>
              {parser(element.data.icon.svg!)}
            </div>
          )
        }</a>
        

      </CircleCta>
    </div>
  );
});