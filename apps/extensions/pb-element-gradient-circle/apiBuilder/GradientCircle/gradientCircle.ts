import { ContextPlugin } from "@webiny/handler";
import set from "lodash/set";
import { PbContext } from "@webiny/api-page-builder/types";
import { useElementVariables } from "@webiny/api-page-builder/graphql/elementProcessors/useElementVariables";

export default new ContextPlugin<PbContext>(context => {
    context.pageBuilder.addPageElementProcessor(({ block, element }) => {
        if (element.type !== "gradient-circle-custom") {
            return;
        }

        const variables = useElementVariables(block, element);

        const rotation = variables.find(variable => variable.id.endsWith(".rotation"))?.value || null;
        const zindex = variables.find(variable => variable.id.endsWith(".zindex"))?.value || null;

        if (rotation) {
            set(element, "data.gradientCircle.rotation", rotation);
        }

        if (zindex) {
            set(element, "data.gradientCircle.zindex", zindex);
        }
    });
});