import cliWorkspaces from "@webiny/cli-plugin-workspaces";
import cliPulumiDeploy from "@webiny/cli-plugin-deploy-pulumi";
import cliAwsTemplate from "@webiny/cwp-template-aws/cli";

// Scaffolds.
import cliScaffold from "@webiny/cli-plugin-scaffold";
import cliScaffoldExtendGraphQlApi from "@webiny/cli-plugin-scaffold-graphql-service";
import cliScaffoldAdminModule from "@webiny/cli-plugin-scaffold-admin-app-module";
import cliScaffoldCiCd from "@webiny/cli-plugin-scaffold-ci";

export default {
    id: "moots-technology-pty-ltd/mootstech",
    template: "@webiny/cwp-template-aws@5.34.0",
    name: "webiny",
    cli: {
        plugins: [
            cliWorkspaces(),
            cliPulumiDeploy(),
            cliAwsTemplate(),

            // Scaffolds.
            cliScaffold(),
            cliScaffoldExtendGraphQlApi(),
            cliScaffoldAdminModule(),
            cliScaffoldCiCd()
        ]
    },
    appAliases: {
        core: "apps/core",
        api: "apps/api",
        admin: "apps/admin",
        website: "apps/website"
    }
};
