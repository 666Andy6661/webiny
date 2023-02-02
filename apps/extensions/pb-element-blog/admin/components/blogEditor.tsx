import React from "react";
import { css } from "emotion";
import styled from "@emotion/styled";
import { ElementRoot } from "@webiny/app-page-builder/render/components/ElementRoot";
import { PbEditorElement } from "@webiny/app-page-builder/types";
import "./blogEditor.scss";
import defaultBlogImage from "../assets/blog-default.png";

const outerWrapper = css({
    boxSizing: "border-box"
});

const PreviewBox = styled('div')({
    textAlign: "center",
    height: 50,
    svg: {
        height: 50,
        width: 50,
        color: "var(--mdc-theme-text-secondary-on-background"
    }
});

interface BlogProps {
    element: PbEditorElement;
}

const BlogEditor: React.FC<BlogProps> = ({ element }) => {
    if(!element?.data?.source?.url) {
        return (
            <PreviewBox>
                <p>This is a blog block.</p>
                <p>URL not provided.</p>
            </PreviewBox>
        );
    }

    const blogNumbers = 3;

    return (
        <ElementRoot
            className = {"webiny-pb-base-page-element-style " + outerWrapper}
            element = {element}
        >
            <p>This is a blog block.</p>
            <div  className="blogs-container">
                {[...Array(blogNumbers)].map(( index ) =>
                    <div key={"blog-card-" + index} className="blog-card">
                        <img className="blog-card-media" src={defaultBlogImage}/> 
                        <p className="blog-card-title">Title</p>
                        <p className="blog-card-abstract">Abstract</p>
                        <button className="blog-card-button ">Read More</button>
                    </div>
                )}
            </div>
        </ElementRoot>
    )
};

export default BlogEditor;