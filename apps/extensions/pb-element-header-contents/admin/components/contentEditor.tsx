import React from "react";
// import { css } from "emotion";
import styled from "@emotion/styled";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import { PbEditorElement } from "@webiny/app-page-builder/types";
import computerImg from "./assets/Group 79.png"

const Header = styled.div`
    position: relative;
    margin: 0 0 0 0;
    background-image: linear-gradient(to top,#0C009F,#060068,#03004B, #020040);
    width: 100%;
    height: 890px;
    z-index: 0;
`
const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
`

const ContentList = styled.div`
    margin-top: 127px;
    margin-left: 260px;
    display:flex;
    flex-direction: column;
    max-width: 37%;
    color: #ffffff;
    justify-content: space-between;  
`
const ListItem = styled.div`
  margin-bottom: 33px;
`
const ImgSection = styled.div`
  position: relative;
  display:flex;
  max-width: 44%;
  max-height: 44%;
  align-items: center;
  justify-content: center;
`

const InneriImg = styled.div`
  background-image: url(https://th.bing.com/th/id/OIP.Jec3Ds8A9zLGnGukwRCmqAHaE7?pid=ImgDet&rs=1);
  background-size: cover;
   /* background-color: white; */
  border-radius: 2%;
  margin-left: 2%;
  margin-bottom: 6%;
  width: 66%;
  aspect-ratio: 16 / 10.5;
  position: absolute;
`
interface ContentProps {
  element: PbEditorElement;
}
const ContentEditor: React.FC<ContentProps> = ({ element }) => {
  const inner_img = document.getElementById('inner_img');
  if(inner_img){
    const newsrc = element.data.image?.file?.src
    inner_img.style.backgroundImage = "url" + "(" + newsrc||"" + ")"
  }
  return (
    <ElementRoot
      className="webiny-pb-base-page-element-style" 
      element={element}
    >
      <Header>
        <Wrapper>
            <ContentList>
              <ListItem>
                <p className="webiny-pb-typography-header-label">{element.data.text?.data?.text}</p>
              </ListItem>
              <ListItem>
                <p className="webiny-pb-typography-header-description">{element.data.type}</p>
              </ListItem>
              <ListItem>
              <button className="webiny-pb-page-element-button--primary webiny-pb-page-element-button">{element.data.buttonText}</button>
                </ListItem> 
            </ContentList>
            
            <ImgSection>
            <img src = {computerImg}/>
            <InneriImg id="inner_img"></InneriImg>
            </ImgSection>
        </Wrapper>
      </Header>
    </ElementRoot>
  );
};

export default ContentEditor;