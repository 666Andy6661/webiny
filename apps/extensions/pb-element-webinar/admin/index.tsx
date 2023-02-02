import React from "react";
import styled from "@emotion/styled";
import {
  PbEditorPageElementPlugin,
  DisplayMode,
  PbEditorPageElementAdvancedSettingsPlugin
} from "@webiny/app-page-builder/types";
import { createInitialPerDeviceSettingValue } from "@webiny/app-page-builder/editor/plugins/elementSettings/elementSettingsUtils";

import { ReactComponent as BlogIcon } from "./assets/blog.svg";
import WebinarEditor from "./components/webinarEditor";
import WebinarSettings from "./webinarSettings";

const PreviewBox = styled("div")({
    textAlign: "center",
    height: 50,
    svg: {
        height: 50,
        width: 50,
        color: "var(--mdc-theme-text-secondary-on-background)"
    }
});

export default () => {
    return [
        {
            name: "pb-editor-page-element-blog-custom",
            type: "pb-editor-page-element",

            elementType: "blog-custom",

            toolbar: {
                title: "Calendar List",
                group: "pb-editor-element-group-basic",
                preview(){
                    return (
                        <PreviewBox>
                            <BlogIcon />
                        </PreviewBox>
                    );
                }
            },

            settings: [
                "pb-editor-page-element-settings-delete",
                "pb-editor-page-element-style-settings-height",
                "pb-editor-page-element-style-settings-width",
            ],

            target: ["cell", "block"],

            onCreate: "open-settings",
            create(options) {
                return {
                    type: "blog-custom",
                    elements: [],
                    data: {
                        // The URL property will be populated when user enters the URL in the element settings.
                        blog: {
                            url: "",
                            height: 370,
                        },
                        
                        settings: {
                            height: createInitialPerDeviceSettingValue({ value: "100%"}, DisplayMode.DESKTOP)
                        },

                        calendarList: {
                            allEvents: true,
                            apiKey: ""
                        }
                    },
                    ...options
                    
                };
            },

            render(props) {
                return <WebinarEditor {...props} />;
            },

            renderElementPreview({ width, height }) {
                return <img style={{ width, height }} alt={"Blog"} />;
            },


        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-blog-custom",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "blog-custom",
            render(props) {
                return <WebinarSettings {...props} />
            },
        } as PbEditorPageElementAdvancedSettingsPlugin

        
    ];
};
