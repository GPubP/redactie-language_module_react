import { BaseEntityQuery } from '@redactie/utils';

import { LanguagesState } from './languages.model';
import { languagesStore } from './languages.store';

export class LanguagesQuery extends BaseEntityQuery<LanguagesState> {
	public languages$ = this.selectAll();
}

export const languagesQuery = new LanguagesQuery(languagesStore);
