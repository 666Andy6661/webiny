import React from "react";
import styled from "@emotion/styled";

import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";
import gradientColor from "./assets/gradient_1.png";

// For simplicity, we're hard-coding the GraphQL HTTP API URL here.


// It's often useful to type the data that the page element will carry.
export interface GradientCircleProps {
  variables: {
      rotation: string;
      zindex: string;
  };
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

const Circle = styled.div`
    position: relative;
    background-image: url(${gradientColor}); 
    border-radius: 50%;
    background-size: cover;
    animation:ball 4s ease-in-out infinite;
    /* transform-origin:bottom center; */
    transition: height 0.5s ease;
    transition: width 0.5s ease-in-out;

    @keyframes ball {
        0%,100%{ transform:translateY(0) rotate(-1deg) ; }
        50%{ transform:translateY(-5px) rotate(1deg); }
    }
    
`

// The renderer React component.
export const GradientCircle = createRenderer(() => {
  // Let's retrieve the variables that were chosen by
  // the user upon dropping the page element onto the page.
  const { getElement } = useRenderer();
  const element = getElement<GradientCircleProps>();
  // const { data } = element;


  const { rotation, zindex } = element.data.variables;
  console.log(element)
  const circleStyle = {
    // top: `${element.data.settings?.data.settings?.margin?.desktop?.top}`,
    // right: `${props.Pbelement?.data.settings?.margin?.desktop?.right}`,
    
    width: `${element.data.settings?.height?.desktop?.value}`,
    height: `${element.data.settings?.height?.desktop?.value}`,

    // height: "50px",
    // width: "50px",
    transform: `rotate(${rotation})`,
    zIndex: `${zindex}`,
  } as React.CSSProperties
  const outerStyle = {
    transform: `rotate(${rotation + "deg"})`


  } as React.CSSProperties

  // If the data has been retrieved, we render it via a simple unordered list.
  return (
    <div style={outerStyle}>
      <Circle className="gradient_circle" style={circleStyle}/>
    </div>
  );
});