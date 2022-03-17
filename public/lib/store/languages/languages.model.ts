import { BaseEntityState } from '@redactie/utils';

import { LanguageSchema } from '../../services/languages';

export interface InternalState {
	readonly language: LanguageSchema | null;
}

export type LanguageModel = LanguageSchema;

export type LanguagesState = BaseEntityState<LanguageModel, string>;
