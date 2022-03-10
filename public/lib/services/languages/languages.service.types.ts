import { EmbeddedResourceResponse } from '@redactie/utils';

export type LanguagesSchema = EmbeddedResourceResponse<'languages', LanguageSchema>;

export interface LanguageSchema {
	uuid?: string;
	_id?: string;
	name?: string;
	key?: string;
	localizedName?: string;
	primary?: boolean;
	active?: boolean;
}
