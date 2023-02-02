import { createTheme } from "@webiny/app-theme";
import { CSSObject } from "@emotion/core";

// Breakpoints (desktop, tablet, mobile).
export const breakpoints = {
    desktop: "@media (max-width: 4000px)",
    tablet: "@media (max-width: 991px)",
    "mobile-landscape": "@media (max-width: 767px)",
    "mobile-portrait": "@media (max-width: 478px)"
};

// Colors.
export const colors = {
    color1: "#FF6201", // primary
    color2: "#8A197D", // secondary
    color3: "#000078", // text primary
    color5: "#eaecec", // background
    color6: "#ffffff", // white background
    color4: "#616161", // text secondary
    color7: "#2f00eb" //button secondary
};

// Fonts.
export const fonts = {
    font1: "'Montserrat', sans-serif;", // Primary.
    font2: "'Lato', sans-serif;" // Secondary.
};

// Border radius.
export const borderRadius = 4;

// Typography.
const headings = {
    fontFamily: fonts.font2,
    color: colors.color3,
    WebkitFontSmoothing: "antialiased"
};

const paragraphs = {
    fontFamily: fonts.font1,
    color: colors.color3,
    fontWeight: 400,
    lineHeight: "1.5rem",
    WebkitFontSmoothing: "antialiased"
};

export const typography = {
    heading1: { ...headings, fontWeight: "bold", fontSize: 48 },
    heading2: { ...headings, fontSize: 32 },
    heading3: { ...headings, fontSize: 30 },
    heading4: { ...headings, fontSize: 24 },
    heading5: { ...headings, fontSize: 20 },
    heading6: { ...headings, fontSize: 18, lineHeight: "1.75rem" },
    paragraph1: { ...paragraphs, fontSize: 22 },
    paragraph2: {
        ...paragraphs,
        fontSize: 18,
        letterSpacing: "0.45px",
        lineHeight: "19px"
    },
    quote: {
        ...paragraphs,
        fontWeight: "bold",
        fontSize: 22
    },
    list: { ...paragraphs, fontSize: 17 }
} as const; // https://github.com/emotion-js/emotion/issues/1373#issuecomment-498059774

// Buttons.
const buttons = (overrides: CSSObject) => ({
    a: { textDecoration: "none" },
    ".button-body": {
        borderRadius: "28px",
        border: 0,
        padding: "14px 40px 14px 40px",
        fontFamily: fonts.font1,
        // textTransform: "uppercase",
        display: "flex",
        alignItems: "center",
        fontSize: "16px",
        fontWeight: 400,
        justifyContent: "center",
        textAlign: "center",
        cursor: "pointer",
        transition: "all .2s",
        
        "&:hover": {
            boxShadow: "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)",
            transform: "translateY(-1px)"
        },
        ...overrides
    }
});

// Theme object.
const theme = createTheme({
    breakpoints,
    styles: {
        colors,
        typography,
        elements: {
            document: {
                a: { color: colors.color1 },
                b: { fontWeight: "bold" },
                i: { fontStyle: "italic" }
            },
            quote: {
                "blockquote > q": {
                    quotes: "auto",
                    "&:before": { content: "open-quote" },
                    "&:after": { content: "close-quote" }
                }
            },
            button: {
                default: buttons({ 
                    background: colors.color1, 
                    color: colors.color6,
                    "&:hover":
                        {backgroundColor: "#ffffff",
                        color: colors.color1,
                        boxShadow: "0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08)",
                        fontWeight: 600,
                        
                    },
                    "&:active":
                    {transform: "translateY(1px)"
                    
                }}),
                primary: buttons({ 
                    background: colors.color1, 
                    color: colors.color6,
                    "&:hover":
                        {backgroundColor: "#ffffff",
                        color: colors.color1,
                        boxShadow: "0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08)",
                        fontWeight: 600,
                        
                    },
                    "&:active":
                    {transform: "translateY(1px)"
                    
                }}),
                secondary: buttons({ 
                    background: colors.color7, 
                    color: colors.color6,
                    padding: "36px",
                    fontSize: "1.8125rem",
                    fontWeight: 800,
                    height: "105px",
                    borderRadius:"999px",
                    "&:active":
                    {transform: "translateY(1px)"
                    
                }}),
                outlinePrimary: buttons({
                    border: `3px solid ${colors.color1}`,
                    color: colors.color3,
                    fontWeight: 600,
                    backgroundColor: colors.color6,
                    "&:hover":
                        {backgroundColor: colors.color1,
                        color: colors.color6,
                        boxShadow: "0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08)",
                    },
                    "&:active":
                    {transform: "translateY(1px)"
                    
                }
                }),
                outlineSecondary: buttons({
                    border: `3px solid ${colors.color3}`,
                    color: colors.color1,
                    fontWeight: 600,
                    backgroundColor: "transparent",
                    "&:hover":
                        {backgroundColor: colors.color3,
                        color: colors.color6,
                        boxShadow: "0 7px 14px rgba(50,50,93,0.1), 0 3px 6px rgba(0,0,0,0.08)",
                    },
                    "&:active":
                    {transform: "translateY(1px)"
                    
                }
                })
            },

            list: {
                "ul, ol": {
                    li: {
                        marginBottom: "12px",
                        marginLeft: "1.875rem",
                        position: "relative"
                    }
                },
                ul: {
                    li: {
                        "&:before,&:after": {
                            position: "absolute",
                            content: '""',
                            borderRadius: "50%"
                        },
                        "&:before": {
                            backgroundColor: "#90c418",
                            height: "1.25rem",
                            width: "1.25rem",
                            left: "-1.875rem",
                            top: "0.125rem"
                        },
                        "&:after": {
                            backgroundColor: "#ffffff",
                            height: "0.5rem",
                            left: "-1.5rem",
                            top: "0.5rem",
                            width: "0.5rem"
                        }
                    }
                },
                ol: {
                    listStyleType: "decimal"
                }
            }
        }
    }
});

export default theme;
