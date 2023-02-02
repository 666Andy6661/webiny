import React from "react"

import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import { PbEditorElement } from "@webiny/app-page-builder/types";
import styled from "@emotion/styled";
import gradientColor from "../assets/gradient_1.png";

interface GradientCircleProps {
    element: PbEditorElement;
}

const Outer = styled.div`
    
`
const Circle = styled.div`
    position: relative;
    background-image: url(${gradientColor});
    border-radius: 50%;
    background-size: cover;
    animation:ball 4s ease-in-out infinite;
    /* transform-origin:bottom center; */
    transition: height 0.5s ease;
    transition: width 0.5s ease-in-out;
    


    
    /* perspective: 293;-webkit-perspective:293;  */
    
    @keyframes ball {
        0%,100%{ transform:translateY(0) rotate(-1deg) ; }
        50%{ transform:translateY(-5px) rotate(1deg); }
    }
    
`
   

   

const GradientCircle: React.FC<GradientCircleProps> = ({ element }) => {
    const transformStyle = {
        display: "flex",
        // backgroundColor: "#000000",
      } as React.CSSProperties
    console.log(element)
    const { data } = element;
    const rotationDeg = element.data["gradientCircle"]?.rotation;

    const circleStyle = {
        top: `${data.settings?.margin?.desktop?.top}`,
        right: `${data.settings?.margin?.desktop?.right}`,
        
        width: `${data.settings?.height?.desktop?.value}`,
        height: `${data.settings?.height?.desktop?.value}`,

        // transform: `rotate(${rotationDeg})`,
        zIndex: `${element.data["gradientCircle"]?.zindex}`,


    } as React.CSSProperties
    const outerStyle = {
        transform: `rotate(${rotationDeg + "deg"})`


    } as React.CSSProperties



    return (
        <ElementRoot
            className={
                "webiny-pb-base-page-element-style"
            }
            style = {transformStyle}
            element={element}
        >
            <Outer style={outerStyle}>
                <Circle className="gradient_circle" style={circleStyle} id={"new_circle"}/>
            </Outer>
            
        </ElementRoot>
    )
};

export default GradientCircle;