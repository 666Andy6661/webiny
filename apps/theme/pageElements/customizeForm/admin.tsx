import React from "react";
import styled from "@emotion/styled";
import { Input } from "@webiny/ui/Input";
import { ButtonPrimary } from "@webiny/ui/Button";
import { Cell } from "@webiny/ui/Grid";
import {
  PbEditorPageElementAdvancedSettingsPlugin,
  PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";
import CircleIcon from "./assets/iframe-icon.svg";
import { CustomizeForm, CustomizeFormProps } from "./CustomizeForm";
import Accordion from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Accordion";
// import GradientCircleSettings from "./gradientCircleSettings";
// import {
  
//     classes,
// } from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";

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
const INITIAL_ELEMENT_DATA: CustomizeFormProps = {
    variables: {
      portalId: "",
      formId: "",
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
            name: "pb-editor-page-element-customize-form",
            type: "pb-editor-page-element",

            elementType: "customize-form",

            toolbar: {
                title: "Custom Form",
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
                    type: "customize-form",
                    elements: [],
                    data: INITIAL_ELEMENT_DATA,
                    // data: {
                        // The URL property will be populated when user enters the URL in the element settings.
                        // circle: {
                        //     width: 200,
                        //     height: 200,
                        // },
                        
                        // settings: {
                        //     // width: createInitialPerDeviceSettingValue({ value: "200px"}, DisplayMode.DESKTOP),
                        //     height: createInitialPerDeviceSettingValue({ value: "200px"}, DisplayMode.DESKTOP),
                        //     width: "",
                        //     // height: "",
                       
                        // },
                        // gradientCircle: {
                        //     rotation: "",
                        //     zindex:"",
                            
                        // }
                        
                    // },
                    ...options
                    
                };
            },

            render : CustomizeForm 

            // renderElementPreview({ width, height }) {
            //     return <img style={{ width, height }} alt={"Gradient Circle"} />;
            // },


        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-customize-form",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "customize-form",
            render({ Bind, submit }) {
              // In order to construct the settings form, we're using the
              // `@webiny/form`, `@webiny/ui`, and `@webiny/validation` packages.
              return (
                <>
                  <Accordion title={"Settings"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.portalId"} >
                          <Input label={"Portal Id"} description={"Enter Portal Id from Hubspot form -"} onChange={submit}/> 
                        </Bind>
                        <LinkLabel href="https://www.hubspot.com/products/marketing/forms" target={"_blank"}>Link</LinkLabel>
                        <Bind name={"variables.formId"}>
                          <Input label={"Form Id"} description={"Enter the Form Id"} />
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