import React from "react";
import styled from "@emotion/styled";
import { Input } from "@webiny/ui/Input";
import { ButtonPrimary } from "@webiny/ui/Button";
import { Cell } from "@webiny/ui/Grid";
import { Switch } from "@webiny/ui/Switch";
import { Select } from "@webiny/ui/Select";
import {
  PbEditorPageElementAdvancedSettingsPlugin,
  PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";
import { ColorPicker } from "@webiny/ui/ColorPicker";
import CircleIcon from "./assets/iframe-icon.svg";
import { FixedButton, FixedButtonProps } from "./FixedButton";
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
const INITIAL_ELEMENT_DATA: FixedButtonProps = {
    variables: {
        text: "",
        position: "",
        color: "",
        extend: false,
        urlSource: "",
    },
    settings: {
      height: {
        desktop: {
          value: "50px",
        }
      },
      width: {
        desktop: {
          value: "50px",
        }
      },
      margin:{
        desktop:{
            top: "50px",
            right: "50px",
            bottom: "50px",
            left: "50px",
    
            }
        }
    }
};
  
export default  [
        {
            name: "pb-editor-page-element-fixed-button",
            type: "pb-editor-page-element",

            elementType: "fixed-button",

            toolbar: {
                title: "Fixed button",
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
                    type: "fixed-button",
                    elements: [],
                    data: INITIAL_ELEMENT_DATA,
                    ...options              
                };
            },

            render : FixedButton 
        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-fixed-button",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "fixed-button",
            render({ Bind, submit }) {
              return (
                <>
                  <Accordion title={"General Settings"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.text"} >
                          <Input label={"Text"} description={"Enter the extended text of the button"} onChange={submit}/>
                          
                        </Bind>
                        
                        <Bind name={"variables.position"} >
                          {/* <Input label={"URL"} description={"Enter an link."} /> */}
                          <Select label={"Position"} description={"Choose a position on screen."} value="right-bottom">
                              <option value="right-bottom">Right Bottom</option>
                              <option value="left-bottom">Left Bottom</option>
                              <option value="right-top">Right Top</option>
                              <option value="left-top">Left Top</option>
                          </Select>
                      </Bind>
                        <Bind name={"variables.color"}>
                        <ColorPicker label={"Icon Color"} description={"Pick the color of icon"} />
                      </Bind>
                    </React.Fragment>
                  </Accordion>
                
                       
                    

                    <Accordion title={"Style Settings"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.extend"}>
                          <Switch label={"Extended button with icon"} description={"Button could be extended or not"} value={false}/>
                        </Bind>
                      </React.Fragment>
                    </Accordion>
                    <Accordion title={"Link Settings"} defaultValue={false}>
                      <React.Fragment>
                      <Bind name={"variables.urlSource"}>
                          <Input label={"url Link"} description={"Enter the url of link"} />
                        </Bind>
                        
                      </React.Fragment>
                    </Accordion>
                    <p>This element cannot be previewed as real effect in page editor, please check it in website instead.</p>
                    <Cell span={12}>
                      <ButtonPrimary onClick={submit}>Save</ButtonPrimary>
                    </Cell>
                </>
              );
            }
          } as PbEditorPageElementAdvancedSettingsPlugin

        
    ];