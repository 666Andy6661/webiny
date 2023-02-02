import React from "react";
import { validation } from "@webiny/validation";
import { Input } from "@webiny/ui/Input";
import { Cell, Grid } from "@webiny/ui/Grid";
import {
    ButtonContainer,
    classes,
    SimpleButton
} from "@webiny/app-page-builder/editor/plugins/elementSettings/components/StyledComponents";
import Accordion from "@webiny/app-page-builder/editor/plugins/elementSettings/components/Accordion";
import { BindComponent } from "@webiny/form";

interface blogImagesSettingProps {
    Bind: BindComponent;
    submit: () => void;
}

const BlogSettings: React.FC<blogImagesSettingProps> = props => {
    const { Bind, submit } = props;

    return (
        <Accordion title={"Blog CMS Source"} defaultValue={true}>
            <React.Fragment>
                <Bind name={"source.url"} validators={validation.create("required,url")}>
                    <Input label={"URL"} description={"Enter an CMS URl"} />
                </Bind>
                <Grid className={classes.simpleGrid}>
                    <Cell span={12}>
                        <ButtonContainer>
                            <SimpleButton onClick={submit}>Save</SimpleButton>
                        </ButtonContainer>
                    </Cell>
                </Grid>
            </React.Fragment>
        </Accordion>
    );
};

export default BlogSettings;

