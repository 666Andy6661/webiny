import React, { useEffect, useState } from "react";
// import { css } from "emotion";
import styled from "@emotion/styled";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
// import { ReactComponent as BlogIcon } from "../assets/blog.svg";
import { PbEditorElement } from "@webiny/app-page-builder/types";
import  WebinarCard  from "../../render/components/webinarCard";
// import { gql } from '@apollo/client';
// import parse from "html-react-parser";

// import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import convertRawCode from "./rawCodeConverter";

import "../../render/components/blog.scss";



// const PreviewBox = styled('div')({
//     textAlign: "center",
//     height: 50,
//     svg: {
//         height: 50,
//         width: 50,
//         color: "var(--mdc-theme-text-secondary-on-background"
//     }
// });

interface WebinarEditor {
    element: PbEditorElement;
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
    }]
}

interface Toldus {
     id: number; 
     address: string; 
     time: string;
     summary:string;
}
const Outer = styled.div`
    background-color: #bebebe;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const WebinarEditor: React.FC<WebinarEditor> = ({ element }) => {
    const [posts, setPosts] = useState<ItemProps>();
    const [toldUs, settoldUs] = useState<string>()
    console.log(posts);
    let lines = [""]
    let toldUnumber = 0
    // let someTime  = Date.parse(new Date().toDateString())
    const eventStartTime = new Date()
    var date = eventStartTime.getDate()
    var month = eventStartTime.getMonth() + 1
    var year = eventStartTime.getFullYear()
    let toldUsList: Toldus[] = [];
    // let someTime = new Date(initTime).toLocaleString().replace(/:\d{1,2}$/, ' ')
    // let d: Date = new Date()
    let calendarID = 'https://www.googleapis.com/calendar/v3/calendars/' + element.data["calendarList"]?.calendarID + 
    '/events?key=' + element.data["calendarList"]?.apiKey
    if(element.data["calendarList"]?.allEvents == true){
        calendarID = 'https://www.googleapis.com/calendar/v3/calendars/' + element.data["calendarList"]?.calendarID + 
    '/events?key=' + element.data["calendarList"]?.apiKey + "&timeMin=" + year + "-" + month + "-" + date + "T00:00:00Z"
    }

    let toldUID = element.data["calendarList"]?.urlLink
    // let toldUStatus = false
    // if(element.data.calendarList?.urlLink){
    //     toldUStatus = true
    //     toldUID = element.data.calendarList?.urlLink
    // }

    
    console.log(calendarID)

        useEffect(() => {
            fetch(calendarID)
            // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                .then((response) => response.json())
                .then((data) => {

                    // console.log(data);

                    setPosts( JSON.parse( JSON.stringify(data)) );
                    
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }, []);

        useEffect(() => {
            //@ts-ignore
            fetch(toldUID)
            // fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
                .then((response) => response.text())
                .then((data) => {

                    console.log(data);
                    if(data.charAt(0)!="<"){
                        settoldUs(data);
                    }

                    
                    
                
                })
                .catch((err) => {
                    console.log(err.message);
                });
                
        }, []);
        if(toldUs){
            lines = toldUs?.split("\n")
            console.log(lines[8])
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
            console.log(toldUnumber)
            for(let i = 0; i<toldUnumber; i++){
                var test1 : Toldus = {
                    id: 0,
                    address: lines[16 + 10*i].substr(9),
                    time: lines[8],
                    summary: lines[14 + 10*i].substr(8),
                    };
                // var address = lines[16 + 10*i]
                // var summary = lines[14 + 10*i]
                // var parsedAddress = ""
                // var parsedSummary = ""
                // if(address){
                //     parsedAddress = address.substr(9)
                //     toldUsList[i].address = parsedAddress
                // }
                // if(summary){
                //     parsedSummary = summary.substr(8)
                //     toldUsList[i].summary = parsedSummary
                // }
                toldUsList.push(test1)
                
            }
        }
        

        
        
        
        
        

        
    return (
        <ElementRoot
            className={
                "webiny-pb-base-page-element-style" 
            }
            style = {{
                display:"flex",
                alignItems:"center",
                justifyContent: "center",
            }}
            element={element}
        >
            <Outer>
            {
            element.data["calendarList"]?.source=="Google"&&posts && posts.items?.map((post) => {
                return (
                 
                    
                    <WebinarCard key={post.id} location = {post.location}  summary={post.summary} description = {post.description} dateTime = {post.start.dateTime}

                    htmlLink= {post.htmlLink}  CalendarID = {element.data["calendarList"]?.calendarID} download = {element.data["calendarList"]?.downloadable}></WebinarCard>

                    
                );
            })}
            {
             element.data["calendarList"]?.source=="Toldu"&&toldUsList && toldUsList.map((toldUItem) => {
                return (
                 
                    
                    <WebinarCard key={toldUItem.id} location = {toldUItem.address}  summary={toldUItem.summary} description = "" dateTime = ""

                    htmlLink= ""  CalendarID = "" download = {element.data["calendarList"]?.downloadable}></WebinarCard>

                    
                );
            })}
           {/* <WebinarCard location = {parsedAddress}  summary={parsedSummary} description = "This event is from ToldU"
                    htmlLink= ""  CalendarID = "" dateTime = ""></WebinarCard> */}

      
            </Outer>
            
            
        </ElementRoot>
    )
};

export default WebinarEditor;
