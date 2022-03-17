import { StoreConfig } from '@datorama/akita';
import { BaseEntityStore } from '@redactie/utils';

import { LanguageModel, LanguagesState } from './languages.model';

@StoreConfig({ name: 'languages', idKey: 'uuid' })
export class LanguagesStore extends BaseEntityStore<LanguagesState, LanguageModel> {
	languageIdDeactivating?: string;
	isLanguageActivating?: boolean;
}

const initialState = {
	languageIdDeactivating: null,
	isLanguageActivating: false,
};

export const languagesStore = new LanguagesStore(initialState);
