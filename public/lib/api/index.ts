import Core from '@redactie/redactie-core';

import { LanguagesModuleAPI } from '../language.types';

import { hooks } from './hooks';
import { store } from './store';

export const registerSitesAPI = (): void => {
	const api: LanguagesModuleAPI = {
		store,
		hooks,
	};
	Core.modules.exposeModuleApi('languages-module', api);
};
