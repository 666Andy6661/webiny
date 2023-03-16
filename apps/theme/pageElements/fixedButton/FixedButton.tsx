import React, { useEffect } from "react";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";
import icon from "./assets/message.png";
import "./fixed-button.scss";
import "./fixed-button-extend.scss";
import styled from "@emotion/styled";
// For simplicity, we're hard-coding the GraphQL HTTP API URL here.


// It's often useful to type the data that the page element will carry.
const Text = styled.p`
    color: #ffffff;
    font-family: var(--webiny-theme-typography-primary-font-family);
    font-size: 1rem;
`
export interface FixedButtonProps {
  variables: {
    text: string;
    position: string;
    color: string;
    extend: boolean;
    urlSource: string;
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
    margin:{
        desktop:{
            top: string;
            right: string;
            bottom: string;
            left: string;
    
            }
        }
    }
  }



// The renderer React component.
export const FixedButton = createRenderer(() => {

  const { getElement } = useRenderer();
  const element = getElement<FixedButtonProps>();

  const { text,position,color,urlSource,extend } = element.data.variables;
  const outerStyle = {
  } as React.CSSProperties

  let buttonContent = "Fixed Button";
    let backgroundColor = ""
    
    // let buttonContent = "Fixed Button";
    const url = urlSource;
    
    buttonContent = text||"";
    backgroundColor = color||"";
    //@ts-ignore

    if(text) {
        buttonContent = text;
    }

    const handleMouseEnter = () => {
        const fixedButton = document.getElementById("fixed-button");
        const fixedButtontext = document.getElementById("fixed-button__text");
        // const fixedButtontext = document.getElementById("fixed-button__text");
        
       
        if (fixedButtontext && fixedButton){
            fixedButton.style.width = fixedButtontext.clientWidth + 100 + "px";
            
        }
    }

    const handleMouseLeave = () => {
        const fixedButton = document.getElementById("fixed-button");

        
 
        if (fixedButton && element.data.settings?.height?.desktop?.value){
            // @ts-ignore
            // this value type is different from the returned value. CMS response is string, but in node module is number
            fixedButton.style.width = element.data.settings.height.desktop.value;
        }
    }

    useEffect(() => {

        const fixedButton = document.getElementById("fixed-button");

        if (fixedButton && element.data?.settings?.height?.desktop?.value) {
            //@ts-ignore
            fixedButton.style.height = element.data.settings.height.desktop.value;
            //@ts-ignore
            fixedButton.style.width = element.data.settings.width.desktop.value;

        }
        //switch the position of the fixed button
        if(fixedButton && position && element.data.settings?.margin?.desktop){

            switch(position){
                case "right-bottom" :
                    fixedButton.style.right = element.data.settings.margin.desktop.right!;
                    fixedButton.style.bottom = element.data.settings.margin.desktop.bottom!;
                    break;
                case "left-bottom" :
                    fixedButton.style.left = element.data.settings.margin.desktop.left!;
                    fixedButton.style.bottom = element.data.settings.margin.desktop.bottom!;
                    break;
                case "right-top" :
                    fixedButton.style.right = element.data.settings.margin.desktop.right!;
                    fixedButton.style.top = element.data.settings.margin.desktop.top!;
                    break;
                case "left-top" :
                    fixedButton.style.left = element.data.settings.margin.desktop.left!;
                    fixedButton.style.top = element.data.settings.margin.desktop.top!;
                    break;
            }
        }
        //@ts-ignore
    },[element.data.settings.height.desktop.value]);
    //get the fixed button element, and make the width of it equal to text width plus 100px
    const fixedButtonExtend = document.getElementById("fixed-button-extend");
        const fixedButtontext = document.getElementById("fixed-button__text");

        if (fixedButtonExtend&&fixedButtontext){
            fixedButtonExtend.style.width = fixedButtontext.clientWidth + 100 + "px";
        }

  // If the data has been retrieved, we render it via a simple unordered list.
  return (
    <div style={outerStyle}>
         {extend?
                 <a 
                 className="fixed-button"
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 // href={url}
                 id="fixed-button"
                 style={{
                     backgroundColor: backgroundColor
                 }}
             >
                <img className="fixed-button__icon" id="fixed-button__icon" src={icon}/>
                    <p className="fixed-button__text" id="fixed-button__text">{buttonContent}</p>
            </a>
            :
            <a 
                    className="fixed-button-extend"
                    id="fixed-button-extend"
                    href={url}
                    style={{
                        backgroundColor: backgroundColor,
                        // width: "400px",
                        height: element.data.settings?.height?.desktop?.value,
                    }}
                >
               
                <Text>{buttonContent}</Text>
            </a>
            }
            
    </div>
  );
});