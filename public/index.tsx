import Core from '@redactie/redactie-core';
import { RenderChildRoutes, TenantContext } from '@redactie/utils';
import React, { FC, useMemo } from 'react';

import { registerTranslations } from './lib/i18next';
import { MODULE_PATHS } from './lib/language.const';
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
