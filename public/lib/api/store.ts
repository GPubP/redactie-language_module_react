import { LanguagesModuleAPI } from '../language.types';
import { languagesApiService } from '../services/languages';
import { languagesFacade } from '../store/languages';

export const store: LanguagesModuleAPI['store'] = {
	sites: {
		service: languagesApiService,
		facade: {
			getLanguages: languagesFacade.getLanguages.bind(languagesFacade),
		},
	},
};
