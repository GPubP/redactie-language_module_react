import { LanguageModel, LanguagesFacade, LanguagesState } from '../../lib/store/languages';
import { useActiveLanguages, useActiveLanguagesForSite, useLanguages } from '../hooks';
import { LanguagesApiService } from '../services/languages';

export interface LanguagesModuleStoreAPI {
	languages: {
		service: LanguagesApiService;
		facade: Pick<LanguagesFacade, 'getLanguages' | 'getActiveLanguages'>;
	};
}

export interface LanguagesModuleHooksAPI {
	useLanguages: typeof useLanguages;
	useActiveLanguages: typeof useActiveLanguages;
	useActiveLanguagesForSite: typeof useActiveLanguagesForSite;
}

export interface LanguagesModuleAPI {
	store: LanguagesModuleStoreAPI;
	hooks: LanguagesModuleHooksAPI;
}

export { LanguageModel, LanguagesState };
