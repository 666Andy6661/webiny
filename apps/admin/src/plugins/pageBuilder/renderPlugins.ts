// Elements
import document from "@webiny/app-page-builder/render/plugins/elements/document";
import grid from "@webiny/app-page-builder/render/plugins/elements/grid";
import block from "@webiny/app-page-builder/render/plugins/elements/block";
import cell from "@webiny/app-page-builder/render/plugins/elements/cell";
import icon from "@webiny/app-page-builder/render/plugins/elements/icon";
import image from "@webiny/app-page-builder/render/plugins/elements/image";
import paragraph from "@webiny/app-page-builder/render/plugins/elements/paragraph";
import heading from "@webiny/app-page-builder/render/plugins/elements/heading";
import list from "@webiny/app-page-builder/render/plugins/elements/list";
import quote from "@webiny/app-page-builder/render/plugins/elements/quote";
import button from "@webiny/app-page-builder/render/plugins/elements/button";
import codesandbox from "@webiny/app-page-builder/render/plugins/elements/embeds/codesandbox";
import soundcloud from "@webiny/app-page-builder/render/plugins/elements/embeds/soundcloud";
import youtube from "@webiny/app-page-builder/render/plugins/elements/embeds/youtube";
import iframe from "@webiny/app-page-builder/render/plugins/elements/iframe";
import vimeo from "@webiny/app-page-builder/render/plugins/elements/embeds/vimeo";
import twitter from "@webiny/app-page-builder/render/plugins/elements/embeds/twitter";
import pinterest from "@webiny/app-page-builder/render/plugins/elements/embeds/pinterest";
import pagesList from "@webiny/app-page-builder/render/plugins/elements/pagesList";
import imagesList from "@webiny/app-page-builder/render/plugins/elements/imagesList";
// Page settings
import pageSettings from "@webiny/app-page-builder/render/plugins/pageSettings";
// Element settings
import align from "@webiny/app-page-builder/render/plugins/elementSettings/align";
import animation from "@webiny/app-page-builder/render/plugins/elementSettings/animation";
import background from "@webiny/app-page-builder/render/plugins/elementSettings/background";
import border from "@webiny/app-page-builder/render/plugins/elementSettings/border";
import gridSettings from "@webiny/app-page-builder/render/plugins/elementSettings/grid";
import height from "@webiny/app-page-builder/render/plugins/elementSettings/height";
import width from "@webiny/app-page-builder/render/plugins/elementSettings/width";
import shadow from "@webiny/app-page-builder/render/plugins/elementSettings/shadow";
import padding from "@webiny/app-page-builder/render/plugins/elementSettings/padding";
import margin from "@webiny/app-page-builder/render/plugins/elementSettings/margin";
import textSetting from "@webiny/app-page-builder/render/plugins/elementSettings/text";
import property from "@webiny/app-page-builder/render/plugins/elementSettings/property";
// Responsive mode
import responsiveMode from "@webiny/app-page-builder/render/plugins/responsiveMode";
// import gradientCircleElement from "@extensions/pb-element-gradient-circle/render";
import webinarElement from "@extensions/pb-element-webinar/render";
import contentsHeaderElement from "@extensions/pb-element-header-contents/render";
import blogElement from "@extensions/pb-element-blog/render";
import spaceX from "theme/pageElements/spaceX/website";
import gradientCircle from "theme/pageElements/gradientCircle/website"
import customizeCta from "theme/pageElements/customizeCta/website"
import floatBubble from "theme/pageElements/floatBubble/website"
import imageBubble from "theme/pageElements/imageBubble/website"
import blog from "theme/pageElements/blog/website"
import rawHtml from "theme/pageElements/rawHTML/website"
import rawJs from "theme/pageElements/customerScript/website"
import customizeForm from "theme/pageElements/customizeForm/website"
import headerContent from "theme/pageElements/headerContent/website"
import fixedButton from "theme/pageElements/fixedButton/website"
import calendar from "theme/pageElements/calendar/website"
export default [
    document(),
    grid(),
    block(),
    cell(),
    image(),
    icon(),
    paragraph(),
    heading(),
    list(),
    quote(),
    button(),
    codesandbox(),
    soundcloud(),
    youtube(),
    iframe(),
    vimeo(),
    twitter(),
    pinterest(),
    pagesList(),
    imagesList(),
    // Page settings
    pageSettings(),
    // Element settings
    align,
    animation,
    background,
    border,
    gridSettings,
    height,
    width,
    shadow,
    padding,
    margin,
    textSetting,
    property,
    spaceX,
    gradientCircle,
    customizeCta,
    floatBubble,
    imageBubble,
    blog,
    rawHtml,
    rawJs,
    customizeForm,
    fixedButton,  
    headerContent,
    calendar,
    responsiveMode(),
    // gradientCircleElement(),
    webinarElement(),
    contentsHeaderElement(),
    blogElement()
];
