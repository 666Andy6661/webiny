import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { FloatBubble } from "./FloatBubble";

const plugin = {
  name: "pb-render-page-element-float-bubble",
  type: "pb-render-page-element",
  elementType: "float-bubble",
  render: FloatBubble
} as PbRenderElementPlugin;

export default plugin;