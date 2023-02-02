import React from "react";
import {MediumEditorOptions} from  "@webiny/app-page-builder/types";
import Paragraph from "@webiny/app-page-builder/render/plugins/elements/paragraph/Paragraph";
// import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import { PbElement } from "@webiny/app-page-builder/types";
interface HeaderContentsProps {
    elementId: string;
    mediumEditorOptions?: MediumEditorOptions;
    element: PbElement;
    // pbelement: PbElement;
    
}

const Paragraphs: React.FC<HeaderContentsProps> = ({ element}) => {

    return(
        <Paragraph element={element}/>
    )
}

export default Paragraphs