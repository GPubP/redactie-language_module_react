import { ModuleRouteConfig, RouteConfigComponentProps } from '@redactie/redactie-core';

import { useLanguages } from './hooks';
import { LanguagesApiService } from './services/languages';
import { LanguagesFacade } from './store/languages';

export interface LanguagesModuleRouteProps extends RouteConfigComponentProps {
	routes: ModuleRouteConfig[];
	tenantId: string;
}

export interface LanguagesModuleAPI {
	store: {
		languages: {
			service: LanguagesApiService;
			facade: Pick<LanguagesFacade, 'getLanguages'>;
		};
	};
	hooks: {
		useLanguages: typeof useLanguages;
	};
}

export interface LanguagesOverviewRowData {
	name: string;
	uuid: string;
	sites: any[];
}

export enum ALERT_CONTAINER_IDS {
	languageOverview = 'language-overview',
}