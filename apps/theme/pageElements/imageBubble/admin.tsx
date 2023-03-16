import React from "react";
import styled from "@emotion/styled";
import { Input } from "@webiny/ui/Input";
import { ButtonPrimary } from "@webiny/ui/Button";
import { Cell } from "@webiny/ui/Grid";
import {
  PbEditorPageElementAdvancedSettingsPlugin,
  PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";
import { ColorPicker } from "@webiny/ui/ColorPicker";
import CircleIcon from "./assets/iframe-icon.svg";
import { ImageBubble, ImageBubbleProps } from "./ImageBubble";
import Accordion from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Accordion";

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
const INITIAL_ELEMENT_DATA: ImageBubbleProps = {
    variables: {
      imageSrc: "",
      bubbleColor: "",
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
            name: "pb-editor-page-element-image-bubble",
            type: "pb-editor-page-element",

            elementType: "image-bubble",

            toolbar: {
                title: "Image Bubble",
                group: "pb-editor-element-group-saved",
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
              "pb-editor-page-element-style-settings-background",
              "pb-editor-page-element-style-settings-horizontal-align-flex"
            ],

            target: ["cell", "block"],

            onCreate: "open-settings",

            create(options) {
                return {
                    type: "image-bubble",
                    elements: [],
                    data: INITIAL_ELEMENT_DATA,
                    ...options
                    
                };
            },

            render : ImageBubble 
        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-image-bubble",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "image-bubble",
            render({ Bind, submit }) {
              // In order to construct the settings form, we're using the
              // `@webiny/form`, `@webiny/ui`, and `@webiny/validation` packages.
              return (
                <>
                  <Accordion title={"Image Settings"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.imageSrc"} >
                          <Input label={"image Source"} description={"Enter an link of image"} onChange={submit}/>
                      </Bind>
                    </React.Fragment>
                  </Accordion>

                    <Accordion title={"Bubble Color"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.bubbleColor"}>
                          <ColorPicker  label={"Bubble Color"} description={"Pick the background color for bubble"} />
                        </Bind>
                      </React.Fragment>
                    </Accordion>
                    <Cell span={12}>
                      <ButtonPrimary onClick={submit}>Save</ButtonPrimary>
                    </Cell>
                </>
              );
            }
          } as PbEditorPageElementAdvancedSettingsPlugin

        
    ];