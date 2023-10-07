/**
 * Import the routeImporter function from the routeImporter module of @liberu-ui/ui/src/modules/importers.
 */
import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

/**
 * Get the routes from the specified directory using the routeImporter function.
 * @param directory - The directory from which to import the routes.
 * @param includeSubdirectories - Specifies whether to include routes from subdirectories of the specified directory.
 * @param fileRegex - The regular expression to match the filenames of the routes.
 * @returns The imported routes.
 */
const getRoutes = (directory: __WebpackModuleApi.RequireContext, includeSubdirectories: boolean, fileRegex: RegExp) => {
    return routeImporter(directory);
};

/**
 * The path of the integrations route.
 */
const integrationPath = '/integrations';

/**
 * The routes for the integrations path.
 */
const integrationRoutes = getRoutes(require.context('./integrations', false, /.*\.ts$/));

/**
 * Represents the integrations route with its path and children routes.
 */
const integrationsRoute = {
    path: integrationPath,
    children: integrationRoutes,
};

export default integrationsRoute;
