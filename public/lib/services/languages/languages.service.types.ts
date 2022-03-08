import { EmbeddedResponse, SearchParams } from '@redactie/utils';

export interface LanguagesSearchParams extends Omit<SearchParams, 'search'> {
	search?: string[];
}

export type LanguagesSchema = EmbeddedResponse<LanguageSchema>;

export interface LanguageSchema {
	uuid?: string;
	_id?: string;
	name?: string;
	key?: string;
	localizedName?: string;
	primary?: boolean;
	active?: boolean;
}
