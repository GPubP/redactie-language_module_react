export const TENANT_ROOT = '/:tenantId';
export const root = '/talen';
export const dashboardRoot = `/dashboard`;

export const BREADCRUMB_OPTIONS = {
	excludePaths: ['/', '/:tenantId', '/:tenantId/sites/:siteId/bewerken'],
};

export const MODULE_PATHS = {
	root,
	dashboardRoot,
	overview: `${root}/overzicht`,
};

export const ALERT_CONTAINER_IDS = {
	overview: 'overview',
};
