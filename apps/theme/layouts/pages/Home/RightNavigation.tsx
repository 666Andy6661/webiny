import React, { useState } from "react";
import { Link } from "@webiny/react-router";
import SubMenu from "./Submenu";
import "./header-nav.scss";

interface NavigationPropsItemChild {
    id: string;
    title: string;
    path: string;
    url: string;
    type: string;
}
interface NavigationPropsItem {
    id: string;
    title: string;
    path: string;
    url: string;
    children: NavigationPropsItemChild[];
}
interface NavigationProps {
    data: {
        items: NavigationPropsItem[];
    };
}
const LeftNavigation: React.FC<NavigationProps> = ({ data }) => {
    const items = data?.items;
    if (!Array.isArray(items)) {
        return null;
    }

    const [ showSubMenu, setShowSubMenu ] = useState(false);

    const handleMouseOver = (title : string) => {
        const subMenu = document.getElementById(`nav-item-${title}-submenu`);

        if ( subMenu && !showSubMenu ) {
            subMenu.style.visibility = "visible";
            subMenu.style.opacity = "1" ;

            // let submenu position follow menu height
            if (window.scrollY < 20) {
                //  @ts-ignore
                subMenu.style.top = 100 + "px";
            }
            if (window.scrollY >= 20) {
                //  @ts-ignore
                subMenu.style.top = 80 + "px" ;
            }
            setShowSubMenu(true);
        }
    };

    const handleMouseOut = (title : string) => {
        const subMenu = document.getElementById(`nav-item-${title}-submenu`);

        if (subMenu && showSubMenu) {
            subMenu.style.visibility = "hidden";
            subMenu.style.opacity = "0" ;
            setShowSubMenu(false);
        }
    }

    return (
        <ul className="navbar-child">
            {data.items.slice( (items.length / 2), items.length ).map((item, parentIndex) => {
                if (Array.isArray(item.children)) {
                    return (
                        <li className="menu-nav-item" key={item.id + parentIndex} id={`nav-right-item-${parentIndex}`} 
                            onMouseOver={() => handleMouseOver(item.title)}
                            onMouseOut={() => handleMouseOut(item.title)}
                        >
                            {item.title}
                                <SubMenu 
                                    id={`nav-item-${item.title}-submenu`} 
                                    item={item}
                                    title = {item.title}
                                >
                                </SubMenu>
                        </li>
                    );
                }

                return (
                    <li className="menu-nav-item" key={item.id + parentIndex} id={`nav-right-item-${parentIndex}`} >
                        <Link to={item.path || item.url}>{item.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default LeftNavigation;
