import React from "react";
import styled from "@emotion/styled";

import {
    PbEditorPageElementPlugin,
    DisplayMode,
    PbEditorPageElementAdvancedSettingsPlugin
  } from "@webiny/app-page-builder/types";
import ContentEditor from "./components/contentEditor"
import ContentSettings from "./contentSettings"
import { createInitialPerDeviceSettingValue } from "@webiny/app-page-builder/editor/plugins/elementSettings/elementSettingsUtils";
import PreviewIcon from "./components/assets/preview.png";


const PreviewBox = styled("div")({
  textAlign: "center",
  height: 50,
  img: {
    height: 50,
    width: 50,
    color: "var(--mdc-theme-text-secondary-on-background)"
  }
});

  export default () => {
    return[
        {
            name: "pb-editor-page-element-header-contents",
            type: "pb-editor-page-element",
      
            elementType: "header-contents",
            toolbar: {
              // We use `pb-editor-element-group-basic` to put our plugin into the Media group.
              title: "Header Contents",
              group: "pb-editor-element-group-saved",
              preview() {
                return (
                  <PreviewBox>
                  <img src={PreviewIcon}/>
                </PreviewBox>
                );
              }
            },
            settings: [
              "pb-editor-page-element-settings-delete",
              "pb-editor-page-element-style-settings-height",
              "pb-editor-page-element-style-settings-width"
            ],
            target: ["cell", "block"],
      
            onCreate: "open-settings",
            create(options) {
              /*
                          Create function is here to create the initial data
                          for the page element, which then is utilized in the
                          IFrameEditor component and in the element settings.
                      */
              return {
                type: "header-contents",
                elements: [],
                data: {
                  new: "",
                  settings: {
                    // height: createInitialPerDeviceSettingValue({ value: "900px" }, DisplayMode.DESKTOP),
                    width: createInitialPerDeviceSettingValue({ value: "100vw" }, DisplayMode.DESKTOP)
                  },
                  text: {
                    data: {
                        text: "",
                        
                    }
                  },
                  buttonText: "",
                  type: "",
                  
                  
                },
                ...options
              };
            },
            render(props) {
              /*
                          Every render function receives the page element's
                          data assigned to the "element.data" property in
                          the received props. In here we will store the
                          "iframe.url" which will be provided via the page
                          element's settings.
                      */
              return <ContentEditor {...props} />;
            },
            renderElementPreview({ width, height }) {
              return <img style={{ width, height }} alt={"iFrame"} />;
            }
          } as PbEditorPageElementPlugin,

          {
            name: "pb-editor-page-element-advanced-settings-header-contents",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "header-contents",
            render(props) {
              return <ContentSettings {...props} />;
            }
          } as PbEditorPageElementAdvancedSettingsPlugin
        
    ]
  }