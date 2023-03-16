import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { CustomizeCta } from "./CustomizeCta";

const plugin = {
  name: "pb-render-page-element-customize-cta",
  type: "pb-render-page-element",
  elementType: "customize-cta",
  render: CustomizeCta
} as PbRenderElementPlugin;

export default plugin;