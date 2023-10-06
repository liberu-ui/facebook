import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./integrations', false, /.*\.js$/));

export default {
    path: '/integrations',
    children: routes,
};
