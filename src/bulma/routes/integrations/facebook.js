import routeImporter from '@liberu-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./facebook', false, /.*\.js$/));
const Router = () => import('@liberu-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'facebook/',
    component: Router,
    meta: {
        breadcrumb: 'facebook',
    },
    children: routes,
};
