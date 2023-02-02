import React from "react";
import { validation } from "@webiny/validation";
import { Input } from "@webiny/ui/Input";
import { Cell, Grid } from "@webiny/ui/Grid";
import {
    ButtonContainer,
    classes,
} from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import Accordion from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Accordion";
import { BindComponent } from "@webiny/form";
import styled from "@emotion/styled"

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
interface gradientCircleSettingProps {
    Bind: BindComponent;
    submit: () => void;
}

const GradientCircleSettings: React.FC<gradientCircleSettingProps> = props => {
    const { Bind, submit } = props;

    return (
        <Wrapper>
            <Accordion title={"Gradient Circle CMS Source"} defaultValue={true}>
                <React.Fragment>
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
                </React.Fragment>
            </Accordion>
            <ButtonContainer>
                <SaveButton onClick={submit}>Save</SaveButton>
            </ButtonContainer>
        </Wrapper>
    );
};

export default GradientCircleSettings;

