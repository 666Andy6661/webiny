import React from "react";
import styled from "@emotion/styled";
import {
  PbEditorPageElementPlugin,
//   DisplayMode,
  PbEditorPageElementAdvancedSettingsPlugin
} from "@webiny/app-page-builder/types";
// import { createInitialPerDeviceSettingValue } from "@webiny/app-page-builder/editor/plugins/elementSettings/elementSettingsUtils";
import { Input } from "@webiny/ui/Input";
import { Cell, Grid } from "@webiny/ui/Grid";
import  CircleIcon  from "./assets/gradient_1.png";
import { GradientCircleEditor, GradientCircleProps } from "./components/gradientCircleEditor";
// import GradientCircleSettings from "./gradientCircleSettings";
import {
    ButtonContainer,
    classes,
} from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import { validation } from "@webiny/validation";
const Circle = styled.div`
    background-image: url(${CircleIcon});
    border-radius: 50%;
    background-size: cover;
    height: 50px;
    width: 50px;
    
`
const SaveButton = styled.button`
  width: 150px;
  background-color: #fa5723;
  border: none;
  color: #ffffff;
  height: 2rem;
  border-radius: 5px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  cursor: pointer;
  
  &:hover {
    background-color: #fa5923ee;
    font-weight: 500;
    /* border-style: solid; */
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    text-decoration:none;
    // transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }


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
        rotation: 0,
        zindex: 0,
    }
};
  
export default () => {
    return [
        {
            name: "pb-editor-page-element-gradient-circle-custom",
            type: "pb-editor-page-element",

            elementType: "gradient-circle-custom",

            toolbar: {
                title: "Custom gradient circle",
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
                "pb-editor-page-element-style-settings-padding",
                "pb-editor-page-element-style-settings-horizontal-align-flex"
            ],

            target: ["cell", "block"],

            onCreate: "open-settings",

            create(options) {
                return {
                    type: "gradient-circle-custom",
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

            render : GradientCircleEditor 

            // renderElementPreview({ width, height }) {
            //     return <img style={{ width, height }} alt={"Gradient Circle"} />;
            // },


        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-space-x",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "spaceX",
            render({ Bind, submit }) {
              // In order to construct the settings form, we're using the
              // `@webiny/form`, `@webiny/ui`, and `@webiny/validation` packages.
              return (
                <>
                  <Bind name={"vairables.rotation"} validators={validation.create("required")}>
                        <Input label={"Rotation"} description={"Enter rotation degrees"} />
                    </Bind>
                    <Bind name={"vairables.zindex"} >
                        <Input label={"Z-index"} description={"Enter z-index"} />
                    </Bind>
                    <Grid className={classes.simpleGrid}>
                        <Cell span={12}>
                            
                        </Cell>
                    </Grid>
                    <ButtonContainer>
                        <SaveButton onClick={submit}>Save</SaveButton>
                    </ButtonContainer>
                </>
              );
            }
          } as PbEditorPageElementAdvancedSettingsPlugin

        
    ];
};