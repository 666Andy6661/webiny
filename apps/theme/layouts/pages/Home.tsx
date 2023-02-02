import React from "react";
import { Header } from "./Home/Header";
import { Footer } from "./Public/Footer";
// import { PbPageData } from "@webiny/app-page-builder/types";
// import { Global, css } from "@emotion/core";
import styled from "@emotion/styled";

// const globalStyles = css`
//     html {
//         scroll-behavior: smooth;
//     }

//     @media screen and (prefers-reduced-motion: reduce) {
//         html {
//             scroll-behavior: smooth;
//         }
//     }
// `;
const Layout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    footer {
        margin-top: auto;
    }
`;

const Home: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Layout>
            {/* <Global styles={globalStyles} /> */}
            <Header />
            <main>{children}</main>
            <Footer />
        </Layout>
    );
};

export default Home;
