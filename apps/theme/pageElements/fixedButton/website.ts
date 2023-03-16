import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { FixedButton } from "./FixedButton";

const plugin = {
  name: "pb-render-page-element-fixed-button",
  type: "pb-render-page-element",
  elementType: "fixed-button",
  render: FixedButton
} as PbRenderElementPlugin;

export default plugin;