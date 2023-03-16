import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";
import  WebinarCard  from "./webinarCard";

// For simplicity, we're hard-coding the GraphQL HTTP API URL here.


// It's often useful to type the data that the page element will carry.
const Outer = styled.div`
    /* background-color: #bebebe; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`
const ShowMore = styled.button`
  width: 8rem;
  height: 2rem;
  border-radius: 0 0 10px 10px;
  border: 0;
  background-color: #FF6201;
  color: #ffffff;
  font-weight: 400;
  cursor: pointer;
  :hover {
    font-weight: 700;
    border-width: 2px;
  }
`
export interface CalendarProps {
  variables: {
    apiKey?: string;
    id?: string;
    source?: string;
    addEventLink?: string;
    urlLink?: string;
    allEvents?: boolean;
    downloadable?: boolean;
    buttonStatus?: boolean;
    eventsNumber?: number;
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
interface ItemProps {
  items: [{
      location: string;
      start:{
          dateTime: string;
      }
      id:string;
      summary:string;
      description:string;
      htmlLink: string;
      CalendarID: string;
  }]
  error: [{
    code: string
  }
  ]
}
interface Toldus {
  id: number; 
  address: string; 
  time: string;
  summary:string;
  detail:string;
}
// The renderer React component.


export const Calendar = createRenderer(() => {
  
  const { getElement } = useRenderer();
  const element = getElement<CalendarProps>();
  const { apiKey,id,source,urlLink,allEvents, downloadable,eventsNumber } = element.data.variables;
  const [showMore, setShowMore] = useState(false);
  //set the state of show more button
  const [posts, setPosts] = useState<ItemProps>();
  const [toldUs, settoldUs] = useState<string>()
  //store the fetched calendar list with specific props
  let lines = [""]
  let toldUnumber = 0

  const eventStartTime = new Date()
  //get the current time and used as the condition to filter the future events
  var date = eventStartTime.getDate()
  var month = eventStartTime.getMonth() + 1
  var year = eventStartTime.getFullYear()
  let toldUsList: Toldus[] = [];
  //Fetch the events details with specific format of url, consist of id and apikey input by the users.
  let calendarID = 'https://www.googleapis.com/calendar/v3/calendars/' + id + 
  '/events?key=' + apiKey
  //If the allEvents is true, only return future events, fetch the data by the id with the time parameter
  if(allEvents == true){
      calendarID = 'https://www.googleapis.com/calendar/v3/calendars/' + id + 
  '/events?key=' + apiKey + "&timeMin=" + year + "-" + month + "-" + date + "T00:00:00Z"
  }
  let toldUID = urlLink
  //update the height and width of the element according to the input value in page editor settings.
  const outerStyle = {
      height: element.data.settings?.height?.desktop?.value,
      width: element.data.settings?.width?.desktop?.value,

  } as React.CSSProperties

  //get the events from google
  useEffect(() => {
      fetch(calendarID)
      // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
          .then((response) => response.json())
          .then((data) => {
              setPosts( JSON.parse( JSON.stringify(data)) );
          })
          .catch((err) => {
              console.log(err.message);
          });
  }, []);
 //get the events from toldU
  useEffect(() => {
      //@ts-ignore
      fetch(toldUID)
      // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
          .then((response) => response.text())
          .then((data) => {

              if(data.charAt(0)!="<"){
                  settoldUs(data);
              }
   
          })
          .catch((err) => {
              console.log(err.message);
          });
          
  }, []);
  //The received data from toldUs is txt, need to parse the detailed information by its line.
  if(toldUs){
      lines = toldUs?.split("\n")
      //Count how many events are included in ToldU calendar
      for(let i = 0; i<=lines.length; i++){
          let label = ""
          if(lines[i]){
               label = lines[i].substr(0,7)
          }
          if(label=="SUMMARY"){
              toldUnumber++
          }
      }
      for(let i = 0; i<toldUnumber; i++){
          var test1 : Toldus = {
              id: 0,
              address: lines[16 + 10*i].substr(9),
              time: lines[13 + 10*i].substr(6),
              summary: lines[14 + 10*i].substr(8),
              detail: lines[18 + 10*i].substr(9),
              };
          toldUsList.push(test1)
          
      }
  }
  // If the data has been retrieved, we render it via a simple unordered list.
  return (
    <div style={outerStyle} >
       <Outer id="CalendarList">
       {
            //The situation that the calendar list is folded, only show the events according to the user selected evvents number
            source=="Google"&&posts && posts.items?.slice(0,eventsNumber).map((post) => {
              {
                var deleteNode =document.getElementById("errors");
                deleteNode?.remove()
              }
              
                return (          
                    <WebinarCard key={post.id} location = {post.location}  summary={post.summary} description = {post.description} dateTime = {post.start.dateTime}
                    //@ts-ignore 
                    htmlLink= {post.htmlLink}  CalendarID = {id} download = {downloadable} source = {source}></WebinarCard>

                );
            })}
            {
            //When click show all button, render the left events items
            source=="Google"&&showMore&&posts && posts.items?.slice(eventsNumber,20).map((post) => {
              {
                var deleteNode =document.getElementById("errors");
                deleteNode?.remove()
              }
              
                return (        
                    <WebinarCard key={post.id} location = {post.location}  summary={post.summary} description = {post.description} dateTime = {post.start.dateTime}
                    //@ts-ignore 
                    htmlLink= {post.htmlLink}  CalendarID = {id} download = {downloadable} source = {source}></WebinarCard>          
                );
            })}
        
         {
            source=="Toldu"&&toldUsList && toldUsList.slice(0,eventsNumber).map((toldUItem) => {
                return (
                 
                    
                    <WebinarCard key={toldUItem.id} location = {toldUItem.address}  summary={toldUItem.summary} description = {"Please click Register Now to view details"} dateTime = {toldUItem.time}
                    //@ts-ignore 
                    htmlLink= {urlLink}  CalendarID = "" download = {downloadable} source = {source}></WebinarCard>

                    
                );
            })}
            {
            source=="Toldu"&&showMore&&toldUsList && toldUsList.slice(eventsNumber,20).map((toldUItem) => {
                return (
                 
                    
                    <WebinarCard key={toldUItem.id} location = {toldUItem.address}  summary={toldUItem.summary} description = {"Please click Register Now to view details"} dateTime = {toldUItem.time}
                    //@ts-ignore 
                    htmlLink= {urlLink}  CalendarID = "" download = {downloadable} source = {source}></WebinarCard>

                    
                );
            })}
             
             <ShowMore onClick={()=>setShowMore(!showMore)}>{showMore?"Show less":"Show more"}</ShowMore>   
            {posts?.error&&toldUsList? 
              //If there is no avaliable events, return the errors.
                <p id="errors">Cannot fetched avaliable events, Please check the settings</p>
              :
                (
                  <div> 
                  </div>
                )
              }
            </Outer>
    </div>
  );
});