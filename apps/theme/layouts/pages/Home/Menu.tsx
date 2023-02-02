import * as React from "react";
import { Query } from "@apollo/react-components";
import gql from "graphql-tag";
import get from "lodash/get";

export const hasMenuItems = (data: GetPublishMenuQueryResponse): boolean => {
    return Boolean(
        data &&
            Array.isArray(data.pageBuilder.getPublicMenu.data.items) &&
            data.pageBuilder.getPublicMenu.data.items.length
    );
};

export interface GetPublishMenuQueryResponse {
    pageBuilder: {
        getPublicMenu: {
            data: {
                title: string;
                slug: string;
                items: any[];
            };
            error: {
                code: string;
                message: string;
                data: Record<string, any>;
            };
        };
    };
}
export const GET_PUBLIC_MENU = gql`
    query GetPublicMenu($slug: String!) {
        pageBuilder {
            getPublicMenu(slug: $slug) {
                data {
                    slug
                    title
                    items
                }
                error {
                    code
                }
            }
        }
    }
`;

interface MenuProps {
    slug: string;
    component: React.FC<any>;
}
const Menu: React.FC<MenuProps> = ({ slug, component: Component }) => {

    return (
        <Query<GetPublishMenuQueryResponse> query={GET_PUBLIC_MENU} variables={{ slug }}>
            {props => {
                const data = get(props, "data.pageBuilder.getPublicMenu.data", {
                    items: [],
                    title: null,
                    slug: null
                });
                // console.log(props);

                return (
                    <>
                        <ps-tag data-key="pb-menu" data-value={slug} />
                        <Component {...props} data={data}/>
                    </>
                );
            }}
        </Query>
    );
};

export default Menu;
