import React, { useEffect, useState } from "react";
import { createRenderer, useRenderer } from "@webiny/app-page-builder-elements";
import { gql } from '@apollo/client';
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import defaultBlogImage from "./assets/blog-default.png";
import "./blog.scss";

const LIST_BLOGS = gql`
    query ListBlogs {
        listBlogs {
            data {
                title
                time
                abstract
                content
                media
                link
            }
            error {
                message
            }
        }
    }
`

export interface ListBlogsResponse {
    listBlogs: {
        data: [{
            title: string,
            time: Date,
            abstract: string,
            content: JSON,
            media: string,
            link: string,
        }] | null,
        error: {
            message: string,
        }
    }
}

function createApolloClient( url : string ) {
    const httpLink = createHttpLink({
        uri: url,
    });
    
    const authLink = setContext((_, { headers }) => {
        const token = process.env["REACT_APP_CMS_API_READ_TOKEN"];
        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
                "Access-Control-Allow-Origin": "*",
                "x-tenant": "root",
            }
        }
    });
    
    const cache = new InMemoryCache();
    const client = new ApolloClient({
        cache: cache,
        link: authLink.concat(httpLink),
        name: 'blog-test-client',
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

export interface BlogElementData {
    variables:{
        url: string;
    },
    settings: {
        height: {
            desktop: {
                value: string,
            }
        },
        width: {
            desktop: {
                value: string,
            }
        },
    }
}

// The renderer React component.
export const Blog = createRenderer(() => {
  // Let's retrieve the variables that were chosen by
  // the user upon dropping the page element onto the page.
  const { getElement } = useRenderer();
  const element = getElement<BlogElementData>();
  const { url } = element.data.variables;

  if ( url === "/" ) {
      return <div>Blog URL is missing!</div>;
  }
  
  const client = createApolloClient( url );
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);
  const [ response, setResponse ] = useState<ListBlogsResponse>();

  // GraphQL request to CMS
  useEffect( () => {
    try {
        console.log("Query sending...");
        client.query({
            query: LIST_BLOGS,
        }).then( (result) => {
            console.log(result);
            if(result) {
                setResponse(result.data);
                setLoading(false);
  
                if(result.data.listBlogs.error !== null) {
                    setError(true);
                }
            }
        });
    }
    catch(error) {
        console.log(error);
        setError(true);
        setResponse({listBlogs:{
            data: null,
            error: {
                message: "Some error happens!"
            }
        }})
    }
  },[]);

  return (
        <div key={element.id}>
            { loading ? (
                <p>Loading </p>
            ) : (
                <div  className="blogs-container">
                    {response?.listBlogs.data && response.listBlogs.data.map( (post,index) => {
                        return (
                            <div key={"blog-card-" + index} className="blog-card">
                                { post.media !== null ? 
                                    <img className="blog-card-media" src={`${post.media}`}/> 
                                : 
                                    <img className="blog-card-media" src={defaultBlogImage}/> 
                                }
                                <p className="blog-card-title">{post.title}</p>
                                <p className="blog-card-abstract">{post.abstract}</p>
                                <a className="blog-card-link" href={`${post.link}`}>
                                    <button className="blog-card-button ">Read More</button>
                                </a>
                            </div>
                        )
                    })}
                </div>
            )}
            { error ? (
                <p>Error: {response?.listBlogs.error.message}</p>
            ) : null }
        </div> 
    )
});

