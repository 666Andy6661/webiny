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
import { FloatBubble, FloatBubbleProps } from "./FloatBubble";
import Accordion from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Accordion";

const Circle = styled.div`
    border-radius: 50%;
    background-size: cover;
    height: 50px;
    width: 50px;
    background-image: url(${CircleIcon});
`
const LinkLabel = styled.a`
  display: block;
  font-size: 13px;
  margin-bottom: 10px;
  text-align: right;
  margin-top: -14px;
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
const INITIAL_ELEMENT_DATA: FloatBubbleProps = {
    variables: {
      iconName: "",
      iconSize: "",
      iconColor: "",
      description: "",
      url: "",
      shadow: false,
    },
    icon:{
      id: "",
      svg:"",
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
            name: "pb-editor-page-element-float-bubble",
            type: "pb-editor-page-element",

            elementType: "float-bubble",

            toolbar: {
                title: "Float Bubble",
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
              "pb-editor-page-element-style-settings-icon",
              "pb-editor-page-element-style-settings-margin",
              "pb-editor-page-element-style-settings-background",
              "pb-editor-page-element-style-settings-horizontal-align-flex"
            ],

            target: ["cell", "block"],

            onCreate: "open-settings",

            create(options) {
                return {
                    type: "float-bubble",
                    elements: [],
                    data: INITIAL_ELEMENT_DATA,
                    ...options
                    
                };
            },

            render : FloatBubble 

        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-float-bubble",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "float-bubble",
            render({ Bind, submit }) {
              return (
                <>
                  <Accordion title={"Icon Settings"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.iconSrc"} >
                          <Input label={"Icon name"} description={"Enter an Icon name from the link -"} onChange={submit}/>
                          
                        </Bind>
                        <LinkLabel href="https://fonts.google.com/icons" target={"_blank"}>Google Fonts</LinkLabel>
                        <Bind name={"variables.iconSize"}>
                          <Input label={"Icon Size"} description={"Enter the size of the icon (.px)"} />
                        </Bind>
                        <Bind name={"variables.iconColor"}>
                        <ColorPicker label={"Icon Color"} description={"Pick the color of icon"} />
                      </Bind>
                    </React.Fragment>
                  </Accordion>

                    <Accordion title={"Style Settings"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.backgroundColor"}>
                          <ColorPicker  label={"Background Color"} description={"Pick the background color for CTA"} />
                        </Bind>
                      </React.Fragment>
                    </Accordion>
                    <Accordion title={"Link Settings"} defaultValue={false}>
                      <React.Fragment>
                      <Bind name={"variables.url"}>
                          <Input label={"url Link"} description={"Enter the url of link"} />
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