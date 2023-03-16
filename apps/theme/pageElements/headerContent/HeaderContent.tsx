import React from "react";
import styled from "@emotion/styled";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";
import computerImg from "./assets/Group79.png"
// For simplicity, we're hard-coding the GraphQL HTTP API URL here.


// It's often useful to type the data that the page element will carry.
export interface HeaderContentProps {
  variables: {
    title: string;
    description: string;
    buttonText: string;
    backgroundImage: string;
    link: string;
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

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 0 0 0;
    background-image: linear-gradient(to top,#0C009F,#060068,#03004B, #020040);
    width: 100%;
    height: 990px;
    z-index: 0;
`
const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    max-width: 1380px;
    /* justify-content: center; */
    /* align-items: flex-start; */

`
const Title = styled.p`
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  font-family: Montserrat;
  color: #ffffff;
`
const Description = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.7;
  font-family: Montserrat;
  color: #ffffff;
`

const Button = styled.button`
  display: flex;
  background-color: var(--webiny-theme-color-primary, #ff6201);
  color: var(--webiny-theme-color-on-primary, #ffffff);
  border: none;
  font-weight: 500;
  align-items: center !important;
  justify-content: center;
  padding: 14px 40px 14px 40px !important;
  vertical-align: top;
  text-align: center;
  font-size: 16px;
  line-height: 1;
  height: 55px;
  border-radius: 28px;
  will-change: opacity;
  // transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  // text-transform: uppercase;
  letter-spacing: 0.025em;
  box-sizing: border-box;
  outline: none;
  min-width: 100px;
  width: auto;
  font-family: Montserrat;

  
  > span {
    display: block;
    font-size: 1px;
    line-height: 100%;
  }
  &:hover {
    background-color: #ffffff;
    color: #ff6201;
    border: none;
    font-weight: 700;
    // border-style: solid;
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    text-decoration:none;
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.5;
    transform: translateY(0px);
    box-shadow: none;
    cursor: wait;
  }
  &--loading {
    background-image: linear-gradient(
      var(--webiny-theme-color-primary, #ee896b) 0%,
      var(--webiny-theme-color-primary, #ee896b) 100%
    ) !important;
    color: transparent;
    position: relative;
    text-transform: uppercase;
    font-size: 0;
    height: 42px;
    transition: all 350ms ease;

    &:before {
      margin: -13px 0 0 -13px;
      width: 24px;
      height: 24px;
      position: absolute;
      left: 50%;
      top: 50%;
      color: #fff;
      content: "";
      border-radius: 24px;
      background-clip: padding-box;
      animation: webiny-pb-page-element-button-animation-rotate 750ms linear infinite;
      span {
        color: transparent;
      }
    }
  }

`
const ContentList = styled.div`
    /* margin-top: 127px; */
    display:flex;
    flex-direction: column;
    max-width: 32%;
    color: #ffffff;
    padding-top: 5% ;
    margin-right: 7%;
    
`
const ListItem = styled.div`
  margin-bottom: 33px;
`
const ImgSection = styled.div`
  margin-left: 8%;
  position: relative;
  display:flex;
  max-width: 55%;
  max-height: 53%;
  align-items: center;
  justify-content: center;
`

const InneriImg = styled.div`
  background-size: cover;
   /* background-color: white; */
  border-radius: 2%;
  margin-left: 2%;
  margin-bottom: 6%;
  width: 75%;
  aspect-ratio: 16 / 10.5;
  position: absolute;
`
// The renderer React component.
export const HeaderContent = createRenderer(() => {

  const { getElement } = useRenderer();
  const element = getElement<HeaderContentProps>();

  const { title,description,buttonText,backgroundImage,link } = element.data.variables;
  const inner_img = document.getElementById('inner_img');
  if(inner_img){
    const newsrc = backgroundImage
    inner_img.style.backgroundImage = "url" + "(" + newsrc||"" + ")"
  }
  const outerStyle = {
   
  } as React.CSSProperties

  // If the data has been retrieved, we render it via a simple unordered list.
  return (
    <div style={outerStyle}>
      <Header>
        <Wrapper>
            <ContentList>
              <ListItem>
                <Title className="webiny-pb-typography-header-label">{title}</Title>
              </ListItem>
              <ListItem>
                <Description className="webiny-pb-typography-header-description">{description}</Description>
              </ListItem>
              <ListItem>
                <a href={link}>
                  <Button className="webiny-pb-page-element-button--primary webiny-pb-page-element-button">{buttonText}</Button>
                </a>
              
                </ListItem> 
            </ContentList>
            
            <ImgSection>
            <img src = {computerImg}/>
            <InneriImg id="inner_img"></InneriImg>
            </ImgSection>
        </Wrapper>
      </Header>
    </div>
  );
});