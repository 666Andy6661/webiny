import React from "react";
import styled from "@emotion/styled";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";


// For simplicity, we're hard-coding the GraphQL HTTP API URL here.


// It's often useful to type the data that the page element will carry.

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
  /* width:258px; */
  /* height:258px; */
  background: radial-gradient(circle at 50% 50%, #d4d1d4f8 10%, #d1bad1ca 50%,#1310d3 95%);
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
    opacity: 0.9;
    filter: blur(0.5px);
    }

  @keyframes balloons {
  0%,100%{ transform:translateY(0);}
  50%{ transform:translateY(-5px);}
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

const InnerImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("https://edito.regionsjob.com/xjob/wp-content/uploads/sites/3/2017/01/shutterstock_531827011.jpg");
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
`
export interface ImageBubbleProps {
  variables: {
    imageSrc: string;
    bubbleColor: string;
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


// The renderer React component.
export const ImageBubble = createRenderer(() => {

  const { getElement } = useRenderer();
  const element = getElement<ImageBubbleProps>();
  const time = Math.random() * 2; // I’m adding .5 here so the flicker isn’t too obnoxious
  const { imageSrc,bubbleColor} = element.data.variables;
  const outerStyle = {
   
  } as React.CSSProperties

  // If the data has been retrieved, we render it via a simple unordered list.
  return (
    <div style={outerStyle}>
      <Wrapper>
        <Balloon id="Balloons" style={{
            animationDelay:time+"s",
            background: "radial-gradient(circle at 50% 50%, #d4d1d4f8 10%, #d1bad1ca 50%, " + bubbleColor + " 95%)",
            width: `${element.data.settings?.width?.desktop?.value}`,
            height: `${element.data.settings?.height?.desktop?.value}`,
            display: "flex",
            }}>
            <InnerImg style={{
                backgroundImage: "url(" + imageSrc + ")"
            }}></InnerImg>
        </Balloon>
    </Wrapper>
    </div>
  );
});