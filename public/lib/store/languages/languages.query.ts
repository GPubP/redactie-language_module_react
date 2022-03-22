import { BaseEntityQuery } from '@redactie/utils';

import { LanguagesState } from './languages.model';
import { languagesStore } from './languages.store';

export class LanguagesQuery extends BaseEntityQuery<LanguagesState> {
	public languages$ = this.select(state => state.languages);
	public activeLanguages$ = this.select(state => state.activeLanguages);
	public isFetchingActiveLanguages$ = this.select(state => state.isFetchingActiveLanguages);
}

export const languagesQuery = new LanguagesQuery(languagesStore);
