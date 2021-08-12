import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./integrations', false, /.*\.js$/));

export default {
    path: '/integrations',
    children: routes,
};
