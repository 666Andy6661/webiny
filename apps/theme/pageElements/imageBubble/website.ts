import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { ImageBubble } from "./ImageBubble";

const plugin = {
  name: "pb-render-page-element-image-bubble",
  type: "pb-render-page-element",
  elementType: "image-bubble",
  render: ImageBubble
} as PbRenderElementPlugin;

export default plugin;