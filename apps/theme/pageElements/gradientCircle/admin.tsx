import React from "react";
import styled from "@emotion/styled";
import { Input } from "@webiny/ui/Input";
import { ButtonPrimary } from "@webiny/ui/Button";
import { Cell } from "@webiny/ui/Grid";
import {
  PbEditorPageElementAdvancedSettingsPlugin,
  PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";

import CircleIcon from "./assets/gradient_1.png";
import { GradientCircle, GradientCircleProps } from "./GradientCircle";

import { validation } from "@webiny/validation";
const Circle = styled.div`
    border-radius: 50%;
    background-size: cover;
    height: 50px;
    width: 50px;
    background-image: url(${CircleIcon});
`
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
const INITIAL_ELEMENT_DATA: GradientCircleProps = {
    variables: {
        rotation: "0",
        zindex: "0",
    },
    settings: {
      height: {
        desktop: {
          value: "100px",
        }
      },
      width: {
        desktop: {
          value: "100px",
        }
      },
    }
};
  
export default  [
        {
            name: "pb-editor-page-element-gradient-circle",
            type: "pb-editor-page-element",

            elementType: "gradient-circle",

            toolbar: {
                title: "Custom gradient circle",
                group: "pb-editor-element-group-basic",
                preview(){
                    return (
                        <PreviewBox>
                            <Circle/>
                        </PreviewBox>
                    );
                }
            },

            settings: [
                "pb-editor-page-element-settings-delete",
                "pb-editor-page-element-style-settings-height",
                "pb-editor-page-element-style-settings-width",
                "pb-editor-page-element-style-settings-margin",
                "pb-editor-page-element-style-settings-padding",
                "pb-editor-page-element-style-settings-horizontal-align-flex"
            ],

            target: ["cell", "block"],

            onCreate: "open-settings",

            create(options) {
                return {
                    type: "gradient-circle",
                    elements: [],
                    data: INITIAL_ELEMENT_DATA,
                    ...options
                    
                };
            },

            render : GradientCircle 

        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-gradient-circle",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "gradient-circle",
            render({ Bind, submit }) {
              // In order to construct the settings form, we're using the
              // `@webiny/form`, `@webiny/ui`, and `@webiny/validation` packages.
              return (
                <>
                  <Bind name={"variables.rotation"} validators={validation.create("required")}>
                        <Input label={"Rotation"} type="number" description={"Enter rotation degrees"} />
                    </Bind>
                    <Bind name={"variables.zindex"} >
                        <Input label={"Z-index"} type="number" description={"Enter z-index"} />
                    </Bind>
                  
                    <Cell span={12}>
                      <ButtonPrimary onClick={submit}>Save</ButtonPrimary>
                    </Cell>
                </>
              );
            }
          } as PbEditorPageElementAdvancedSettingsPlugin

        
    ];