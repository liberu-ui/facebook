import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./facebook', false, /.*\.js$/));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'facebook/',
    component: Router,
    meta: {
        breadcrumb: 'facebook',
    },
    children: routes,
};
