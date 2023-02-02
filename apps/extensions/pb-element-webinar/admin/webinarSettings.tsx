import React, { useState,} from "react";
// import { validation } from "@webiny/validation";
import { Input } from "@webiny/ui/Input";
// import { Select } from "@webiny/ui/Select";
import { Cell, Grid } from "@webiny/ui/Grid";
import { Checkbox } from "@webiny/ui/Checkbox";
import { Select } from "@webiny/ui/Select";
import {
    ButtonContainer,
    classes,
} from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import Accordion from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Accordion";
import { BindComponent } from "@webiny/form";
import styled from "@emotion/styled";
// import { PbEditorElement } from "@webiny/app-page-builder/types";
interface WebinarSettingsProps {
    Bind: BindComponent;
    submit: () => void;

}

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
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  
`

const WebinarSettings : React.FC<WebinarSettingsProps> = props => {
    const { Bind, submit} = props;
    console.log(props)
    const [opt, setOpt] = useState("default")
    // console.log(opt)
    function handleAddrTypeChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setOpt(e.target.value);
        
      }
 
    

    const input1 = document.getElementById("testid1")
    if(input1){
        console.log(input1)
    }
    
    // useEffect(() => {

    //     props.data = "hahaha"
  
        
    // }, []);



    return (
        <Wrapper>
            <select
            defaultValue={"default"}
            onChange={handleAddrTypeChange}>
                <option value={"default"}>Please select the source of events</option>
                <option value={"Google"}>Google Calendar</option>
                <option value={"Toldu"}>Toldu</option>
                <option value={"Outlook"}>Outlook Calendar</option>
            </select>
            
            {opt==="Google"?
                <Accordion title={"Google Calendar"} defaultValue={true}>
                    <React.Fragment>
                        <Bind name={"calendarList.apiKey"} >
                            <Input  label={"Google API Key"} description={"Enter the Google API Key"} />
                        </Bind>
                       
                        <Bind name={"calendarList.calendarID"}>
                            <Input label={"Google Calendar ID"} description={"Enter the Google Calendar ID"} />
                        </Bind>
                        {/* <Bind name={"text.data.text"} validators={validation.create("required")}>
                            <Input label={"token"} description={"Enter an API token"} />
                        </Bind> */}
                        <Grid className={classes.simpleGrid}>
                            <Cell span={12}>
                            </Cell>
                        </Grid>
                    </React.Fragment>
                </Accordion>
                :(
                    <p></p>
                )
            
            
            
            }
            
            
            {opt==="Toldu"?
                <Accordion title={"ToldU Calendar"} defaultValue={true}>
                    <React.Fragment>
                        <Bind name={"calendarList.urlLink"}>
                            <Input label={"ToldU Calendar Link"} description={"Enter the link of ToldU calendar sharing link"} />
                        </Bind>

                        <Bind name={"calendarList.downloadable"} >
                            <Checkbox label={"Display CTA for event button"} description={"Show the register button or URL link"} />
                        </Bind>

                       
                        
                        {/* <Bind name={"text.data.text"} validators={validation.create("required")}>
                            <Input label={"token"} description={"Enter an API token"} />
                        </Bind> */}
                        <Grid className={classes.simpleGrid}>
                            <Cell span={12}>
                            </Cell>
                        </Grid>
                    </React.Fragment>
                </Accordion>
                :(
                    <p></p>
                )
            
            
            
            }

            {opt==="Outlook"?
                <Accordion title={"Outlook Calendar"} defaultValue={true}>
                    <React.Fragment>
                        <Bind name={"calendarList.urlLink"}>
                            <Input label={"ToldU Calendar Link"} description={"Enter the link of ToldU calendar sharing link"} />
                        </Bind>
                        
                        {/* <Bind name={"text.data.text"} validators={validation.create("required")}>
                            <Input label={"token"} description={"Enter an API token"} />
                        </Bind> */}
                        <Grid className={classes.simpleGrid}>
                            <Cell span={12}>
                            </Cell>
                        </Grid>
                    </React.Fragment>
                </Accordion>
                :(
                    <p></p>
                )
            
            
            
            }
        
        <Accordion title={"Settings"} defaultValue={false}>
            <React.Fragment>
                <Bind name={"calendarList.allEvents"}>
                    <Checkbox label={"Show future events"} description={"Enter the link of ToldU calendar sharing link"} />
                </Bind>
                <Bind name={"calendarList.extendButton"}>
                    <Checkbox label={"extended CTA button"} description={"Whether the event list could be folded"} />
                </Bind>
                <Bind name={"calendarList.eventsNumber"}>
                <Select
                    label={"Selection of event source"} description={"Choose the source "}
                    onChange={handleAddrTypeChange}>
                        <option value={"default"}>3</option>
                        <option value={"Google"}>5</option>
                        <option value={"Toldu"}>10</option>

                </Select>       
                </Bind>
                <Bind name={"calendarList.source"}>
                <Select
                label={"Selection of event source"} description={"Choose the source "}>
                        <option value={"Google"}>Google</option>
                        <option value={"Toldu"}>Toldu</option>

                </Select>
                </Bind>
                
                {/* <Bind name={"text.data.text"} validators={validation.create("required")}>
                    <Input label={"token"} description={"Enter an API token"} />
                </Bind> */}
                <Grid className={classes.simpleGrid}>
                    <Cell span={12}>
                    </Cell>
                </Grid>
            </React.Fragment>
        </Accordion>
        <ButtonContainer>
            <SaveButton onClick={submit}>Save</SaveButton>
        </ButtonContainer>
        </Wrapper>
        
    );
};

export default WebinarSettings;
