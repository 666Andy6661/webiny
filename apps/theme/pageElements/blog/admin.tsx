import React from "react";
import styled from "@emotion/styled";
import { validation } from "@webiny/validation";
import { Input } from "@webiny/ui/Input";
import { ButtonPrimary } from "@webiny/ui/Button";
import { Cell, Grid } from "@webiny/ui/Grid";
import {
  PbEditorPageElementAdvancedSettingsPlugin,
  PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";

import { Blog, BlogElementData } from "./Blog";
import BlogIcon from "./assets/blog.png";

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

const INITIAL_ELEMENT_DATA: BlogElementData = {
    variables: { url: "/" },
    settings: {
        height: {
            desktop: {
                value: "50",
            }
        },
        width: {
            desktop: {
                value: "50",
            }
        },
    },
};

export default [
  // The `PbEditorPageElementPlugin` plugin.
  {
    name: "pb-editor-page-element-blog",
    type: "pb-editor-page-element",
    elementType: "blog",
    render: Blog,
    toolbar: {
      // We use `pb-editor-element-group-media` to put our new 
      // page element into the Media group in the left sidebar.
      title: "blog",
      group: "pb-editor-element-group-media",
      preview() {
        // We can return any JSX / React code here. To keep it
        // simple, we are simply returning the element's name.
        return (
            <PreviewBox>
                <img src={BlogIcon}/>
            </PreviewBox>
        )
      }
    },

    // Defines which types of element settings are available to the user.
    settings: [
      "pb-editor-page-element-settings-delete",
      "pb-editor-page-element-style-settings-width",
      "pb-editor-page-element-style-settings-height",
    ],

    // Defines onto which existing elements our element can be dropped.
    // In most cases, using `["cell", "block"]` will suffice.
    target: ["cell", "block"],
    onCreate: "open-settings",
    
    // `create` function creates the initial data for the page element. 
    create(options) { 
      return {
        type: "blog",
        elements: [],
        data: INITIAL_ELEMENT_DATA,
        ...options
      };
    }
  } as PbEditorPageElementPlugin,

  // The `PbEditorPageElementAdvancedSettingsPlugin` plugin.
  {
    name: "pb-editor-page-element-advanced-settings-blog",
    type: "pb-editor-page-element-advanced-settings",
    elementType: "blog",
    render({ Bind, submit }) {
      // In order to construct the settings form, we're using the 
      // `@webiny/form`, `@webiny/ui`, and `@webiny/validation` packages.
        return (
            <>
                <Grid>
                    <Cell span={12}>
                        <Bind name={"variables.url"} validators={validation.create("required,url")}>
                            {/* <Input label={"URL"} description={"Enter an CMS URl"} /> */}
                            <Input
                                label={"URL"}
                                type="string"
                                description={"Enter an CMS URl."}
                            />
                        </Bind>
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