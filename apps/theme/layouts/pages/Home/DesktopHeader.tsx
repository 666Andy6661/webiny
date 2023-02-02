import React, { /*useEffect, /*useState*/ } from "react";
import { Link } from "@webiny/react-router";
import Menu from "./Menu";
import LeftNavigation from "./LeftNavigation";
import RightNavigation from "./RightNavigation";


interface DesktopHeaderProps {
    menuName: string;
    logo: {
        src: string;
    };
    name: string;
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ menuName, logo, name }) => {

    return (
        <div
            className="webiny-pb-section-header__wrapper hide-on-mobile"
            data-testid={"pb-desktop-header"}
            
        >
            <nav className={"webiny-pb-section-header-menu__navigation left"}>
                <Menu slug={menuName} component={LeftNavigation} />
            </nav>

            <div className={"webiny-pb-section-header-menu__logo"} id="menu_logo_div" >
                <Link to="/">
                    {logo && logo.src && <img src={logo.src} alt={name} id="menu_logo"/> }{" "}
                    {(!logo || !logo.src) && (
                        <span className={"webiny-pb-section-header-menu__site-name"}>{name}</span>
                    )}
                </Link>
            </div>

            <nav className={"webiny-pb-section-header-menu__navigation right"}>
                <Menu slug={menuName} component={RightNavigation} />
            </nav>
        </div>
    );
};

export default DesktopHeader;
