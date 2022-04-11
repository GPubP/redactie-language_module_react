import Core from '@redactie/redactie-core';
import { RenderChildRoutes, TenantContext } from '@redactie/utils';
import React, { FC, useMemo } from 'react';

import { registerLanguagesModule } from './lib/api';
import { ContentDetailTab } from './lib/components/ContentDetailTab';
import contentConnector from './lib/connectors/content';
import { registerTranslations } from './lib/i18next';
import { CONFIG, MODULE_PATHS } from './lib/language.const';
import { LanguagesModuleRouteProps } from './lib/language.types';
import { LanguagesOverview } from './lib/views';

registerTranslations();

const LanguagesRoot: FC<LanguagesModuleRouteProps> = ({ route, tenantId }) => {
	const guardsMeta = useMemo(() => ({ tenantId }), [tenantId]);

	return (
		<TenantContext.Provider value={{ tenantId }}>
			<RenderChildRoutes routes={route.routes} guardsMeta={guardsMeta} />
		</TenantContext.Provider>
	);
};

Core.routes.register({
	path: MODULE_PATHS.root,
	breadcrumb: false,
	component: LanguagesRoot,
	redirect: MODULE_PATHS.overview,
	navigation: {
		label: 'Talen',
		order: 5,
	},
	routes: [
		{
			path: MODULE_PATHS.overview,
			breadcrumb: false,
			component: LanguagesOverview,
		},
	],
});

contentConnector.registerContentDetailTab(CONFIG.name, {
	label: 'Vertaal',
	module: CONFIG.module,
	component: ContentDetailTab,
	containerId: 'content-detail' as any,
});

registerLanguagesModule();

export * from './lib/api/api.types';
export * from './lib/services/languages/languages.service.types';
