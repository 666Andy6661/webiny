import React from "react";
import HubspotContactForm from "./HubspotContactForm";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";
// For simplicity, we're hard-coding the GraphQL HTTP API URL here.
// It's often useful to type the data that the page element will carry.
export interface CustomizeFormProps {
  variables: {
    portalId: string;
    formId: string;
  };
  // Pbelement?: PbEditorElement;
  settings?: {
    height: {
      desktop: {
        value: string,
      }
    },
    width: {
      desktop: {
        value: string,
      }
    },
  }
}

// The renderer React component.
export const CustomizeForm = createRenderer(() => {
  //Use input portal id and form id to get the hotspot form.
  const { getElement } = useRenderer();
  const element = getElement<CustomizeFormProps>();
  const {portalId,formId} = element.data.variables;
  const outerStyle = {
   


  } as React.CSSProperties

  // If the data has been retrieved, we render it via a simple unordered list.
  return (
    <div style={outerStyle}>
      <div>
        <HubspotContactForm forms = {formId} portals = {portalId}/>
        </div>
    </div>
  );
});