import { ModuleRouteConfig, RouteConfigComponentProps } from '@redactie/redactie-core';

export interface LanguagesModuleRouteProps extends RouteConfigComponentProps {
	routes: ModuleRouteConfig[];
	tenantId: string;
}

export interface LanguagesOverviewRowData {
	name: string;
	uuid: string;
	sites: any[];
}

export enum ALERT_CONTAINER_IDS {
	languageOverview = 'language-overview',
}

export * from './api/api.types';
