import React from "react";
import { PbBlockVariable, PbEditorPageElementVariableRendererPlugin } from "@webiny/app-page-builder/types";
import TextVariableInput from "@webiny/app-page-builder/editor/plugins/elementSettings/variable/TextVariableInput";
import { useElementVariables } from "@webiny/app-page-builder/editor/hooks/useElementVariableValue";
// import { ColorPicker } from "@webiny/ui/ColorPicker";

export default {
    name: "pb-editor-page-element-variable-renderer-gradient-circle-custom",
    type: "pb-editor-page-element-variable-renderer",
    elementType: "gradient-circle-custom",
    getVariableValue(element) {
        const variables = useElementVariables(element);
        console.log(variables)
        return {
            rotation:
                variables?.find((variable: PbBlockVariable<string>) =>
                    variable.id.endsWith(".rotation")
                )?.value || "",
            zindex:
                variables?.find((variable: PbBlockVariable<string>) => variable.id.endsWith(".zindex"))
                    ?.value || "",
        };
    },
    renderVariableInput(variableId: string) {
        return <TextVariableInput variableId={variableId} />;
    },
    
    setElementValue(element, variables) {
        const newRotation = variables?.find((variable: PbBlockVariable<string>) =>
            variable.id.endsWith(".rotation")
        )?.value;
        const newzIndex = variables?.find((variable: PbBlockVariable<string>) =>
            variable.id.endsWith(".zindex")
        )?.value;

        if (newRotation && element?.data.gradientCircle) {
            element.data.gradientCircle.rotation = newRotation;
        }
        if (newzIndex && element?.data?.gradientCircle) {
            element.data.gradientCircle.zindex = newzIndex;
        }

        return element;
    }
} as PbEditorPageElementVariableRendererPlugin;