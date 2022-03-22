import { BaseEntityState } from '@redactie/utils';

import { LanguageSchema } from '../../services/languages';

export interface InternalState {
	readonly language: LanguageSchema | null;
}

export type LanguageModel = LanguageSchema;

export interface LanguagesState extends BaseEntityState<LanguageModel, string> {
	languages: LanguageModel[];
	activeLanguages: LanguageModel[];
	isFetchingActiveLanguages: boolean;
}
