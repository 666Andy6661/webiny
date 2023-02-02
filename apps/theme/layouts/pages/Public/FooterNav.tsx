import React from "react";
import { Link } from "@webiny/react-router";
interface NavigationFolderChild {
    id: string;
    title: string;
    path: string;
    url: string;
}
interface NavigationColumnItemChild {
    id: string;
    title: string;
    path: string;
    url: string;
    children: NavigationFolderChild[];
    type: string;
}
interface NavigationColumnItem {
    id: string;
    title: string;
    path: string;
    url: string;
    children: NavigationColumnItemChild[];
    type: string;
}
interface NavigationProps {
    data: {
        items: NavigationColumnItem[];
    };
}
const FooterNavigation: React.FC<NavigationProps> = ({ data }) => {
    const items = data?.items;
    if (!Array.isArray(items)) {
        return null;
    }
    // console.log(items);

    return (
        <div className="menu__wrapper">
            {data.items.map((columnItem, index) => {
                return (
                    <ul className={`menu-${columnItem.title}`} key={columnItem.id + index}>
                        {columnItem.children.map((folderItem, index) => {

                            if(folderItem.children){
                                return (
                                    <li key={folderItem.id + index}>
                                        <ul className="folder-title">{folderItem.title}
                                            {folderItem.children.map((linkItem, index) => (
                                                <li key={linkItem.id + index}>
                                                    <Link to={linkItem.path || linkItem.url}>{linkItem.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                )
                            }

                            return (
                                <li key={folderItem.id + index}>
                                    <Link to={folderItem.path || folderItem.url}>{folderItem.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                )
            })}
        </div>
    );
};

export default FooterNavigation;
