import React from "react";
import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
// import * as dotenv from 'dotenv'

import Webinar from "./components/webinar";


export default () => 
({

    name: "pb-render-page-element-blog",
    type: "pb-render-page-element",
    elementType: "blog-custom",
    render({ element }) {
        return (
            <Webinar element={element} />
        )
    }
} as PbRenderElementPlugin );
