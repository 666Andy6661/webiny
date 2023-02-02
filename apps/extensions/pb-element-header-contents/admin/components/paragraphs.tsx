import React from "react";
import {MediumEditorOptions} from  "@webiny/app-page-builder/types";
import Paragraph from "@webiny/app-page-builder/editor/plugins/elements/paragraph/Paragraph";
// import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
// import { PbEditorElement } from "@webiny/app-page-builder/types";
interface HeaderContentsProps {
    elementId: string;
    mediumEditorOptions?: MediumEditorOptions;
    // element: PbEditorElement;
    // pbelement: PbElement;
    
}

const Paragraphs: React.FC<HeaderContentsProps> = ({ elementId }) => {

    return(
        <Paragraph elementId={elementId}/>
    )
}

export default Paragraphs