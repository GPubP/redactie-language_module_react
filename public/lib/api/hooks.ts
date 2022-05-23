import { useActiveLanguages, useActiveLanguagesForSite, useLanguages } from '../hooks';

import { LanguagesModuleHooksAPI } from './api.types';

export const hooks: LanguagesModuleHooksAPI = {
	useLanguages,
	useActiveLanguages,
	useActiveLanguagesForSite,
};
