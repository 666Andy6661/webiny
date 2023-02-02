import React from "react";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import { PbEditorElement} from "@webiny/app-page-builder/types";
import styled from "@emotion/styled"
import computerImg from "./assets/Group79.png"
// import SubMenu from "./submenu"
// import insideImg from "./assets/pic1.png"
// import Paragraph from "@webiny/app-page-builder/editor/plugins/elements/paragraph/Paragraph";
// import { elementsAtom } from "@webiny/app-page-builder/editor/recoil/modules";
// import GradientCircle from "../../../pb-element-gradient-circle/render/components/gradient_circle"
// import Block from "@webiny/app-page-builder/editor/plugins/elements/block";
// const outerWrapper = css({
//   boxSizing: "border-box"
// });

interface HeaderContentsProps {
  element: PbEditorElement;
  // pbelement: PbElement;
  
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
const HeaderContents: React.FC<HeaderContentsProps> = ({ element }) => {
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
      <div>
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
      {/* <SubMenu/> */}



      </div>
      
    </ElementRoot>
  );
};

export default HeaderContents;