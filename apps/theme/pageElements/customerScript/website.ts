import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { CustomerScript } from "./CustomerScript";

const plugin = {
  name: "pb-render-page-element-customer-script",
  type: "pb-render-page-element",
  elementType: "customer-script",
  render: CustomerScript
} as PbRenderElementPlugin;

export default plugin;