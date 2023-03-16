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
import { HeaderContent, HeaderContentProps } from "./HeaderContent";
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
const INITIAL_ELEMENT_DATA: HeaderContentProps = {
    variables: {
      title: "",
      description: "",
      buttonText: "",
      backgroundImage: "https://th.bing.com/th/id/OIP.Jec3Ds8A9zLGnGukwRCmqAHaE7?pid=ImgDet&rs=1",
      link:"",
    },
    settings: {
      height: {
        desktop: {
          value: "900px",
        }
      },
      width: {
        desktop: {
          value: "100%",
        }
      },
    }
};
  
export default  [
        {
            name: "pb-editor-page-element-header-content",
            type: "pb-editor-page-element",

            elementType: "header-content",

            toolbar: {
                title: "Header with content",
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
                    type: "header-content",
                    elements: [],
                    data: INITIAL_ELEMENT_DATA,
                    ...options
                    
                };
            },

            render : HeaderContent 
        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-header-content",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "header-content",
            render({ Bind, submit }) {
              // In order to construct the settings form, we're using the
              // `@webiny/form`, `@webiny/ui`, and `@webiny/validation` packages.
              return (
                <>
                  <Accordion title={"Content"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.title"} >
                          <Input label={"Title"} description={"Enter a title for the header"} onChange={submit}/>
                          
                        </Bind>
                        <Bind name={"variables.description"}>
                          <Input type="textarea" 
                          rows={4}
                          description={"Enter the description"}
                      />
                        </Bind>
                    </React.Fragment>
                  </Accordion>
                
                    <Accordion title={"Button"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.buttonText"}>
                          <Input label={"Button content"} description={"Enter the content of button"} />
                        </Bind>
                        <Bind name={"variables.link"}>
                          <Input label={"Link"} description={"Enter a link"} />
                        </Bind>
                      </React.Fragment>
                    </Accordion>
                    <Accordion title={"Image"} defaultValue={false}>
                      <React.Fragment>
                        <Bind name={"variables.backgroundImage"}>
                          <Input label={"Image"} description={"Upload an image"} />
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