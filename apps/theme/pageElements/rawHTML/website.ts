import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { RawHTML } from "./RawHTML";

const plugin = {
  name: "pb-render-page-element-raw-html",
  type: "pb-render-page-element",
  elementType: "raw-html",
  render: RawHTML
} as PbRenderElementPlugin;

export default plugin;