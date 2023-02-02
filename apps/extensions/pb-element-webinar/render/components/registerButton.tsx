// let gapi = window.gapi
// let CLIENT_ID = "PASTE YOUR CLIENT ID HERE"
// let API_KEY = "PASTE YOUR API KEY HERE"
// let DISCOVERY_DOCS=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
// let SCOPES = "https://www.googleapis.com/auth/calendar.events"
import React from "react";


interface BlogProps {
    
    location: string;
    // start:{
    //     dateTime: Date;
    // }
    
    summary:string;
    description:string;


}




const RegisterButton: React.FC<BlogProps> = () => {
return(
    <button>register</button>
   

    )
}

export default RegisterButton;
