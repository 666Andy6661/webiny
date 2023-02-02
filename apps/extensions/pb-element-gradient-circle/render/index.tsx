import React from "react";
import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import GradientCircle from "./components/gradient_circle";

export default () => 
({

    name: "pb-render-page-element-gradient-circle",
    type: "pb-render-page-element",
    elementType: "gradient-circle-custom",
    render({ element }) {
        return (
   
                <GradientCircle element={element} />

        )
    }
} as PbRenderElementPlugin );