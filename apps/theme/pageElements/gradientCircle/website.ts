import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { GradientCircle } from "./GradientCircle";

const plugin = {
  name: "pb-render-page-element-gradient-circle",
  type: "pb-render-page-element",
  elementType: "gradient-circle",
  render: GradientCircle
} as PbRenderElementPlugin;

export default plugin;