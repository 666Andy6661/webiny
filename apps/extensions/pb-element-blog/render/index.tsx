import React from "react";
import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
// import * as dotenv from 'dotenv'

import Blog from "./components/Blog";


export default () => 
({

    name: "pb-render-page-element-blog",
    type: "pb-render-page-element",
    elementType: "blog-custom",
    render({ element }) {
        return (
            <Blog element={element} />
        )
    }
} as PbRenderElementPlugin );