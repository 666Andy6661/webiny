import React from "react";
import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
// import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
// import Recoilroot from "../../../../node_modules/recoil/es/recoil"
// import HeaderContents from "./components/headerContents";
// import styled from "@emotion/styled"
// import { PbEditorElement} from "@webiny/app-page-builder/types";
// import Paragraph from "@webiny/app-page-builder/render/plugins/elements/paragraph/Paragraph";
// import Paragraphs from "./components/paragraphs";
import HeaderContents from "./components/headerContents";

// interface HeaderContentsProps {
//     element: PbEditorElement;
//     // pbelement: PbElement;
    
//   }

export default () =>
  ({
    name: "pb-render-page-element-header-contents",
    type: "pb-render-page-element",
    elementType: "header-contents",
    render({ element }) {
      return (
        <HeaderContents element={element} />

      )
      
    }
  } as PbRenderElementPlugin);