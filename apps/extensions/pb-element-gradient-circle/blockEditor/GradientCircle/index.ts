import { PbBlockEditorCreateVariablePlugin } from "@webiny/app-page-builder/types";

export default {
    name: "pb-block-editor-create-variable-gradient-circle-custom",
    type: "pb-block-editor-create-variable",
    elementType: "gradient-circle-custom",
    createVariables({ element }) {
        return [
            {
                id: `${element.id}.rotation`,
                type: "gradient-circle-custom",
                label: "Circle Rotation",
                value: element.data?.gradientCircle?.rotation
            },
            {
                id: `${element.id}.zindex`,
                type: "gradient-circle-custom",
                label: "Circle z-index",
                value: element.data?.gradientCircle?.zindex
            }
        ];
    },
    getVariableValue({ element, variableId }) {
        if (!variableId) {
            return null;
        }
        if (variableId.endsWith(".rotation")) {
            return element.data?.gradientCircle?.rotation;
        }
        if (variableId.endsWith(".zindex")) {
            return element.data?.gradientCircle?.zindex;
        }

        return null;
    }
} as PbBlockEditorCreateVariablePlugin;