import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { InMemoryCache } from "@webiny/app/apollo-client/InMemoryCache";
import { ApolloDynamicLink } from "@webiny/app/plugins/ApolloDynamicLink";
import { plugins } from "@webiny/plugins";
import { ApolloCacheObjectIdPlugin } from "@webiny/app/plugins/ApolloCacheObjectIdPlugin";

// Loaded in ecommerce/code/webiny.config.ts.
// const CMS_API_TOKEN = process.env["REACT_APP_WCP_ENV_TOKEN"];

export const createApolloClient = () => {
    const cache = new InMemoryCache({
        addTypename: true,
        dataIdFromObject: obj => {
            /**
             * Since every data type coming from API can have a different data structure,
             * we cannot rely on having an `id` field.
             */
            const getters = plugins.byType<ApolloCacheObjectIdPlugin>(
                ApolloCacheObjectIdPlugin.type
            );

            for (let i = 0; i < getters.length; i++) {
                const id = getters[i].getObjectId(obj);
                if (typeof id !== "undefined") {
                    return id;
                }
            }

            /**
             * As a fallback, try getting object's `id`.
             */
            return obj.id || null;
        }
    });

    const authLink = new ApolloLink((operation, forward) => {
        // Use the setContext method to set the HTTP headers.
        // console.log("===== 36 adding the API token ", CMS_API_TOKEN);
        operation.setContext({
            headers: {
                "x-tenant": "root"
            }
        });

        // Call the next link in the middleware chain.
        return forward(operation);
    });


    // @ts-ignore
    cache.restore("__APOLLO_STATE__" in window ? window.__APOLLO_STATE__ : {});

    const uri = process.env.REACT_APP_GRAPHQL_API_URL;
    const link = ApolloLink.from([new ApolloDynamicLink(), authLink, new BatchHttpLink({ uri })]);

    // @ts-ignore
    window.getApolloState = () => {
        // @ts-ignore
        return cache.data.data;
    };

    return new ApolloClient({ link, cache });
};
