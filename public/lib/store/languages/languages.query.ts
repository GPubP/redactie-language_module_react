import { isNil } from '@datorama/akita';
import { BaseEntityQuery } from '@redactie/utils';
import { distinctUntilChanged, filter } from 'rxjs/operators';

import { LanguagesState } from './languages.model';
import { languagesStore } from './languages.store';

export class LanguagesQuery extends BaseEntityQuery<LanguagesState> {
	public meta$ = this.select(state => state.meta).pipe(
		filter(meta => !isNil(meta), distinctUntilChanged())
	);
	public languages$ = this.selectAll();
	public language$ = this.select(state => state.language).pipe(
		filter(language => !isNil(language), distinctUntilChanged())
	);
	public languageDraft$ = this.select(state => state.languageDraft).pipe(
		filter(languageDraft => !isNil(languageDraft), distinctUntilChanged())
	);
}

export const languagesQuery = new LanguagesQuery(languagesStore);
