import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { CustomizeForm } from "./CustomizeForm";

const plugin = {
  name: "pb-render-page-element-customize-form",
  type: "pb-render-page-element",
  elementType: "customize-form",
  render: CustomizeForm
} as PbRenderElementPlugin;

export default plugin;