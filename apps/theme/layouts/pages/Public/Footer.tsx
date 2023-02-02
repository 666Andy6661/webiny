import * as React from "react";
import { Link } from "@webiny/react-router";
// import { ReactComponent as FacebookIcon } from "./assets/facebook-square-brands.svg";
// import { ReactComponent as TwitterIcon } from "./assets/twitter-square-brands.svg";
// import { ReactComponent as InstagramIcon } from "./assets/instagram-brands.svg";
import styled from "@emotion/styled";
import { colors } from "../../../theme";
import { usePage } from "@webiny/app-page-builder-elements";

import emailIcon from "./assets/contact-email.svg";
import phoneIcon from "./assets/contact-phone.svg";
import locationIcon from "./assets/contact-location.svg";

import FooterMenu from "./FooterMenu";
import FooterNavigation from "./FooterNav";
import SecondMenu from "./SecondMenu";
import footerSubmenu from "./Submenu";

import "./footer.scss";

export const Footer: React.FC = () => {
    const { layoutProps } = usePage();
    const { name, logo } = layoutProps["settings"];

    return (
        <FooterWrapper data-testid={"pb-footer"}>
            <div className={"webiny-pb-section-footer"} data-testid={"pb-footer"}>
            <div className="webiny-pb-section-footer__wrapper">

                <div className="logo-contact" >
                    <Link to="/">{logo && logo.src && <img className="logo" src={logo.src} alt={name} />}</Link>
                    <div className="contact" >
                        <h4>CONTACT US</h4>
                        <div className="contact__list" >
                            <img src={emailIcon} className="contact__list--icon"/>
                            <p className="contact__list--item" >email@email.com</p>
                        </div>
                        <div className="contact__list" >
                            <img src={phoneIcon} className="contact__list--icon"/>
                            <p className="contact__list--item" >8240 PHONE</p>
                        </div>
                        <div className="contact__list" >
                            <img src={locationIcon} className="contact__list--icon"/>
                            <p className="contact__list--item" >12 Location, Location 0000</p>
                        </div>
                    </div>
                    <div className="book-form">

                    </div>
                </div>

                <div className="menu" >
                    <FooterMenu slug={"footer"} component={FooterNavigation}/>
                </div>

                <div className="book-form">
                    <p>BOOK FORM DEMO</p>
                </div>
            </div> 
            <div className="webiny-pb-section-footer__tools">
                {/* <FooterMenu slug={"footer-tools"} component={FooterNavigation}/> */}
                <SecondMenu slug="footer-tools" component={footerSubmenu}/>
            </div>
            <div className={"webiny-pb-section-footer__copyright"}>
                <p>{new Date().getFullYear()} © {name}. All rights reserved.</p>
            </div>
        </div>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    background-color: ${colors.color5};
    height: 100px;
`;