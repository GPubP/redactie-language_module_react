import { ModuleRouteConfig, RouteConfigComponentProps } from '@redactie/redactie-core';

export interface LanguagesModuleRouteProps extends RouteConfigComponentProps {
	routes: ModuleRouteConfig[];
	tenantId: string;
}
