import { languagesApiService } from '../services/languages';
import { languagesFacade } from '../store/languages';

import { LanguagesModuleStoreAPI } from './api.types';

export const store: LanguagesModuleStoreAPI = {
	languages: {
		service: languagesApiService,
		facade: {
			getLanguages: languagesFacade.getLanguages.bind(languagesFacade),
			getActiveLanguages: languagesFacade.getActiveLanguages.bind(languagesFacade),
		},
	},
};
