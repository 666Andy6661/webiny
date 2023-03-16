import React from "react";
import styled from "@emotion/styled";
import parser from "html-react-parser"
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";


// For simplicity, we're hard-coding the GraphQL HTTP API URL here.


// It's often useful to type the data that the page element will carry.

const Description = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: var(--webiny-pb-theme-text-primary, #000078);
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Balloon = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  width:258px;
  height:258px;
  background: radial-gradient(circle at 60% 25%, #d4d1d4b8 10%, #cbb4cd74 40%, #8c98a451 60%, #888e9344 100%);
  /* transform:skewX(-45deg); */
  border-radius:100%;
  position:relative;
  /* box-shadow:inset -10px -10px 0 #cec5c514; */
  margin:20px 30px;
  /* transition:transform 0.5s ease; */
  top: 0;
  transition: top 0.8s ease;
  z-index:10;
  animation:balloons 4s ease-in-out infinite;
  transform-origin:bottom center;
  transition: height 0.5s ease;
  transition: width 0.5s ease-in-out;
  
  .bubbleIcon{
    opacity: 0.5;
    filter: blur(0.5px);

    }


  :hover {
    background: radial-gradient(circle at 60% 25%, #f3f1ef 5%,#b8a4bc74 40%, #96a3b051 60%, #6c727c44 100%);
    /* animation: fadeBackground 0.1s;
    animation-fill-mode: forwards; */
    /* overflow: hidden; */
    z-index: 1;
    top: -5px;
    width: 278px;
    height: 278px;
    /* margin-right: 0px; */
    margin-bottom: 0px;
  }
  perspective: 263;-webkit-perspective:263;
  
  @keyframes balloons {
  0%,100%{ transform:translateY(0) rotate(-1deg) ; }
  50%{ transform:translateY(-5px) rotate(1deg); }
}

  :hover .bubbleIcon{
    opacity: 0.8;
    filter: blur(0px);
  } 
  
  :before {
  font-size:20px;

  /* -webkit-filter: blur(5px); */
  display:block;
  text-align:center;
  width:100%;
  position:absolute;
  bottom:-12px;
  z-index:-100;
}
`
const Shadow = styled.div`
  position:relative;
  /* background-color: #b1b1b187; */
  width: 200px; 
  height: 20px; 
  background: radial-gradient(#b6b6b6ba,#8d8d8d1f);
  -moz-border-radius: 100px / 10px; 
  -webkit-border-radius: 100px / 10px; 
  border-radius: 100px / 10px; 
  animation:shadows 4s ease-in-out infinite;
  margin-bottom: 20px;

  @keyframes shadows {
  0%,100%{ transform:translateX(0) rotate(0deg) scale(1.1); }
  50%{ transform:translateX(5px) rotate(0deg) scale(1); }
  }
  :before {
  font-size:20px;
  display:block;
  text-align:center;
  width:100%;
  position:absolute;
  z-index:-100;
}
`
export interface FloatBubbleProps {
  variables: {
    iconName: string;
    iconSize: string;
    iconColor: string;
    url: string;
    description: string;
    shadow: boolean;
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


// The renderer React component.
export const FloatBubble = createRenderer(() => {

  const { getElement } = useRenderer();
  const element = getElement<FloatBubbleProps>();
  const time = Math.random() * 2; // I’m adding .5 here so the flicker isn’t too obnoxious
  const { iconName,iconSize,iconColor,url,description,shadow } = element.data.variables;
  const outerStyle = {
  } as React.CSSProperties

  // If the data has been retrieved, we render it via a simple unordered list.
  return (
    <div style={outerStyle}>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      <Wrapper>
        <a href= {url}>
        <div>
        <Balloon id="Balloons" style={{
            animationDelay:time+"s",
            width: `${element.data.settings?.width?.desktop?.value}`,
            height: `${element.data.settings?.height?.desktop?.value}`,
            display: "flex",
          }}>
        {/* <InnerImg src = {element.data.iframe?.url}/> */}
        {!element.data.icon?.svg? 
        //if there is no selected icon from webiny icon, use the google fonts icon, the user only need input the name of the icon to use it
          <span className="material-symbols-outlined" style={{
          color: iconColor,
          fontSize: iconSize,
          opacity: 0.8,
          textDecoration: "none"
        }}>{iconName}</span>
        :
          (
            <div className="bubbleIcon">
              {parser(element.data.icon.svg!)}
            </div>
          )
        }
        </Balloon>
        </div>
        </a>      
        {
          //render the shadow of the bubble
          shadow?
          <Shadow id="Shadows"/>
          :
          (
            <div></div>
          )
        }  
      <Description>{description}</Description>
      </Wrapper>
    </div>
  );
});