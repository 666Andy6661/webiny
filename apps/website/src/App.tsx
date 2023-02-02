import React from "react";
import { Website } from "@webiny/app-website";
import { createApolloClient } from "./plugins/apolloClient";

export const App: React.FC = () => {
    return <Website apolloClient={createApolloClient()}/>;
};
