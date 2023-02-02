import React from "react"
// import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import { PbEditorElement } from "@webiny/app-page-builder/types";
import { useCurrentElement } from "@webiny/app-page-builder/editor/hooks/useCurrentElement"
import styled from "@emotion/styled";
import gradientColor from "../assets/gradient_1.png";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";

// import { useElementVariableValue } from "@webiny/app-page-builder/editor/hooks/useElementVariableValue";

export interface GradientCircleProps {
    variables: {
        rotation: number;
        zindex: number;
    };
    // Pbelement?: PbEditorElement;
}
// const Outer = styled.div`
    
// `
const Circle = styled.div`
    position: relative;
    /* background-image: url(${gradientColor}); */
    background-color: #000000;
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
   

  
    

export const GradientCircleEditor = createRenderer (() => {
    // let transDegree = element.data?.text?.data?.text||""
    // const variableValue = useElementVariableValue(element);
    
    useCurrentElement();
    const { getElement } = useRenderer();
    const element = getElement<GradientCircleProps>();
    const { data: props } = element;
    console.log(element);

    const { rotation, zindex } = props.variables;
    // variableValue.rotation = ""
    // const transformStyle = {
    //     display: "flex",
    //     // backgroundColor: "#000000",
    //   } as React.CSSProperties
    
    // let rotation = element.data?.["gradientCircle"]?.rotation||"";

    // if(variableValue){
    //     rotation = variableValue.rotation;
    //     // console.log(variableValue.rotation)
        
    // }

    // let zindex = element.data?.["gradientCircle"]?.zindex||"";

    // if(variableValue){
    //     zindex = variableValue.zindex;
    //     // console.log(variableValue.rotation)
    // }

    // transDegree = "-20deg"
    const circleStyle = {
        top: `${props.Pbelement?.data.settings?.margin?.desktop?.top}`,
        right: `${props.Pbelement?.data.settings?.margin?.desktop?.right}`,
        
        width: `${props.Pbelement?.data.settings?.height?.desktop?.value}`,
        height: `${props.Pbelement?.data.settings?.height?.desktop?.value}`,

        transform: `rotate(${rotation})`,
        zIndex: `${zindex}`,


    } as React.CSSProperties
    const outerStyle = {
        transform: `rotate(${rotation + "deg"})`


    } as React.CSSProperties


    return (
        // <ElementRoot
        //     className={
        //         "webiny-pb-base-page-element-style"
        //     }
        //     style = {transformStyle}
        //     element={element}
        // >    
        <div>
            <p>haha</p>
            <Circle className="gradient_circle" style={circleStyle}/>
        </div>
                
           
            
        // </ElementRoot>
    )
});

// export default GradientCircleEditor;