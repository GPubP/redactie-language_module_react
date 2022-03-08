import { EmbeddedResponse } from '@redactie/utils';

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
