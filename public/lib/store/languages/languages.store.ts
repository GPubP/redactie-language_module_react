import { StoreConfig } from '@datorama/akita';
import { BaseEntityStore } from '@redactie/utils';

import { LanguageModel, LanguagesState } from './languages.model';

@StoreConfig({ name: 'languages', idKey: 'uuid' })
export class LanguagesStore extends BaseEntityStore<LanguagesState, LanguageModel> {}

export const languagesStore = new LanguagesStore();
