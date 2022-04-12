export const TENANT_ROOT = '/:tenantId';
export const root = '/talen';
export const dashboardRoot = `/dashboard`;

export const urlSiteParam = 'siteId';
const siteRoot = '/content';
const contentRoot = `/:${urlSiteParam}${siteRoot}`;
export const contentDetail = `${contentRoot}/content-types/:contentTypeId/content/:contentId/overzicht`;
export const contentEdit = `${contentRoot}/content-types/:contentTypeId/content/:contentId/bewerken`;
export const contentCreate = `${contentRoot}/content-types/:contentTypeId/aanmaken/:lang/default`;

export const SITES_ROOT = 'sites';
export const BREADCRUMB_OPTIONS = {
	excludePaths: ['/', '/:tenantId', '/:tenantId/sites/:siteId/bewerken'],
};

export const CONFIG: Readonly<{ name: string; module: string }> = Object.freeze({
	name: 'languages',
	module: 'languages-module',
});

export const MODULE_PATHS = {
	root,
	dashboardRoot,
	overview: `${root}/overzicht`,
};

export const ALERT_CONTAINER_IDS = {
	overview: 'overview',
};

export const DATE_FORMATS = {
	date: 'DD/MM/YYYY',
	dateAndTime: 'DD/MM/YYYY [-] HH[u]mm',
	time: 'HH[u]mm',
};
