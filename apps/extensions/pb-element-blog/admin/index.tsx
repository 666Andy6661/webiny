import React from "react";
import styled from "@emotion/styled";
import {
  PbEditorPageElementPlugin,
  DisplayMode,
  PbEditorPageElementAdvancedSettingsPlugin
} from "@webiny/app-page-builder/types";
import { createInitialPerDeviceSettingValue } from "@webiny/app-page-builder/editor/plugins/elementSettings/elementSettingsUtils";

import BlogIcon from "./assets/blog.png";
import BlogEditor from "./components/blogEditor";
import BlogSettings from "./blogSettings";

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
    return [
        {
            name: "pb-editor-page-element-blog-custom",
            type: "pb-editor-page-element",

            elementType: "blog-custom",

            toolbar: {
                title: "Custom Blog",
                group: "pb-editor-element-group-saved",
                preview(){
                    return (
                        <PreviewBox>
                            <img src={BlogIcon}/>
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
                        source: {
                            url: "",
                        },
                        
                        settings: {
                            height: createInitialPerDeviceSettingValue({ value: "500px"}, DisplayMode.DESKTOP)
                        },
                    },
                    ...options
                    
                };
            },

            render(props) {
                return <BlogEditor {...props} />;
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
                return <BlogSettings {...props} />
            },
        } as PbEditorPageElementAdvancedSettingsPlugin

        
    ];
};