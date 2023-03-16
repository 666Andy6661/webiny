import React, {useEffect} from "react";
import HubspotForm from 'react-hubspot-form'
    
const HubspotContactForm = ({forms, portals}) => {
    return (
      <HubspotForm
      portalId={portals}
      formId={forms}
      onSubmit={() => console.log('Submit!')}
      onReady={(form) => console.log('Form ready!')}
      loading={<div>Loading...</div>}
      />
    );
};

export default HubspotContactForm;