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
