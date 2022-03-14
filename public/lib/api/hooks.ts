import { useLanguages } from '../hooks';
import { LanguagesModuleAPI } from '../language.types';

export const hooks: LanguagesModuleAPI['hooks'] = {
	useLanguages,
};
