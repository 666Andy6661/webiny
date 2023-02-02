import React from "react";
import SubMenuCard from "./SubmenuCard";

interface NavigationPropsItemChild {
    id: string;
    title: string;
    path: string;
    url: string;
}
interface NavigationPropsItem {
    id: string;
    title: string;
    type: string;
    children: NavigationPropsItemChild[];
}

interface NavigationProps {
    data: {
        items: NavigationPropsItem[];
    };
}

const SubMenu: React.FC<NavigationProps> = ( { data } ) => {

    if( !data ){
        return null
    }
    
    const toolsList = data.items[0];

    if(!toolsList) {
        return null;
    }

    return (
        <ul className="submenu__wrapper">

            <li className="submenu-all">
                <p>Discover all</p> 
                <p>our {toolsList.title} !</p>
            </li>
            { toolsList.children !== undefined && toolsList.children.map((item, index) => {
                return (
                    <SubMenuCard 
                        key={item.id + index} 
                        pageTitle={item.title} 
                        pageId={item.id}
                        pagePath={item.path}
                        index= {index}
                    />
                )
            })}

        </ul>
    )
}

export default SubMenu;