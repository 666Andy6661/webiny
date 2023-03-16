import { PbRenderElementPlugin } from "@webiny/app-page-builder/types";
import { Blog } from "./Blog";

const plugin = {
  name: "pb-render-page-element-blog",
  type: "pb-render-page-element",
  elementType: "blog",
  render: Blog
} as PbRenderElementPlugin;

export default plugin;