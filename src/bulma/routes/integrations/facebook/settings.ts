/**
 * The index component for the Facebook integration settings page.
 * 
 * @remarks
 * This component is responsible for displaying the settings for the Facebook integration.
 */
const SettingsIndex = () => import('../../../pages/integrations/settings/Index');

/**
 * The Facebook integration settings route.
 * 
 * @remarks
 * This route represents the route for the Facebook integration settings page.
 */
export default {
    /**
     * The name of the Facebook integration settings route.
     */
    name: 'integrations.facebook.settings.index',
    /**
     * The path of the Facebook integration settings route.
     */
    path: 'settings',
    /**
     * The component to be rendered for the Facebook integration settings route.
     */
    component: SettingsIndex,
    /**
     * The metadata for the Facebook integration settings route.
     */
    meta: {
        /**
         * The breadcrumb text for the Facebook integration settings route.
         */
        breadcrumb: 'settings',
        /**
         * The title of the Facebook integration settings page.
         */
        title: 'Settings',
    },
};