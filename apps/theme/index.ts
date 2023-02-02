import StaticLayout from "./layouts/pages/Static";
import theme from "./theme";

import { PbPageLayoutPlugin } from "@webiny/app-page-builder";
import { FbFormLayoutPlugin } from "@webiny/app-form-builder";
import { ThemePlugin } from "@webiny/app-website";
import DefaultFormLayout from "./layouts/forms/DefaultFormLayout";
import HomeLayout from "./layouts/pages/Home"

export default () => [
    new ThemePlugin(theme),
    new PbPageLayoutPlugin({
        name: "static",
        title: "Static page",
        component: StaticLayout
    }),
    new PbPageLayoutPlugin({
        name: "home",
        title: "Home page",
        component: HomeLayout
    }),
    new FbFormLayoutPlugin({
        name: "default",
        title: "Default layout",
        component: DefaultFormLayout
    })
];
