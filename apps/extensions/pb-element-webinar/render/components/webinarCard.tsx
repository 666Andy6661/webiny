import styled from "@emotion/styled";
import React from "react";
// import ResgisterButton from "./registerButton"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 50vw;
    /* background-color: #c5d0d7; */
    /* border-color: #FF6201; */
    border: #FF6201 solid;
    border-radius: 10px;
    border-width: 1px;
    margin: 50px;
    height: 180px;
    align-items: center;
    padding: 20px 30px;

`
const DetailList = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    align-content:center;
    /* justify-content:; */
`

const VerticalBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
`

const RegisterBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    padding-left: 150px;
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

interface BlogProps {
    
        location: string;
        // start:{
        //     dateTime: Date;
        // }
        
        summary:string;
        description:string;
        htmlLink: string;
        CalendarID: string;
        // toldUStatus: boolean;
        dateTime: string;
        download: boolean;
        


   
}






const WebinarCard: React.FC<BlogProps> = ({ location, summary, description, htmlLink, CalendarID, dateTime, download }) => {
    let str = htmlLink
    let i1 = str.indexOf("=")
    str = str.substr(i1)
    let urlLink = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid" + str + "&tmsrc=" + CalendarID
    console.log(urlLink)
    // let urlLink = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N29yOG8wa2s4ZWlqbnQwOTVudnJ1M2hsNGMgbGl4aWFvbWFuMDUyMUBt&tmsrc=lixiaoman0521%40gmail.com"
    return(
        <Wrapper>
            <DetailList>
                <VerticalBar>
                    <h4>Event:</h4>
                    <p>{summary}</p>
                </VerticalBar>
                <VerticalBar>
                    <h4>Location:</h4>
                    <p>{location}</p>
                </VerticalBar>
                {/* <div>{start}</div> */}
                
                <VerticalBar>
                    <h4>Description:</h4>
                    <p>{description}</p>
                </VerticalBar>

                <VerticalBar>
                    <h4>Start Time:</h4>
                    <p>{dateTime}</p>
                </VerticalBar>
                

            </DetailList>
            
            <RegisterBar>
                <a href={urlLink} target = "_blank">
                    <SaveButton>Register Now</SaveButton>
                </a>
                {
                    download?
                    <a href={urlLink} target = "_blank">
                    <p>Download the .cls file</p>
                </a>
                    :
                    (
                    <div>gaaha</div>
                    )
                }
            </RegisterBar>
           
            
        </Wrapper>
       

        )
}

export default WebinarCard;
