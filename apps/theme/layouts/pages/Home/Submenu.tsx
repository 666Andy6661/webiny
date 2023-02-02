import React, { useEffect } from "react";
import SubMenuCard from "./SubmenuCard";

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

interface submenuProps {
    id: string;
    item: NavigationPropsItem;
    title: string;
}

const SubMenu: React.FC<submenuProps> = ( { id, item, title } ) => {

    useEffect(() => {
        const handleScroll = () => {

            const submenu = document.getElementById(`nav-item-${title}-submenu`);

            if( submenu && window.scrollY < 20 ){
                submenu.style.top = 100 + "px";
            }
            else {
                // @ts-ignore
                submenu.style.top = 80 + "px";
            }
            

        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        
    }, []);

    return (
        <ul id={id} className="submenu" >

            <div className="submenu__wrapper">
                { item.children.map((item, index) => {
                    // Limit number of cards to 3
                    if(index <= 2) {
                        return (
                            <SubMenuCard 
                                key={item.id + index} 
                                parentTitle={title}
                                pageTitle={item.title} 
                                pageId={item.id}
                                type={item.type}
                                pageUrl={item.url}
                                index= {index}
                            />
                        )
                    }
                    return null;
                })}

                <li className="submenu-all">
                    + SEE ALL {title}
                </li>

            </div>
        </ul>
    )
}

export default SubMenu;