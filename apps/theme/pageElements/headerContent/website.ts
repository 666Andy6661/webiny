import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { HeaderContent } from "./HeaderContent";

const plugin = {
  name: "pb-render-page-element-header-content",
  type: "pb-render-page-element",
  elementType: "header-content",
  render: HeaderContent
} as PbRenderElementPlugin;

export default plugin;