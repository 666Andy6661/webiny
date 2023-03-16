import React, { useEffect } from "react";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";

export interface RawHTMLElementData {
    text:{
        data: {
            text: string,
        }
    },
}

export const RawHTML = createRenderer(() => {
    // Let's retrieve the variables that were chosen by
    // the user upon dropping the page element onto the page.
    const { getElement } = useRenderer();
    const element = getElement<RawHTMLElementData>();

    useEffect(()=>{
        if( element.data.text?.data?.text ){
            const codeContainer = document.getElementById(`raw-html-container-${element.id}`);
            const newElement = document.createElement("div");

            newElement.innerHTML = element.data.text.data.text;
            newElement.id = "customer-code";

            if(codeContainer) { codeContainer.appendChild(newElement); }
            console.log("HTML raw code loaded!");
        }

        // Destroy container when element is unmounted to prevent multiple additions
        return () => {
            const codeContainer = document.getElementById(`raw-html-container-${element.id}`);
            if (codeContainer) { codeContainer.remove() }
            return;
        }
            
    },[element.data])
    
    return (
        <>
            <div id={`raw-html-container-${element.id}`}/>
        </>
    )
    
});

