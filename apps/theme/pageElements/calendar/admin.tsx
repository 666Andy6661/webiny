import React, { useState } from "react";
import styled from "@emotion/styled";
import { Input } from "@webiny/ui/Input";
import { ButtonPrimary } from "@webiny/ui/Button";
import { Cell } from "@webiny/ui/Grid";
import {
  PbEditorPageElementAdvancedSettingsPlugin,
  PbEditorPageElementPlugin
} from "@webiny/app-page-builder/types";
import { Checkbox } from "@webiny/ui/Checkbox";
import { Select } from "@webiny/ui/Select";
import CircleIcon from "./assets/iframe-icon.svg";
import { Calendar, CalendarProps } from "./Calendar";
import Accordion from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Accordion";

const Note = styled.p`
margin: 10%;
color: #c4c4c4;
font-size: 15px;
`
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
const INITIAL_ELEMENT_DATA: CalendarProps = {
    variables: {
      apiKey: "",
      id: "",
      source: "",
      addEventLink: "",
      urlLink: "",
      allEvents: true,
      downloadable: true,
      buttonStatus: true,
      eventsNumber: 5,
    },

    settings: {
      height: {
        desktop: {
          value: "auto",
        }
      },
      width: {
        desktop: {
          value: "1000px",
        }
      },
    }
};
  
export default  [
  
        {
            name: "pb-editor-page-element-customize-calendar",
            type: "pb-editor-page-element",

            elementType: "customize-calendar",

            toolbar: {
                title: "Calendar",
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
                    type: "customize-calendar",
                    elements: [],
                    data: INITIAL_ELEMENT_DATA,
                    ...options
                };
            },

            render : Calendar 

        } as PbEditorPageElementPlugin,

        {
            name: "pb-editor-page-element-advanced-settings-customize-calendar",
            type: "pb-editor-page-element-advanced-settings",
            elementType: "customize-calendar",
            
            render({ Bind, submit }) {
              const [opt, setOpt] = useState("default")
            // console.log(opt)
            function handleAddrTypeChange(e: { target: { value: React.SetStateAction<string>; }; }) {
                setOpt(e.target.value);
                
              }
 
              // In order to construct the settings form, we're using the
              // `@webiny/form`, `@webiny/ui`, and `@webiny/validation` packages.
              return (
                <>
                <select
                  defaultValue={"default"}
                  onChange={handleAddrTypeChange}>
                      <option value={"default"}>Please select the source of events</option>
                      <option value={"Google"}>Google Calendar</option>
                      <option value={"Toldu"}>Toldu</option>
                  </select>
                  {/* The settings for Google and Toldu calendar, the users could select the source and input the required information to fetch the data */}
                    {opt==="Google"?
                        <Accordion title={"Google Calendar"} defaultValue={true}>
                            <React.Fragment>
                                <Bind name={"variables.apiKey"} >
                                    <Input  label={"Google API Key"} description={"Enter the Google API Key"} />
                                </Bind>
                            
                                <Bind name={"variables.id"}>
                                    <Input label={"Google Calendar ID"} description={"Enter the Google Calendar ID"} />
                                </Bind>

                            </React.Fragment>
                        </Accordion>
                        :(
                            <p></p>
                        )

                    }
                    {opt==="Toldu"?
                        <Accordion title={"ToldU Calendar"} defaultValue={true}>
                            <React.Fragment>
                                <Bind name={"variables.urlLink"}>
                                    <Input label={"ToldU Calendar Link"} description={"Enter the link of ToldU calendar sharing link"} />
                                </Bind>

                                <Bind name={"variables.downloadable"} >
                                    <Checkbox label={"Display CTA for event button"} description={"Show the register button or URL link"} />
                                </Bind>
                            </React.Fragment>
                        </Accordion>
                        :(
                            <p></p>
                        ) 
                    }
                       
                    

        <Accordion title={"Settings"} defaultValue={false}>
            <React.Fragment>
                <Bind name={"variables.allEvents"}>
                    <Checkbox label={"Show future events only"} description={"The caledar will only show coming events"} />
                </Bind>
                <Bind name={"variables.eventsNumber"}>
                <Select
                    label={"Select number of shown events"} description={"Choose the source "}>
                        <option value={3}>3</option>
                        <option value={5}>5</option>
                        <option value={10}>10</option>

                </Select>       
                </Bind>
                <Bind name={"variables.source"}>
                <Select
                label={"Selection of event source"} description={"Choose the source "}>
                        <option value={"Google"}>Google</option>
                        <option value={"Toldu"}>Toldu</option>

                </Select>
                </Bind>

            </React.Fragment>
        </Accordion>
                    <Cell span={12}>
                      <ButtonPrimary onClick={submit}>Save</ButtonPrimary>
                    </Cell>
                    <Note>Please save and refresh the page to view the changes</Note>
                </>
              );
            }
          } as PbEditorPageElementAdvancedSettingsPlugin

        
    ];