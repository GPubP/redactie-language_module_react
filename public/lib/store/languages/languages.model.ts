import { BaseEntityState, Page } from '@redactie/utils';

import { LanguageSchema } from '../../services/languages';

export interface InternalState {
	readonly language: LanguageSchema | null;
}

export type LanguageModel = LanguageSchema;

export interface LanguagesState extends BaseEntityState<LanguageModel, string> {
	language?: LanguageModel;
	languageDraft?: LanguageModel;
}
