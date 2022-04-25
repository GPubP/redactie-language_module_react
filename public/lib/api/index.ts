import Core from '@redactie/redactie-core';

import { LanguagesModuleAPI } from '../language.types';

import { hooks } from './hooks';
import { store } from './store';

const API: LanguagesModuleAPI = {
	store,
	hooks,
};

export const registerLanguagesModule = (): void => {
	Core.modules.exposeModuleApi('languages-module', API);
};

export { API };
