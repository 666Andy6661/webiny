import React from "react";
// import { validation } from "@webiny/validation";
import { Input } from "@webiny/ui/Input";
// import { RichTextEditor } from "@webiny/ui/RichTextEditor"
import { Cell, Grid } from "@webiny/ui/Grid";
import {
  ButtonContainer,
  classes,
} from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import Accordion from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Accordion";
import { BindComponent } from "@webiny/form";
import styled from "@emotion/styled"
// import  {RichTextEditor} from "@webiny/ui/RichTextEditor";
// import{ createReactEditorJS } from 'react-editor-js';


interface ContentSettingsProps {
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
const ContentSettings: React.FC<ContentSettingsProps> = props => {
  const { Bind, submit } = props;
  // const ReactEditorJS = createReactEditorJS()
  return (
    <Wrapper>
      
      <Accordion title={"Content"}  defaultValue={false}>
        <React.Fragment>
          <Bind name={"text.data.text"}>
            <Input label={"Heading"} description={"Enter the heading"} />
          </Bind>
          <Bind name={"type"}>
            
            <Input type="textarea" 
            rows={4}
            description={"Enter the description"}
          
        />
          </Bind>
          {/* <Bind name={"hahaha"}>
            <ReactEditorJS holder="hahaha" />
          </Bind> */}
          <Grid className={classes.simpleGrid}>
            <Cell span={12}>
              {/*  @ts-ignore */}
            </Cell>
          </Grid>
        </React.Fragment>
      </Accordion>
      <Accordion title={"Button"} defaultValue={false}>
        <React.Fragment>
          <Bind name={"buttonText"}>
            <Input label={"Button content"} description={"Enter the content of button"} />
          </Bind>
          <Bind name={"id"}>
            <Input label={"Link"} description={"Enter a link"} />
          </Bind>
          <Grid className={classes.simpleGrid}>
            <Cell span={12}>
              {/*  @ts-ignore */}
            </Cell>
          </Grid>
        </React.Fragment>
      </Accordion>
      <Accordion title={"Image"} defaultValue={false}>
        <React.Fragment>
          <Bind name={"image.file.src"}>
            <Input label={"Image"} description={"Upload an image"} />
          </Bind>
          <Grid className={classes.simpleGrid}>
            <Cell span={12}>
              {/*  @ts-ignore */}
              
            </Cell>
          </Grid>
        </React.Fragment>
      </Accordion>
      <ButtonContainer>
                {/*  @ts-ignore */}
        <SaveButton onClick={submit}>Save</SaveButton>
      </ButtonContainer>
      
    </Wrapper>
    
    
  );
};

export default ContentSettings;