import React, {  useEffect } from "react";
import DesktopHeader from "./DesktopHeader";
// import MobileHeader from "./MobileHeader";
// import { PbPageData } from "@webiny/app-page-builder/types";
// import colorPicker from "../../utils/colorPicker";
import { usePage } from "@webiny/app-page-builder-elements";
import "./header-nav.scss";

const menuName = "header-menu";

// interface HeaderProps {
//     settings: Record<string, any>;
//     page: PbPageData;
// }

export const Header: React.FC = () => {
    // const { name, logo } = settings;
    // @ts-ignore
    // const colorTags = page.settings?.general.tags;
    const { layoutProps } = usePage();
    const { settings } = layoutProps;
    const { name, logo } = settings;
    console.log(settings)
    
    useEffect(() => {
        const initMenuColor = getComputedStyle(document.body).getPropertyValue("--webiny-theme-color-gradient-shadow");
        // const menuColor = colorPicker( colorTags , getComputedStyle(document.body))[0];

        const handleScroll = () => {
            const section_header = document.getElementById('section_header');
            const menu_logo = document.getElementById("menu_logo_div")
            if(section_header && menu_logo){
                switch(true) {
                    case ( window.scrollY < 20 ):
                        section_header.style.height = 100 + "px";
                        section_header.style.background = initMenuColor;
                        menu_logo.style.flex = "2";
                        menu_logo.style.margin = "0px 2vw";
                        break; 
                    default:
                        section_header.style.height = 80 + "px";
                        // section_header.style.background = menuColor;
                        menu_logo.style.flex = "1.4";
                        menu_logo.style.margin = "0px 5vw";
                        break;
                }
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        
    }, []);

    return (
        <React.Fragment>
            <div className={"webiny-pb-section-header"} data-testid={"pb-desktop-mobile-headers"} id={'section_header'}>
                <DesktopHeader menuName={menuName} name={name} logo={logo} />
                {/* <MobileHeader
                    menuName={menuName}
                    name={name}
                    logo={logo}
                    active={mobileMenu}
                    toggleMenu={toggleMobileMenu}
                /> */}
            </div>
            
            <div className={"webiny-pb-section-header-spacer"} />
        </React.Fragment>
    );
};

 
