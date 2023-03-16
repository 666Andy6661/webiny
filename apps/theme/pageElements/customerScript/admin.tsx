import React from "react";
import styled from "@emotion/styled";
import { Input } from "@webiny/ui/Input";
import { RichTextEditor } from "@webiny/ui/RichTextEditor";
// import { CodeEditor } from "@webiny/ui/CodeEditor"
import { Select } from "@webiny/ui/Select";
import { ButtonPrimary } from "@webiny/ui/Button";
import { Cell, Grid } from "@webiny/ui/Grid";
import {
  PbEditorPageElementAdvancedSettingsPlugin,
  PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";
import { ReactComponent as CustomerScriptIcon } from "./assets/javascript.svg";
import { CustomerScript, CustomerScriptElementData } from "./CustomerScript";

const PreviewBox = styled("div")({
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    svg: {
        height: 50,
        width: 50,
        color: "var(--mdc-theme-text-secondary-on-background)"
    },

    img: {
        height: "50px",
        width: "50px",
    }
});

const INITIAL_ELEMENT_DATA: CustomerScriptElementData = {
    path: [],
    type: "Header",
    text: "",
};

export default [
  // The `PbEditorPageElementPlugin` plugin.
  {
    name: "pb-editor-page-element-customer-script",
    type: "pb-editor-page-element",
    elementType: "customer-script",
    render: CustomerScript,
    toolbar: {
      // We use `pb-editor-element-group-media` to put our new 
      // page element into the Media group in the left sidebar.
      title: "customer script",
      group: "pb-editor-element-group-code",
      preview() {
        // We can return any JSX / React code here. To keep it
        // simple, we are simply returning the element's name.
        return (
            <PreviewBox>
              <CustomerScriptIcon />
            </PreviewBox>
        )
      }
    },

    // Defines which types of element settings are available to the user.
    settings: [
      "pb-editor-page-element-settings-delete",
    ],

    // Defines onto which existing elements our element can be dropped.
    // In most cases, using `["cell", "block"]` will suffice.
    target: ["cell", "block"],
    onCreate: "open-settings",
    
    // `create` function creates the initial data for the page element. 
    create(options) { 
      return {
        type: "customer-script",
        elements: [],
        data: INITIAL_ELEMENT_DATA,
        ...options
      };
    }
    
  } as PbEditorPageElementPlugin,

  // The `PbEditorPageElementAdvancedSettingsPlugin` plugin.
  {
    name: "pb-editor-page-element-advanced-settings-customer-script",
    type: "pb-editor-page-element-advanced-settings",
    elementType: "customer-script",
    render({ Bind, submit }) {
      // In order to construct the settings form, we're using the 
      // `@webiny/form`, `@webiny/ui`, and `@webiny/validation` packages.
        return (
            <>
              <Grid>
                <Cell span={12}>
                  <Bind name={"path"} >
                    <RichTextEditor label={"URL"} description={"Enter script URl"}></RichTextEditor>
                  </Bind>
                </Cell>
                <Cell span={12}>
                  <Bind name={"type"}>
                    <Select options={["Header","Footer"]} value={"Header"} description={"Where to load script?"}/>
                  </Bind>
                </Cell>
                <Cell span={12}>
                  <Bind name={"text.data.text"}>
                    <Input rows={5} label={"Script code"} description={"The raw script code"}/>
                  </Bind>
                  <p>Only one raw script file can be add by this module.</p>
                  <p>If multiple script files need to be loaded, use several script elements.</p>
                </Cell>
                <Cell span={12}>
                  <ButtonPrimary onClick={submit}>Save</ButtonPrimary>
                </Cell>
              </Grid>
            </>
        );
    }
  } as PbEditorPageElementAdvancedSettingsPlugin
];