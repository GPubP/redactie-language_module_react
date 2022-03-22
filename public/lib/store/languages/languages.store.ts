import { StoreConfig } from '@datorama/akita';
import { BaseEntityStore } from '@redactie/utils';

import { LanguageModel, LanguagesState } from './languages.model';

@StoreConfig({ name: 'languages', idKey: 'uuid' })
export class LanguagesStore extends BaseEntityStore<LanguagesState, LanguageModel> {
	languageIdDeactivating?: string;
	isLanguageActivating?: boolean;
	isFetchingActiveLanguages?: boolean;
	languages?: LanguageModel[];
	activeLanguages?: LanguageModel;
}

const initialState = {
	languageIdDeactivating: null,
	isLanguageActivating: false,
	isFetchingActiveLanguages: false,
	languages: undefined,
	activeLanguages: undefined,
};

export const languagesStore = new LanguagesStore(initialState);
