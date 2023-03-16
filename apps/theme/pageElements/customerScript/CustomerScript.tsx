import React, { useEffect } from "react";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";

export interface CustomerScriptElementData {
    path: PathChild[],
    type: string,
    text: string,
}

export interface PathChild {
    data: {
        text: string;
    }
}

export const CustomerScript = createRenderer(() => {
    // Let's retrieve the variables that were chosen by
    // the user upon dropping the page element onto the page.
    const { getElement } = useRenderer();
    const element = getElement<CustomerScriptElementData>();
    
    // Load script to page, load position depends on user choice
    useEffect(()=>{
        const customerScriptsContainer = document.createElement("div");
        customerScriptsContainer.id = `customer-scripts-container-${element.id}`;

        if(element.data.type === "Header") {
            document.head.appendChild(customerScriptsContainer);
        }
        else {
            document.body.appendChild(customerScriptsContainer);
        }

        // Load external script by URL
        if(element.data.path){
            element.data.path.map( (item : PathChild, index : number) => {
                const scriptURL = item.data.text;
                const newScript = document.createElement("script");
                newScript.src = scriptURL;

                customerScriptsContainer.appendChild(newScript);
                console.log(`Script ${index + 1} loaded!`)
            })
        }

        // Load user input script code
        if(element.data.text){
            const rawScript = document.createElement("script");
            rawScript.innerHTML = element.data.text;

            customerScriptsContainer.appendChild(rawScript);
            console.log("Raw script added!");
        }

        return (() => {
            if(element.data.type === "Header") {
                document.head.removeChild(customerScriptsContainer);
            }
            else {
                document.body.removeChild(customerScriptsContainer);
            }
        })
    },[])
    
    return (
            <></>
    )
});

