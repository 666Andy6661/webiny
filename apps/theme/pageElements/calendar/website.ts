import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { Calendar } from "./Calendar";

const plugin = {
  name: "pb-render-page-element-customize-calendar",
  type: "pb-render-page-element",
  elementType: "customize-calendar",
  render: Calendar
} as PbRenderElementPlugin;

export default plugin;