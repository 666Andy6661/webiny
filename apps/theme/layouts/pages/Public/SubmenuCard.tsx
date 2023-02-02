import React, { useEffect, useState } from "react";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { gql } from '@apollo/client';

interface submenuCardProps {
    pageId: string;
    pageTitle: string;
    pagePath: string;
    index: number;
    // pageUrl: string | undefined;
}

const GET_PAGE = gql`
    query getPage($id: ID!) {
        pageBuilder {
            getPage(id: $id) {
                data {
                    id
                    settings {
                        general {
                        snippet
                            image {
                                src
                            }
                        }
                    }
                    path
                    url
                }
                error {
                    message
                }
            }
        }
    }
`

interface GetPageResponse {
    pageBuilder: {
        getPage: {
            data: {
                id: string;
                settings: {
                    general: {
                        snippet: string;
                        image?: {
                            src: string;
                        }
                    }
                }
                path: string,
                url: string,
            },
            error: {
                message: string;
            }
        }
    }
}

function createApolloClient( url : string, APIKey : string | undefined ) {
    const httpLink = createHttpLink({
        uri: url,
    });
    
    const authLink = setContext((_, { headers }) => {

        if (APIKey) {
            return {
                headers: {
                    ...headers,
                    "x-tenant": "root",
                    authorization: APIKey ? `Bearer ${APIKey}` : "",
                }
            }
        }

        return {
            headers: {
                ...headers,
                "x-tenant": "root",
            }
        }
    
    });
    
    const cache = new InMemoryCache();
    const client = new ApolloClient({
        cache: cache,
        link: authLink.concat(httpLink),
    
        name: 'submenu-item-client',
        version: '1.3',
        queryDeduplication: false,
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'cache-and-network',
            },
        },
    })

    return client;
}

const SubMenuCard: React.FC<submenuCardProps> = ( { pageId, pageTitle, index } ) => {

    const url = process.env.REACT_APP_GRAPHQL_API_URL;
    const APIKey = process.env["REACT_APP_PAGE_SETTINGS_TOKEN"];
    // @ts-ignore
    const client = createApolloClient( url, APIKey );

    const [ loading, setLoading ] = useState(true);
    const [ response, setResponse ] = useState<GetPageResponse>();

    useEffect( () => {

        // if the submenu item is a page
        client.query({
            query: GET_PAGE,
            variables: { "id" : pageId }
        }).then( (result) => {
            if( !result.data.pageBuilder.getPage.error ) {
                // @ts-ignore
                setResponse(result.data);
                setLoading(false);

                const subCardImg = document.getElementById(`footer-second-submenu-${index}-icon`) as HTMLImageElement;

                if (result.data.pageBuilder.getPage.data.settings.general.image && subCardImg ) {
                    const imageURL : string = result.data.pageBuilder.getPage.data.settings.general.image.src ;
                    subCardImg.src = imageURL;
                }

                if(result.data.pageBuilder.getPage.data.path || result.data.pageBuilder.getPage.data.url){
                    const subCardLink = document.getElementById(`footer-second-submenu-${index}-link`) as HTMLAnchorElement;
                    if(subCardLink) { subCardLink.href = result.data.pageBuilder.getPage.data.path || result.data.pageBuilder.getPage.data.url }
                }
        
            }
        });
    },[]);

    return(
        
        <li className="footer-second-submenu-card" >
            <a id={`footer-second-submenu-${index}-link`} >
                <div className="footer-second-submenu-card__wrapper" >
                    <div className="card-img">
                        <img id={`footer-second-submenu-${index}-icon`} alt={`${pageTitle}`} />
                    </div>
                    <div className="card-snippet">
                        {/* <p>{pageTitle}</p> */}
                        { loading ? 
                            <p>Loading...</p>
                        :
                            <p>{response?.pageBuilder.getPage.data.settings.general.snippet}</p>
                        }
                    </div>
                </div>
            </a>
        </li>
    )
}

export default SubMenuCard;
