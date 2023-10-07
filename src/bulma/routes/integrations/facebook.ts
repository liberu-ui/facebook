import routeImporter, { RouteImporterType } from '@liberu-ui/ui/src/modules/importers/routeImporter';
import { RouteConfig } from 'vue-router';

/**
 * Returns the routes for the Facebook module.
 * @param {RouteImporterType} moduleContext - The module context for the Facebook module.
 * @returns {Array<RouteConfig>} - The routes for the Facebook module.
 */
const getRoutes = (moduleContext: RouteImporterType): Array<RouteConfig> => {
  return routeImporter(moduleContext);
};

/**
 * Asynchronously imports the Router component.
 * @returns {Promise} - A Promise that resolves to the Router component.
 */
const importRouterComponent = (): Promise<any> => {
  return import('@liberu-ui/ui/src/bulma/pages/Router.vue');
};

/**
 * The routes for the Facebook module.
 * @type {RouteConfig}
 */
const facebookRoutes: RouteConfig = {
  path: 'facebook/',
  component: () => importRouterComponent(),
  meta: {
    breadcrumb: 'facebook',
  },
  children: getRoutes(require.context('./facebook', false, /.*\.ts$/)),
};

export default facebookRoutes;